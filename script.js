
function createQuote(author, text, category, backText) {
    return { author, text, category, backText };
}


const quotes = [
    //Category One
    createQuote("Douglas Adams", "I love deadlines. I like the whooshing sound they make as they fly by.", 'category1', 'Douglas Adams'),

    //Category Two
    createQuote("Steve Jobs", "Your time is limited, don't waste it living someone else's life.", 'category2', 'Back of Card 2'),

];


const quoteContainer = document.getElementById('quote-container');
const generateQuoteButton = document.getElementById('generate-quote');
const removeQuoteButton = document.getElementById('remove-quote');


generateQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    const flipCard = document.createElement('div');
    flipCard.classList.add('flip-card', quote.category);
    flipCard.setAttribute('onclick', 'flipCard(this)');

    const flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');

    const flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');
    flipCardFront.innerHTML = `<p>${quote.text}</p><p class="author">${quote.author}</p>`;

    const flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back');
    flipCardBack.innerHTML = `<p>${quote.backText}</p>`;

    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);

    quoteContainer.appendChild(flipCard);
});



removeQuoteButton.addEventListener('click', () => {
    const lastFlipCard = quoteContainer.lastChild;
    if (lastFlipCard) {
        quoteContainer.removeChild(lastFlipCard);
    }
});

function flipCard(card) {
    card.querySelector('.flip-card-inner').classList.toggle('flipped');
}

function filterCards(category) {
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

