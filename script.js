
async function fetchQuote() {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex];
    } catch (error) {
      console.log('Error fetching quote:', error);
      return null;
    }
  }
  

  function displayQuote(quote) {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
  
    quoteElement.textContent = `"${quote.text}"`;
  
    authorElement.textContent = quote.author ? `- ${quote.author}` : '- Unknown';
  }
  

  async function getNewQuote() {
    const quote = await fetchQuote();
    if (quote) {
      displayQuote(quote);
    } else {
      displayQuote({ text: 'Oops! Something went wrong while fetching the quote.', author: 'Error' });
    }
  }
  
  document.getElementById('new-quote-btn').addEventListener('click', getNewQuote);
  

  getNewQuote();
  