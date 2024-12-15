document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'claires',
            img: 'images/claires.png'
        },
        {
            name: 'mike',
            img: 'images/mike.png'
        },
        {
            name: 'jay',
            img: 'images/jay.png'
        },
        {
            name: 'jr',
            img: 'images/jr.png'
        },
        {
            name: 'katie',
            img: 'images/katie.png'
        },
        {
            name: 'franklin',
            img: 'images/franklin.png'
        },
        {
            name: 'claires',
            img: 'images/claires.png'
        },
        {
            name: 'mike',
            img: 'images/mike.png'
        },
        {
            name: 'jay',
            img: 'images/jay.png'
        },
        {
            name: 'jr',
            img: 'images/jr.png'
        },
        {
            name: 'katie',
            img: 'images/katie.png'
        },
        {
            name: 'franklin',
            img: 'images/franklin.png'
        },

    ];

    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const attemptsMade = document.querySelector('.attemptsMade');
    const matchesMade = document.querySelector('.matchesMade');

    let attempts = 0;
    let matches = 0;

    attemptsMade.textContent = attempts;
    matchesMade.textContent = matches;


    let cardsPicked = [];
    let cardsPickedId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/front.png')
            card.setAttribute('data-id', i);
            grid.appendChild(card)
            card.addEventListener('click', flipCard)
        }
    }

    function flipCard() {
        if (cardsPicked.length != 2) {
            let cardId = this.getAttribute('data-id')
            if (this.getAttribute('src') != 'images/blank.png') {
                cardsPicked.push(cardArray[cardId].name);
                cardsPickedId.push(cardId)
                this.setAttribute('src', cardArray[cardId].img)
                if (cardsPicked.length == 2) {
                    setTimeout(checkMatch, 400);

                }

            }

        }
    }

    function checkMatch() {
        attempts++; //keeping track of user attempts
        const card = document.querySelectorAll('img')
        const firstCard = cardsPickedId[0]
        const secondCard = cardsPickedId[1]

        if (firstCard[0] == secondCard[1]) {
            card[firstCard].setAttribute('src', 'images/front.png');
            card[secondCard].setAttribute('src', 'images/front.png')
        }
        else if (cardsPicked[0] === cardsPickedId[1]) {
            card[firstCard].setAttribute('src', 'images/blank.png')
            card[secondCard].setAttribute('src', 'images/blank.png')
            card[firstCard].removeEventListener('click', flipCard)
            card[secondCard].removeEventListener('click', flipCard)
            cardsWon.push(cardsPicked)
        } else {
            cardsPicked[firstCard].setAttribute('src', 'images/front.png');
            cardsPicked[secondCard].setAttribute('src', 'images/front.png');

        }
        cardsPicked = []
        cardsPickedId = []
        attemptsMade.textContent = attempts;
        matchesMade.textContent = matches;
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations! You have found the matches!"
        }

    }

    createBoard()
})