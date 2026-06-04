//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {

  // Hide dismissible element on dismiss link click
  let dismiss = document.getElementById('js-dismiss')
  let dismissible = document.getElementById('js-dismissible')
  try {
    dismiss.onclick = () => {
      dismissible.style.display = 'none';
    }
  } catch (error) {
    console.error(error);
  }


  // Upgrade any select with `.js-autocomplete` class
  let autocompletes = document.querySelectorAll('.js-autocomplete')

  autocompletes.forEach(autocomplete => {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: autocomplete
    })
  })


  // Setup the org search to look for ID as well
  let selectElement = document.querySelector('#js-org-autocomplete')

  accessibleAutocomplete.enhanceSelectElement({
    defaultValue: '',
    source: (query, populateResults) => {
      const options = selectElement.querySelectorAll('option')
      let results = []

      options.forEach(
        (opt, i, list) => {
          let queryRegExp = new RegExp(query.trim(), 'i')
          let value = opt.getAttribute('value')
          let text = opt.innerText.trim()
          if (queryRegExp.test(value) || queryRegExp.test(text)) {
            results.push(text+'<br><span class="govuk-!-font-size-16">'+value+'</span>')
          }
        }
      )

      populateResults(results)
    },
    selectElement: selectElement
  })


})
