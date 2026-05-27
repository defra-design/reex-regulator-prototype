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

  applicationToEdit[0].status = 'In progress'
  applicationToEdit[0].payment = paymentDate
  res.redirect('summary');
})

router.post('/application/tasks/determination', (req, res) => {
  let applicationToEdit = req.application
  if (req.session.data['determination'] == 'No') {
    applicationToEdit[0].status = 'Rejected'
  } else {
    applicationToEdit[0].status = 'Approved'
  }
  res.redirect('../confirmation');
})


// Set contact log side nav as active while adding to log
router.get('/application/contact', (req, res, next) => {
  res.locals.currentPage = res.locals.currentPrototype+'/application/contact-log'
  next()
})

// Store each contact in log
router.post('/application/contact', (req, res) => {
  // Setup the object with a new ID and the answers given by user
  const newContact = Object.assign({
    type: req.session.data['contact-type'],
    date: new Date(),
    due: req.session.data['contact-response-due-year']+'-'+req.session.data['contact-response-due-month']+'-'+req.session.data['contact-response-due-day'],
    reason: req.session.data['contact-reason']
  })

  // Grab the current application
  let applicationToEdit = req.application

  // If there are no contacts create an empty object
  if (!applicationToEdit[0].contacts) {
    applicationToEdit[0].contacts = []
  }

  // Pass the new contact into the application
  applicationToEdit[0].contacts.unshift(newContact)

  // Move onto the contact log
  res.redirect('contact-log');
})





// Add your routes above the module.exports line
module.exports = router