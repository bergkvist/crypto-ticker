#! /usr/bin/env node
const Axios = require('axios').default
const { argv } = require('yargs')

const uppercaseCliArgs = argv._.map(arg => arg.toUpperCase())
const [ base, quote = 'USD' ] = uppercaseCliArgs

const cryptocompare = Axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/',
    timeout: 2000
})

if (base === undefined) {
    // Usage/help
    console.log(
        'Usage: crypto-ticker [base] [quote (default=USD)]',
        '\n',
        '\nwhere',
            '\n\t[base] refers to the base currency (case insensitive).',
            '\n\t[quote] refers to quote currency (case insensitive. USD if unspecified).',
        '\n',
        '\nexample:',
        '\n\t$ crypto-ticker BTC EUR',
        '\n\t3435.31\n'
    )
} else {  
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
}