const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Import functions
const func = require('./_functions.js')

// Setup the prototype
router.get('*', (req, res, next) => {
  // Change the service name for this whole feature
  res.locals['serviceName'] = 'Packaging waste applications'

  res.locals.currentPage = res.locals.currentPrototype+req.path

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
  // On duly making complete update application to in progress and move to task list
  let applicationToEdit = req.application
  if (req.session.data['payment-year'] && req.session.data['payment-month'] && req.session.data['payment-day']) {
    paymentDate = req.session.data['payment-year']+'-'+parseInt(req.session.data['payment-month']).toLocaleString(undefined, {minimumIntegerDigits: 2})+'-'+parseInt(req.session.data['payment-day']).toLocaleString(undefined, {minimumIntegerDigits: 2})
  } else {
    paymentDate = new Date().toISOString().slice(0, 10)
  }

  // Setup the object with a new audit log
  const newAudit = Object.assign({
    type: 'status',
    old: applicationToEdit[0].status,
    new: 'Duly made'
  })

  // Pass the new log into the audit
  applicationToEdit[0].audit.unshift(newAudit)

  // Save the new status and payment date
  applicationToEdit[0].status = 'Duly made'
  applicationToEdit[0].payment = paymentDate

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

router.get('/application/assign-to-me', (req, res) => {
  // Grab the current application
  let applicationToEdit = req.application

  // Setup the object with a new owner
  const newOwner = Object.assign({
    type: 'owner',
    old: applicationToEdit[0].owner || 'unassigned',
    new: 'you'
  })

  // Pass the new owner into the audit log
  applicationToEdit[0].audit.unshift(newOwner)

  // Save the new owner to the application
  applicationToEdit[0].owner = 'you'

  if (applicationToEdit[0].status != 'In progress') {
    // Setup the object with a new audit log
    const newStatus = Object.assign({
      type: 'status',
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
})

router.post('/application/assign', (req, res) => {
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
    old: applicationToEdit[0].owner || 'unassigned',
    new: owner
  })

  // Pass the new owner into the audit log
  applicationToEdit[0].audit.unshift(newOwner)

  // Save the new owner to the application
  applicationToEdit[0].owner = owner

  if (applicationToEdit[0].status != 'In progress') {
    // Setup the object with a new audit log
    const newStatus = Object.assign({
      type: 'status',
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
})

router.post('/application/tasks/determination', (req, res) => {
  let applicationToEdit = req.application
  if (req.session.data['determination'] == 'No') {
    applicationToEdit[0].status = 'Rejected'
  } else {
    applicationToEdit[0].status = 'Approved'
  }
  res.redirect('../confirmation')
})


// Set contact log side nav as active while adding to log
router.get('/application/contact', (req, res, next) => {
  res.locals.currentPage = res.locals.currentPrototype+'/application/contact-log'
  next()
})

// Store each query in log
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





// Add your routes above the module.exports line
module.exports = router