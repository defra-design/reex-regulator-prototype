const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('*', function(req, res, next){
  // Change the service name for this whole feature
  res.locals['serviceName'] = 'Manage regulator requests'

  next()
})

router.post('/address-check', function (req, res) {
  req.session.data['address-check-complete'] = true
  res.redirect('fit-and-proper-check');
})






// Add your routes above the module.exports line
module.exports = router