// Endpoint de la API para obtener las tasas de cambio (cambiar 'YOUR_API_KEY' por tu propia clave de API)
const apiKey = 'YOUR_API_KEY';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

// Elementos de la página
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const resultDisplay = document.getElementById('result');

// Cargar las tasas de cambio al cargar la página
async function loadCurrencies() {
    const response = await fetch(apiURL);
    const data = await response.json();

    // Agregar las monedas a los selectores
    const currencies = Object.keys(data.conversion_rates);
    currencies.forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;

        const option2 = option1.cloneNode(true);

        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
    });
}

// Convertir la moneda cuando se envía el formulario
document.getElementById('currencyForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    // Obtener las tasas de cambio
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
    const data = await response.json();

    const conversionRate = data.conversion_rates[to];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    // Mostrar el resultado de la conversión
    resultDisplay.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
});

loadCurrencies(); // Cargar las monedas al cargar la página
