---

# Front-end do Projeto CI/CD

Este repositório contém a interface simples feita em **HTML, CSS e JavaScript**, pensada para ser publicada na **Vercel**.
A função dela é apenas servir como uma tela para testar e visualizar as respostas da **API que está rodando no Render**.

---

## 🚀 Como utilizar

1. Faça o deploy deste repositório diretamente na **Vercel** (você pode importá-lo do GitHub sem precisar alterar nada).
2. Após o deploy, abra o link público gerado pela Vercel.
3. No campo exibido na página, digite a URL da sua API hospedada no Render

   * Exemplo: `https://projeto-ci-cd-back-ul9j.onrender.com/`
4. Clique no botão **Testar / Chamar API** para visualizar o retorno do servidor.

A resposta recebida será exibida em formato JSON na área de saída.

---

## 📁 Estrutura dos arquivos

| Arquivo        | Função                                                                           |
| -------------- | -------------------------------------------------------------------------------- |
| **index.html** | Estrutura principal da página e campo para inserir a URL da API.                 |
| **script.js**  | Código responsável por fazer a requisição `fetch()` e mostrar o retorno na tela. |
| **style.css**  | Estilos básicos para a interface.                                                |

---

## 🔧 Personalização opcional

Se quiser deixar o front sempre apontando para a mesma API, basta editar o `script.js` e substituir a leitura do input por uma **URL fixa** colocada em uma constante.

---
