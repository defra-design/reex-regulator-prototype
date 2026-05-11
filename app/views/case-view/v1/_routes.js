const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Import functions
const func = require('./_functions.js')

// Setup the prototype
router.get('*', function(req, res, next){
  // Change the service name for this whole feature
  res.locals['serviceName'] = 'Manage regulator requests'

  res.locals.currentPage = res.locals.currentPrototype+req.path

  next()
})

// Start links in prototype index setup the default data
router.get('/start', function(req, res){
  func.defaultData(req)
  res.redirect('./')
})


// REQUEST
// Search for and render the current request
router.all('/request*', function (req, res, next) {
  // If current request exists render the data else redirect to all requests page
  if (req.session.data['current-request']) {
    // Find the current request
    let requestToFind = req.session.data['current-request']
    let requests = req.session.data['requests'] || []
    let current = requests.filter(request => request.id === requestToFind)
    // Pass it through to each page as local data
    res.locals.request = current[0]
    // Store it for use in later routes
    req.request = current
    next()
  } else {
    res.redirect(res.locals.currentPrototype+'/')
  }
})

router.post('/request/duly-making', function (req, res) {
  // On duly making complete update request to in progress and move to task list
  let requestToEdit = req.request
  requestToEdit[0].status = 'In progress'
  res.redirect('task-list');
})

// Set the current page in the side nave to tasks for all questions
router.get('/request/tasks/*', function(req, res, next){
  res.locals.currentPage = res.locals.currentPrototype+'/request/task-list'
  next()
})

router.post('/request/tasks/determination', function (req, res) {
  let requestToEdit = req.request
  if (req.session.data['determination'] == 'No') {
    requestToEdit[0].status = 'Rejected'
  } else {
    requestToEdit[0].status = 'Completed'
  }
  res.redirect('../confirmation');
})

// Handle logic for all tasks
router.post('/request/tasks/:section/:question', function (req, res, next) {
  // Get each question and notes answer
  let currentQuestion = req.session.data[`${req.params.question}`]
  let currentNotes = req.session.data[`${req.params.question}Notes`]

  // Find the current request id
  let requestToFind = req.session.data['current-request']
  let requests = req.session.data['requests'] || []
  let requestId = requests.findIndex(request => request.id === requestToFind)

  // Save the question answer to the current request
  req.session.data['requests'][requestId][`${req.params.question}`] = currentQuestion

  if (currentQuestion == 'No') {
    // If the current question is No:
    // Save the notes and redirect back to the task list
    req.session.data['requests'][requestId][`${req.params.question}Notes`] = currentNotes
    res.redirect('../../task-list');
  } else if (currentQuestion == 'More information needed') {
    // If the current question needs more info:
    // Redirect to contact form to log it
    res.redirect('../../contact');
  } else {
    // Resave the answer as yes so the form can be left blank for lazy demos
    req.session.data['requests'][requestId][`${req.params.question}`] = 'Yes'
    // Continue to the next route to move to next question
    next()
  }
})

// Handle all next questions if answer is Yes

// Prelim 1
router.post('/request/tasks/preliminary/address', function (req, res) {
  res.redirect('fitAndProper');
})

// Prelim 2
router.post('/request/tasks/preliminary/fitAndProper', function (req, res) {
  res.redirect('businessPlan');
})

// Prelim 3
router.post('/request/tasks/preliminary/businessPlan', function (req, res) {
  res.redirect('uk');
})

// Prelim 4
router.post('/request/tasks/preliminary/uk', function (req, res) {
  res.redirect('../sampling-inspection/alreadyIssued');
})


// SIP 1
router.post('/request/tasks/sampling-inspection/alreadyIssued', function (req, res) {
  res.redirect('separateWaste');
})

// SIP 2
router.post('/request/tasks/sampling-inspection/separateWaste', function (req, res) {
  res.redirect('wasteType');
})

// SIP 3
router.post('/request/tasks/sampling-inspection/wasteType', function (req, res) {
  res.redirect('prnWeight');
})

// SIP 4
router.post('/request/tasks/sampling-inspection/prnWeight', function (req, res) {
  res.redirect('methodDescribed');
})

// SIP 5
router.post('/request/tasks/sampling-inspection/methodDescribed', function (req, res) {
  res.redirect('auditTrail');
})

// SIP 6
router.post('/request/tasks/sampling-inspection/auditTrail', function (req, res) {
  res.redirect('qualityControl');
})

// SIP 7
router.post('/request/tasks/sampling-inspection/qualityControl', function (req, res) {
  res.redirect('customerSpecification');
})

// SIP 8
router.post('/request/tasks/sampling-inspection/customerSpecification', function (req, res) {
  res.redirect('weightRecorded');
})

// SIP 9
router.post('/request/tasks/sampling-inspection/weightRecorded', function (req, res) {
  res.redirect('departureDestination');
})

// SIP 10
router.post('/request/tasks/sampling-inspection/departureDestination', function (req, res) {
  res.redirect('notRecycled');
})

// SIP 11
router.post('/request/tasks/sampling-inspection/notRecycled', function (req, res) {
  res.redirect('revenue');
})

// SIP 12
router.post('/request/tasks/sampling-inspection/revenue', function (req, res) {
  res.redirect('responsibility');
})

// SIP 13
router.post('/request/tasks/sampling-inspection/responsibility', function (req, res) {
  res.redirect('complianceResponsibility');
})

// SIP 14
router.post('/request/tasks/sampling-inspection/complianceResponsibility', function (req, res) {
  res.redirect('qualityResponsibility');
})

// SIP 15
router.post('/request/tasks/sampling-inspection/qualityResponsibility', function (req, res) {
  res.redirect('training');
})

// SIP 16
router.post('/request/tasks/sampling-inspection/training', function (req, res) {
  res.redirect('reporting');
})

// SIP 17
router.post('/request/tasks/sampling-inspection/reporting', function (req, res) {
  res.redirect('../../task-list');
})


// Set contact log side nav as active while adding to log
router.get('/request/contact', function (req, res, next) {
  res.locals.currentPage = res.locals.currentPrototype+'/request/contact-log'
  next()
})

// Store each contact in log
router.post('/request/contact', function (req, res) {
  // Setup the object with a new ID and the answers given by user
  const newContact = Object.assign({
    type: req.session.data['contact-type'],
    date: new Date(),
    due: req.session.data['contact-response-due-year']+'-'+req.session.data['contact-response-due-month']+'-'+req.session.data['contact-response-due-day'],
    reason: req.session.data['contact-reason']
  })

  // Grab the current request
  let requestToEdit = req.request

  // If there are no contacts create an empty object
  if (!requestToEdit[0].contacts) {
    requestToEdit[0].contacts = []
  }

  // Pass the new contact into the request
  requestToEdit[0].contacts.unshift(newContact)

  // Move onto the contact log
  res.redirect('contact-log');
})





// Add your routes above the module.exports line
module.exports = router