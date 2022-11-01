import { RANDOMNAMES, DESCRIPTIONS, COLORS, URLS } from "./constValues.js"

export const generateCards = (n = 500) => {
    const cards = []
    
    for(let i = 0; i < n; i++) {
        cards.push(generateCard())
    }
    
    return cards
}

const generateCard = () => ({
    id: Math.floor(Math.random() * Date.now()),
    name: RANDOMNAMES[Math.floor(Math.random() * RANDOMNAMES.length)],
    description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)],
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    price: 10 + Math.floor(Math.random() * 9989),
    rating: Math.floor(Math.random() * 99),
    imageURL: URLS[Math.floor(Math.random() * URLS.length)]
})
