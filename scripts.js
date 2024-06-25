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
}