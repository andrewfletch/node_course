// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }


// const square = (x) => x * x

// console.log(square(4))

const event = {
    name: 'Bday ptay',
    guestList: ['Me', 'Mel', 'Melvin'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach( (guest) => {
            console.log(guest + 'will be attending ' + this.name)
        })
    }
}

event.printGuestList()