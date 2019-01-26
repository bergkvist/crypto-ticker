# What is this?
A command line interface for fetching the price of any cryptocurrency. It is written in NodeJs 10 (dubnium lts), and can easily be installed from the NPM package repository.

It uses the public CryptoCompare API to fetch prices.

# Usage
```bash
crypto-ticker [base] [quote (default=USD)]
```

The first argument is the **base** currency. The second argument is the **quote** currency. None of the arguments are case sensitive. 

A numeric value is returned, representing the rate of **base**/**quote**.

# Install
Depending on your node installation, you might need to run this with sudo.
```bash
npm install -g @bergkvist/crypto-ticker
```


# Examples
```bash
# Bitcoin price in Euro
$ crypto-ticker BTC EUR
 3148.33

# Ethereum price in US dollars (notice that USD is default):
$ crypto-ticker eth
 116.59

# It also works with fiat to fiat
# (The price of one Norwegian Krone in Japanese Yen)
$ crypto-ticker nok jpy
 11.5
```