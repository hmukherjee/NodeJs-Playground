const fs = require('fs')

//sample object to insert in file
book = {
    title: "CSS",
    author: "Hemant"
}

//read all books from sample.json
const data = fs.readFileSync('./sample.json')

//parse string object to json
const savedBooks = JSON.parse(data)

//add book item to books list
savedBooks.push(book)

//save books into the file
fs.writeFileSync('./sample.json', JSON.stringify(savedBooks))