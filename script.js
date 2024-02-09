// Factory Pattern for Quotes
function createQuote(author, text, category, backText) {
    return { author, text, category, backText };
}

const quotes = [
    //Category One
    createQuote("-Elf", "You sit on a throne of lies.", 'category1', 'Movie made in 2003'),
    createQuote("-Monty Python and the Holy Grail", "It's just a flesh wound.", 'category1', 'Movie made in 1975'),
    createQuote("-Airplane", "Looks like I picked the wrong week to quit sniffing glue.", 'category1', 'Movie made in 1980'),
    createQuote("-The Sandlot", "You're killing me, Smalls.", 'category1', 'Movie made in 1993'),
    createQuote("-The Godfather", "Leave the gun. Take the cannoli.", 'category1', 'Movie made in 1972'),
    createQuote("-Friday", "Bye, Felicia", 'category1', 'Movie made in 1995'),
    createQuote("-Dumb and Dumber", "So you're telling me there's a chance ...", 'category1', 'Movie made in 1994'),
    createQuote("-The Breakfast Club", "Eat my shorts.", 'category1', 'Movie made in 1985'),
    createQuote("-Wayne's World", "Exsqueeze me?", 'category1', 'Movie made in 1992'),
    createQuote("-Elf", "I am a cotton-headed ninny-muggins!", 'category1', 'Movie made in 2003'),
    createQuote("-Anchorman", "I'm in a glass case of emotion!", 'category1', 'Movie made in 2004'),
    createQuote("-Home Alone", "Keep the change, ya filthy animal.", 'category1', 'Movie made in 1990'),
    createQuote("-The Breakfast Club", "Did I stutter?", 'category1', 'Movie made in 1985'),

    //Category Two
    createQuote("-The Godfather Part II", "I know. I know it was you. You broke my heart.", 'category2', 'Movie made in 1974'),
    createQuote("-The Last Samurai", "I want you to know that you were the last dream of my soul.", 'category2', 'Movie made in 2003'),
    createQuote("-Casablanca", "Here's looking at you, kid.", 'category2', 'Movie made in 1942'),
    createQuote("-Meet Joe Black", "I'm not afraid of dying. I'm afraid I haven't been alive enough.", 'category2', 'Movie made in 1998'),
    createQuote("-The Wizard of Oz", "A heart is not judged by how much you love, but by how much you are loved by others.", 'category2', 'Movie made in 1939'),
    createQuote("-The Curious Case of Benjamin Button", "The worst part of being dead is knowing that you were never alive.", 'category2', 'Movie made in 2008'),
    createQuote("-Inside Out", "Take her to the moon for me, okay?", 'category2', 'Movie made in 2015'),
    createQuote("-Up", "Thanks for the adventures; now go have a new one! Love, Ellie.", 'category2', 'Movie made in 2009'),
    createQuote("-Star Trek II: The Wrath of Khan", "I have been, and always shall be, your friend.", 'category2', 'Movie made in 1982'),
    createQuote("-Forrest Gump", "Why don't you love me, Jenny? I'm not a smart man, but I know what love is.", 'category2', 'Movie made in 1994'),
    createQuote("-The Hunger Games", "You don't forget the face of the person who was your last hope.", 'category2', 'Movie made in 2012'),
    createQuote("-Titanic", "I'll never let go, Jack.", 'category2', 'Movie made in 1997'),
    createQuote("-The Notebook", "I'm scared to lose you and you're not even mine.", 'category2', 'Movie made in 2004'),



];

const quoteContainer = document.getElementById('quote-container');
const generateQuoteButton = document.getElementById('generate-quote');
const removeQuoteButton = document.getElementById('remove-quote');
const displayAllButton = document.getElementById('display-all');
const removeAllButton = document.getElementById('remove-all');


// Display quotes from specific categories without generating them
function displayQuotesByCategories(categories) {
    quotes.forEach(quote => {
        if (categories.includes(quote.category)) {
            const flipCard = document.createElement('div');
            flipCard.classList.add('flip-card', quote.category);

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
        }
    });
}

// Event listener for the "Display All" button
displayAllButton.addEventListener('click', () => {
    // Clear existing quotes in the container
    quoteContainer.innerHTML = '';
    // Display quotes from all categories
    displayQuotesByCategories(['category1', 'category2']);
});

// Event listener for the "Remove All" button
removeAllButton.addEventListener('click', () => {
    // Clear all quotes in the container
    quoteContainer.innerHTML = '';
});


generateQuoteButton.addEventListener('click', () => {
    generateRandomCards();
});

removeQuoteButton.addEventListener('click', () => {
    removeLastCard();
});

function generateRandomCards() {
    if (quotes.length === 0) {
        alert("No more cards available.");
        return;
    }

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

    quotes.splice(randomIndex, 1);
}

function removeLastCard() {
    const lastFlipCard = quoteContainer.lastChild;
    if (lastFlipCard) {
        quoteContainer.removeChild(lastFlipCard);
    }
}

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
