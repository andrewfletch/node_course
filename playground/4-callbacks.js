// setTimeout(() => {
//     console.log('2 sec are done')
// }, 2000)

// const names = ['me', 'you', 'shennan']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('philadelphia', (data) => {
//     console.log(data)
// })


const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})