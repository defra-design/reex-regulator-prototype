const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Import functions
const func = require('./_functions.js')

// Setup the prototype
router.get('*', (req, res, next) => {
  // Change the service name for this whole feature
  res.locals['serviceName'] = 'Packaging waste applications'

  res.locals.currentPage = res.locals.currentPrototype+req.path

  // Add main nav items
  res.locals['siteNav'] = [
    {
      name: 'Applications',
      link: res.locals.currentPrototype+'/'
    },
    {
      name: 'Manage team members',
      link: '#0'
    },
    {
      name: 'Sign out',
      link: '#0'
    }
  ]

  if (!req.session.data['applications']) {
    func.defaultData(req)
  }

  next()
})

// Start links in prototype index setup the default data
router.get('/start', (req, res) => {
  res.redirect('./')
})


// application
// Search for and render the current application
router.all('/application*', (req, res, next) => {
  // Find the current application
  let applicationToFind = req.session.data['current-application']
  let applications = req.session.data['applications']
  let current = applications.filter(application => application.id === applicationToFind)
  // Pass it through to each page as local data
  res.locals.application = current[0]
  // Store it for use in later routes
  req.application = current

  // If there is no audit log create an empty object
  if (!current[0].audit) {
    current[0].audit = []
  }
  next()
})

router.post('/application/duly-making', (req, res) => {
  // Grab the current application
  let applicationToEdit = req.application

  // Setup the payment date from answer or fallback to today
  if (req.session.data['payment-year'] && req.session.data['payment-month'] && req.session.data['payment-day']) {
    paymentDate = req.session.data['payment-year']+'-'+parseInt(req.session.data['payment-month']).toLocaleString(undefined, {minimumIntegerDigits: 2})+'-'+parseInt(req.session.data['payment-day']).toLocaleString(undefined, {minimumIntegerDigits: 2})
  } else {
    paymentDate = new Date().toISOString().slice(0, 10)
  }

  // Setup the due date based on payment date
  let dueDate = new Date()
  dueDate.setDate(dueDate.getDate() + 84);

  // Setup the object with payment date
  const payment = Object.assign({
    type: 'payment',
    date: new Date(),
    payment: paymentDate
  })
  // Pass the new status into the audit log
  applicationToEdit[0].audit.unshift(payment)

  // Setup the object with due date
  const due = Object.assign({
    type: 'due',
    date: new Date(),
    new: dueDate
  })
  // Pass the new status into the audit log
  applicationToEdit[0].audit.unshift(due)

  // Setup the object with a status
  const newStatus = Object.assign({
    type: 'status',
    date: new Date(),
    old: applicationToEdit[0].status,
    new: 'Duly made'
  })
  // Pass the new status into the audit log
  applicationToEdit[0].audit.unshift(newStatus)

  // Save the new status and payment/due dates
  applicationToEdit[0].status = 'Duly made'
  applicationToEdit[0].payment = paymentDate
  applicationToEdit[0].due = dueDate

  // Enable success banner and go back to summary
  req.session.data['notification'] = 'true'
  req.session.data['duly-made'] = 'true'
  res.redirect('summary')
})

router.get('/application/summary', (req, res, next) => {
  // Clear the notification banners
  delete req.session.data['notification']
  delete req.session.data['duly-made']
  delete req.session.data['queried']
  next()
})

const assignApplication = function (req, res) {
  // Grab the current application
  let applicationToEdit = req.application

  if (req.session.data['assign'] == 'Another officer') {
    owner = req.session.data['assign-name'] || 'Jonathan Slater'
  } else {
    owner = 'you'
  }

  // Setup the object with a new owner
  const newOwner = Object.assign({
    type: 'owner',
    date: new Date(),
    old: applicationToEdit[0].owner || 'unassigned',
    new: owner
  })

  // Pass the new owner into the audit log
  applicationToEdit[0].audit.unshift(newOwner)

  // Save the new owner to the application
  applicationToEdit[0].owner = owner

  if (applicationToEdit[0].status != 'In progress') {
    // Setup the object with a status
    const newStatus = Object.assign({
      type: 'status',
      date: new Date(),
      old: applicationToEdit[0].status,
      new: 'In progress'
    })

    // Pass the new status into the audit log
    applicationToEdit[0].audit.unshift(newStatus)

    // Save the new status to the application
    applicationToEdit[0].status = 'In progress'
  }

  // Enable success banner and go back to summary
  req.session.data['notification'] = 'true'
  req.session.data['assigned'] = 'true'
  res.redirect('summary')
}

router.get('/application/assign-to-me', (req, res) => {
  assignApplication(req, res)
})

router.post('/application/assign', (req, res) => {
  assignApplication(req, res)
})

router.post('/application/override-sla', (req, res) => {
  // Grab the current application
  let applicationToEdit = req.application

  // Setup the new date from answer or fallback to today
  if (req.session.data['sla-year'] && req.session.data['sla-month'] && req.session.data['sla-day']) {
    dueDate = req.session.data['sla-year']+'-'+parseInt(req.session.data['sla-month']).toLocaleString(undefined, {minimumIntegerDigits: 2})+'-'+parseInt(req.session.data['sla-day']).toLocaleString(undefined, {minimumIntegerDigits: 2})
  } else {
    dueDate = new Date().toISOString().slice(0, 10)
  }

  // Setup the object with new due date
  const due = Object.assign({
    type: 'due',
    date: new Date(),
    old: applicationToEdit[0].due,
    new: dueDate,
    reason: req.session.data['sla-reason']
  })

  // Pass the new due date into the audit log
  applicationToEdit[0].audit.unshift(due)

  // Save the new due date
  applicationToEdit[0].due = dueDate

  // Enable success banner and go back to summary
  req.session.data['notification'] = 'true'
  req.session.data['due-date'] = 'true'
  res.redirect('summary')
})

router.post('/application/withdraw', (req, res) => {
  // Grab the current application
  let applicationToEdit = req.application

  // Setup the object with new log for audit
  const log = Object.assign({
    type: 'withdrawn',
    date: new Date(),
    reason: req.session.data['withdraw-reason']
  })

  // Pass the new due log into the audit
  applicationToEdit[0].audit.unshift(log)

  // Update the application status
  applicationToEdit[0].status = 'Withdrawn'
  applicationToEdit[0].due = ''
  applicationToEdit[0].assignment = ''

  res.redirect('withdrawn')
})

router.post('/application/query', (req, res) => {
  // Grab the current application
  let applicationToEdit = req.application

  // Setup the object with a new ID and the answers given by user
  const newQuery = Object.assign({
    type: 'query',
    date: new Date(),
    questions: req.session.data['query-questions'],
    reason: req.session.data['query-reason']
  })

  // Pass the new contact into the application
  applicationToEdit[0].audit.unshift(newQuery)

  // Update the status of the application
  applicationToEdit[0].status = 'Queried'

  // Enable success banner and go back to summary
  req.session.data['notification'] = 'true'
  req.session.data['queried'] = 'true'
  res.redirect('summary')
})

router.post('/application/determination', (req, res) => {
  let applicationToEdit = req.application
  applicationToEdit[0].status = req.session.data['determination'] || 'Approved'
  res.redirect('confirmation')
})





// Add your routes above the module.exports line
module.exports = router