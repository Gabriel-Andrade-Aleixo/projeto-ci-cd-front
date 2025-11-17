const btnTestar = document.querySelector('#btnChamar');
const boxSaida = document.querySelector('#saida');
const campoApi = document.querySelector('#apiUrl');

const testarAPI = async () => {
  const endpoint = campoApi.value?.trim();

  if (!endpoint) {
    boxSaida.textContent = 'Digite uma URL válida da API.';
    return;
  }

  boxSaida.textContent = 'Conectando...';

  try {
    const resposta = await fetch(endpoint);
    const corpo = await resposta.json();
    boxSaida.textContent = JSON.stringify(corpo, null, 2);
  } catch (e) {
    boxSaida.textContent = `Falha ao acessar o servidor: ${e.message}`;
  }
};

btnTestar.addEventListener('click', testarAPI);
