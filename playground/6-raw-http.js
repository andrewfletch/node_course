const https = require('https')

const url = 'https://api.darksky.net/forecast/95b1edcee093a73ce4a2630ba56446af/40,-75?units=ca&lang=en'

const request = https.request(url, (response) => {
  
  let data = ''
      
  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body =JSON.parse(data)
    console.log(body)
  })

})

request.onm('error', error => {
  console.log('an error', error)
})

request.end()