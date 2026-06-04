const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter
const dateFilter = require('nunjucks-date-filter')

addFilter('date', dateFilter)
dateFilter.setDefaultFormat('D MMMM YYYY')

addFilter('push', (array, item) => {
	array.push(item)
	return array
})

addFilter('cleanArray', (array) => {
	return array.filter(item => {
		return (item && (item !==""))
	})
})

addFilter('currency', function(num) {
	return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(num).replace(/\.00$/, '')
})

addFilter('highlight', function (content) {
	return '<strong class="hods-highlight">' + content + '</strong>'
}, { renderAsHtml: true })

addFilter('arrayToGovukList', (array, type) => {
	let items = new Array()

	array.forEach((item) => {
		items.push('<li>'+item+'</li>')
	})

	return '<ul class="govuk-list '+type+'">'+items.join('')+'</ul>'
})