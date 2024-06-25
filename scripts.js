//cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// obtendo elementos do form
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')

// pegar apenas numeros
amount.addEventListener('input', (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// capturando o evento de submit do form
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, 'US$')
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;    

  }
}

// função de conversão de moeda
function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol)
}
