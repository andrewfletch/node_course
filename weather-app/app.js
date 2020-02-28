const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const location = process.argv[2]

if (!location) { 
    console.log(chalk.red.inverse('No location given!'))
} else {
    geocode(location, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            
            console.log(location)
            console.log(forecastData)
    
        })
    })
}


