// Array of Stoic quotes
const stoicQuotes = [
    {
        quote: "It is not that we have a short time to live, but that we waste much of it.",
        author: "Seneca"
    },
    {
        quote: "He who fears death will never do anything worth of a man who is alive.",
        author: "Seneca"
    },
    {
        quote: "It is not the man who has too little, but the man who craves more, that is poor.",
        author: "Seneca"
    },
    {
        quote: "The best revenge is to be unlike him who performed the injustice.",
        author: "Marcus Aurelius"
    },
    {
        quote: "The happiness of your life depends upon the quality of your thoughts.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Waste no more time arguing about what a good man should be. Be one.",
        author: "Marcus Aurelius"
    },
];

// Function to display quotes on the webpage
function displayQuotes() {
    const quoteContainer = document.getElementById("quote-container");

    stoicQuotes.forEach(quote => {
        const quoteCard = document.createElement("div");
        quoteCard.classList.add("quote");

        const quoteText = document.createElement("p");
        quoteText.textContent = `"${quote.quote}"`;

        const authorText = document.createElement("span");
        authorText.textContent = `- ${quote.author}`;

        quoteCard.appendChild(quoteText);
        quoteCard.appendChild(authorText);
        quoteContainer.appendChild(quoteCard);
    });
}

// Call the function to display quotes
displayQuotes();
