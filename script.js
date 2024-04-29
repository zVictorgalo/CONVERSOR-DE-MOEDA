// Função para obter as taxas de câmbio da API ExchangeRate-API
async function getExchangeRates() {
  try {
      // Chave de API ExchangeRate-API
      const apiKey = '427e746f95389f1ba7f681e1';

      // URL base da API ExchangeRate-API
      const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

      // Faz uma solicitação GET para a API
      const response = await fetch(apiUrl);

      // Verifica se a solicitação foi bem-sucedida
      if (!response.ok) {
          throw new Error('Erro ao obter as taxas de câmbio');
      }

      // Converte a resposta para JSON
      const data = await response.json();

      // Verifica se os dados foram obtidos com sucesso
      if (data.result !== 'success') {
          throw new Error('Erro ao obter as taxas de câmbio');
      }

      // Retorna as taxas de câmbio
      return data.conversion_rates;
  } catch (error) {
      console.error('Erro ao obter as taxas de câmbio:', error.message);
      return null;
  }
}

// Função para converter moedas
async function convertCurrency() {
  try {
      // Obter as taxas de câmbio
      const rates = await getExchangeRates();

      // Obter os valores selecionados pelo usuário
      const fromCurrency = document.getElementById('from').value;
      const toCurrency = document.getElementById('to').value;
      const amount = parseFloat(document.getElementById('amount').value);

      // Verificar se as taxas de câmbio foram obtidas com sucesso
      if (!rates) {
          throw new Error('Não foi possível obter as taxas de câmbio');
      }

      // Verificar se as moedas de origem e destino são válidas
      if (!rates[fromCurrency] || !rates[toCurrency]) {
          throw new Error('Moeda de origem ou destino inválida');
      }

      // Calcular o valor convertido
      const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];

      // Exibir o valor convertido dentro do div #convertedValue
      const convertedValueElement = document.getElementById('convertedValue');
      convertedValueElement.textContent = `Valor convertido: ${convertedAmount.toFixed(2)} ${toCurrency}`;
      convertedValueElement.style.display = 'block'; // Exibir o div
  } catch (error) {
      console.error('Erro ao converter moedas:', error.message);
  }
}

// Adicionar um event listener para o botão de conversão
const convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener('click', convertCurrency);

// Função para atualizar o relógio digital
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('dateTime').textContent = `Data e Hora: ${formattedTime}`;
}

// Atualizar o relógio digital a cada segundo
setInterval(updateClock, 1000);

// Função para obter o valor atual do ouro
async function getGoldPrice() {
  try {
      // Simulando uma chamada de API para obter o valor do ouro
      const goldPrice = 1800; // Supondo que o preço do ouro seja $1800 por onça
      document.getElementById('goldPrice').textContent = `Preço do Ouro: $${goldPrice.toFixed(2)}`;
  } catch (error) {
      console.error('Erro ao obter o preço do ouro:', error.message);
  }
}

// Chamar a função para obter o preço do ouro
getGoldPrice();
// Função para atualizar o relógio digital
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = `Hora: ${formattedTime}`;

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const formattedDate = `${day}/${month}/${year}`;
  document.getElementById('date').textContent = `Data: ${formattedDate}`;
}

// Atualizar o relógio digital a cada segundo
setInterval(updateClock, 1000);

// Função para obter o valor atual do ouro
async function getGoldPrice() {
  try {
      // Simulando uma chamada de API para obter o valor do ouro
      const goldPrice = 1800; // Supondo que o preço do ouro seja $1800 por onça
      document.getElementById('goldPrice').textContent = `Preço do Ouro: $${goldPrice.toFixed(2)}`;
  } catch (error) {
      console.error('Erro ao obter o preço do ouro:', error.message);
  }
}

// Chamar a função para obter o preço do ouro
getGoldPrice();
