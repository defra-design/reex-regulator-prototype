const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('*', function(req, res, next){
  // Change the service name for this whole feature
  res.locals['serviceName'] = 'Manage regulator requests'

  res.locals.currentPage = res.locals.currentPrototype+req.path

  next()
})

router.get('/tasks/*', function(req, res, next){
  res.locals.currentPage = res.locals.currentPrototype+'/task-list'

  next()
})

router.get('/start', function(req, res){
  // Setup default data
  req.session.data['address-status'] = 'Not started'
  req.session.data['fit-and-proper-status'] = 'Not started'
  req.session.data['uk'] = 'Yes'
  req.session.data['uk-status'] = 'Completed'
  req.session.data['spending-status'] = 'Not started'
  req.session.data['revenue-status'] = 'Not started'
  req.session.data['responsibility-status'] = 'Not started'
  req.session.data['already-issued-status'] = 'Not started'
  req.session.data['separate-waste-status'] = 'Not started'
  req.session.data['waste-type-status'] = 'Not started'
  req.session.data['prn-weight-status'] = 'Not started'
  req.session.data['method-described-status'] = 'Not started'
  req.session.data['audit-trail-status'] = 'Not started'
  req.session.data['quality-control-status'] = 'Not started'
  req.session.data['customer-specification-status'] = 'Not started'
  req.session.data['weight-recorded-status'] = 'Not started'
  req.session.data['departure-destination-status'] = 'Not started'
  req.session.data['not-recycled-status'] = 'Not started'
  req.session.data['compliance-responsibility-status'] = 'Not started'
  req.session.data['quality-responsibility-status'] = 'Not started'
  req.session.data['training-status'] = 'Not started'
  req.session.data['reporting-status'] = 'Not started'


  res.redirect('./')
})

router.post('/contact', function (req, res) {
  res.redirect('contact-log');
})

// Handle logic for all tasks
router.post('/tasks/:section/:question', function (req, res, next) {
  let question = req.session.data[`${req.params.question}`]

  if (question == 'No') {
    req.session.data[`${req.params.question}-status`] = 'Failed'
    res.redirect('../../task-list');
  } else if (question == 'More information needed') {
    req.session.data[`${req.params.question}-status`] = 'Queried'
    res.redirect('../../contact');
  } else {
    req.session.data[`${req.params.question}`] = 'Yes'
    req.session.data[`${req.params.question}-status`] = 'Completed'
    next()
  }
})

// Handle all next questions if answer is Yes
router.post('/tasks/preliminary/address', function (req, res) {
  res.redirect('fit-and-proper');
})

router.post('/tasks/preliminary/fit-and-proper', function (req, res) {
  res.redirect('uk');
})

router.post('/tasks/preliminary/uk', function (req, res) {
  res.redirect('../business/spending');
})

router.post('/tasks/business/spending', function (req, res) {
  res.redirect('revenue');
})

router.post('/tasks/business/revenue', function (req, res) {
  res.redirect('responsibility');
})

router.post('/tasks/business/responsibility', function (req, res) {
  res.redirect('../sampling-inspection/already-issued');
})

router.post('/tasks/sampling-inspection/already-issued', function (req, res) {
  res.redirect('separate-waste');
})

router.post('/tasks/sampling-inspection/separate-waste', function (req, res) {
  res.redirect('waste-type');
})

router.post('/tasks/sampling-inspection/waste-type', function (req, res) {
  res.redirect('prn-weight');
})

router.post('/tasks/sampling-inspection/prn-weight', function (req, res) {
  res.redirect('method-described');
})

router.post('/tasks/sampling-inspection/method-described', function (req, res) {
  res.redirect('audit-trail');
})

router.post('/tasks/sampling-inspection/audit-trail', function (req, res) {
  res.redirect('quality-control');
})

router.post('/tasks/sampling-inspection/quality-control', function (req, res) {
  res.redirect('customer-specification');
})

router.post('/tasks/sampling-inspection/customer-specification', function (req, res) {
  res.redirect('weight-recorded');
})

router.post('/tasks/sampling-inspection/weight-recorded', function (req, res) {
  res.redirect('departure-destination');
})

router.post('/tasks/sampling-inspection/departure-destination', function (req, res) {
  res.redirect('not-recycled');
})

router.post('/tasks/sampling-inspection/not-recycled', function (req, res) {
  res.redirect('compliance-responsibility');
})

router.post('/tasks/sampling-inspection/compliance-responsibility', function (req, res) {
  res.redirect('quality-responsibility');
})

router.post('/tasks/sampling-inspection/quality-responsibility', function (req, res) {
  res.redirect('training');
})

router.post('/tasks/sampling-inspection/training', function (req, res) {
  res.redirect('reporting');
})

router.post('/tasks/sampling-inspection/reporting', function (req, res) {
  res.redirect('../../task-list');
})





// Add your routes above the module.exports line
module.exports = router