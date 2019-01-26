#! /usr/bin/env node
const Axios = require('axios').default
const { argv } = require('yargs')

const uppercaseCliArgs = argv._.map(arg => arg.toUpperCase())
const [ base, quote = 'USD' ] = uppercaseCliArgs

const cryptocompare = Axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/',
    timeout: 2000
})

cryptocompare.get(`price?fsym=${base}&tsyms=${quote}`)
    .then(response => {
        const price = response.data[quote]
        if (price !== undefined) {
            console.log(price)
        } else {
            console.log(response.data.Message) /* Error message */
        }
    })
    .catch(error => console.log('N/A') /* Timed out */)