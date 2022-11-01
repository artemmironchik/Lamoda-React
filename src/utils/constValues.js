export const SORTINGS = {
    'Сначала дешевые': () => (p1, p2) => p1.price - p2.price,
    'Сначала дорогие': () => (p1, p2) => p2.price - p1.price,
    'Сначала популярные': () => (p1, p2) => p2.rating - p1.rating,
}

export const FILTERS = {
    includes: (set, field) => (o) => set.has(o[field]),
    range: (min, max, field) => (o) => o[field] >= min && o[field] <= max,
    search: (search, field) => (o) => o[field].toLowerCase().includes(search.toLowerCase()),
}

export const COLORS = ['Черный', 'Белый', 'Красный', 'Зеленый', 'Желтый', 'Синий', 'Фиолетовый', 'Голубой', 'Серый', 'Розовый']

export const RANDOMNAMES = ['Платье', 'Кеды', 'Рубашка', 'Куртка', 'Шапка', 'Майка', 'Перчатки', 'Туфли']

export const DESCRIPTIONS = ['Кожаное платье из шкуры мамонта, выращенного в Старых Дорогах', 'Пластиковые кеды fashion style 2022', 'Льняная рубашка в белорусском стиле', 'Куртка SUPREME x North Face теплая', 'Шапка-ушанка РУССКИЕ ВПЕРЕД!', 'Майка Пивозавр', 'Перчатки кожанные до локтя', 'Туфли хрустальные белоснежки']

export const URLS = ['/images/dress.jpg', '/images/gloves.jpg', '/images/hat.jpg', '/images/jacket.jpg', '/images/shirt.jpg', '/images/shoes.jpg', '/images/sneakers.jpg', '/images/tshirt.jpg']