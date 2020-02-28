const name = 'Andrew'
const userAge = 30

const user = {
    name,
    age: userAge,
    location: 'Nelson'
}

// console.log(user)

const product = {
    label: 'red note',
    price: 3,
    stock: 200,
    salePrice: undefined,
    rating: 3
}

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)