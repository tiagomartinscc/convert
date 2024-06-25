const amount = document.getElementById('amount')

// pegar apenas numeros
amount.addEventListener('input', (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})