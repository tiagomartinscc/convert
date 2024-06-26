// obtendo elementos do form
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// pegar apenas numeros
amount.addEventListener('input', (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// capturando o evento de submit do form
form.onsubmit = async (event) => {
  event.preventDefault()
  let price = await getPrice(currency.value)
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, price, 'US$')
      break;
    case "EUR":
      convertCurrency(amount.value, price, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, price, "£")
      break;
  }
}

async function getPrice(currency) {
  const url = `https://economia.awesomeapi.com.br/json/last/${currency}`
  const response = await fetch(url)
  const data = await response.json()
  return data[`${currency}BRL`].bid
}

// função de conversão de moeda
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    // calcula o total
    let total = amount * price

    if (isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter!")
    }

    total = formatCurrencyBRL(total).replace('R$', '')
    // exibe o total
    result.textContent = `${total} Reais`
    
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde!")
  }
}

//formata moeda para real brasileiro
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}
