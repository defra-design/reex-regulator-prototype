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
    let requestToFind = req.session.data['current-request']
    let requests = req.session.data['requests'] || []
    let current = requests.filter(request => request.id === requestToFind)
    res.locals.request = current[0]
    req.request = current

    next()
  } else {
    res.redirect(res.locals.currentPrototype+'/')
  }
})

// Handle logic for all tasks
router.post('/request/duly-making', function (req, res) {
  let requestToEdit = req.request
  requestToEdit.status = 'In progress'
  res.redirect('task-list');
})



// Set the current page in the side nave to tasks for all questions
router.get('/request/tasks/*', function(req, res, next){
  res.locals.currentPage = res.locals.currentPrototype+'/request/task-list'

  next()
})

router.get('/request/contact', function (req, res, next) {
  res.locals.currentPage = res.locals.currentPrototype+'/contact-log'

  next()
})

router.post('/request/contact', function (req, res) {
  res.redirect('contact-log');
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
    // If the current question is Yes continue to the next route to move to next question
    next()
  }
})

// Handle all next questions if answer is Yes
router.post('/request/tasks/preliminary/address', function (req, res) {
  res.redirect('fitAndProper');
})

router.post('/request/tasks/preliminary/fitAndProper', function (req, res) {
  res.redirect('uk');
})

router.post('/request/tasks/preliminary/uk', function (req, res) {
  res.redirect('../business/spending');
})

router.post('/request/tasks/business/spending', function (req, res) {
  res.redirect('revenue');
})

router.post('/request/tasks/business/revenue', function (req, res) {
  res.redirect('responsibility');
})

router.post('/request/tasks/business/responsibility', function (req, res) {
  res.redirect('../sampling-inspection/alreadyIssued');
})

router.post('/request/tasks/sampling-inspection/alreadyIssued', function (req, res) {
  res.redirect('separateWaste');
})

router.post('/request/tasks/sampling-inspection/separateWaste', function (req, res) {
  res.redirect('wasteType');
})

router.post('/request/tasks/sampling-inspection/wasteType', function (req, res) {
  res.redirect('prnWeight');
})

router.post('/request/tasks/sampling-inspection/prnWeight', function (req, res) {
  res.redirect('method-described');
})

router.post('/request/tasks/sampling-inspection/method-described', function (req, res) {
  res.redirect('auditTrail');
})

router.post('/request/tasks/sampling-inspection/auditTrail', function (req, res) {
  res.redirect('qualityControl');
})

router.post('/request/tasks/sampling-inspection/qualityControl', function (req, res) {
  res.redirect('customerSpecification');
})

router.post('/request/tasks/sampling-inspection/customerSpecification', function (req, res) {
  res.redirect('weightRecorded');
})

router.post('/request/tasks/sampling-inspection/weightRecorded', function (req, res) {
  res.redirect('departureDestination');
})

router.post('/request/tasks/sampling-inspection/departureDestination', function (req, res) {
  res.redirect('notRecycled');
})

router.post('/request/tasks/sampling-inspection/notRecycled', function (req, res) {
  res.redirect('complianceResponsibility');
})

router.post('/request/tasks/sampling-inspection/complianceResponsibility', function (req, res) {
  res.redirect('qualityResponsibility');
})

router.post('/request/tasks/sampling-inspection/qualityResponsibility', function (req, res) {
  res.redirect('training');
})

router.post('/request/tasks/sampling-inspection/training', function (req, res) {
  res.redirect('reporting');
})

router.post('/request/tasks/sampling-inspection/reporting', function (req, res) {
  res.redirect('../../task-list');
})





// Add your routes above the module.exports line
module.exports = router