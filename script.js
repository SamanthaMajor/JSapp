function filterCards(category) {
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        const cardCategory = card.classList[1];
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function flipCard(card) {
    const inner = card.querySelector('.flip-card-inner');
    inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

filterCards('all');
