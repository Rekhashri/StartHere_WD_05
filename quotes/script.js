const quoteElement = document.getElementById('quote');

// Function to fetch a random quote from the Quotable API
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        const quote = data.content;
        const author = data.author;
        quoteElement.innerHTML = `"${quote}" - ${author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteElement.innerHTML = 'Failed to fetch quote. Please try again later.';
    }
}

// Fetch a random quote when the page loads
fetchQuote();

// Reload the page every 10 seconds to display a new quote
setInterval(fetchQuote, 10000); // 10000 milliseconds = 10 seconds
