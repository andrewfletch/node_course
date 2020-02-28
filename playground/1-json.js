const fs = require('fs')

// const book = {
//     title: 'Go Dog Go',
//     author: 'Dr Seuss'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

myData = fs.readFileSync('/home/andrew/node_projects/node-course/playground/1-json.json')
parsedData = JSON.parse(myData)

parsedData.age = 30

fs.writeFileSync('1-json.json',JSON.stringify(parsedData))