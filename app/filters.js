const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter
const moment = require('moment')


addFilter('push', (array, item) => {
	array.push(item)
	return array
})

addFilter('cleanArray', (array) => {
	return array.filter(item => {
		return (item && (item !==""))
	})
})

addFilter('formatDate', (date) => {
	var date = moment(date)
	return date.format('D MMMM YYYY')
})

addFilter('daysInFuture', (number) => {
	var date = moment().add(number,"days").format("D MMMM YYYY")
	return date
})

addFilter('daysInFutureShort', (number) => {
	var date = moment().add(number,"days").format("D MMM YYYY")
	return date
})

addFilter('currency', function(num) {
	return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(num).replace(/\.00$/, '')
})

addFilter('highlight', function (content) {
	return '<span class="app-highlight">' + content + '</span>'
}, { renderAsHtml: true })