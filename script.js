const stockData = []
const ticker = document.querySelector("#ticker").value
const quantity = document.querySelector("#quantity").value
const api_token = "X3ZH5F4C7ZCUID7K"

const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD'
})


document.querySelector("button").addEventListener("click", function(e) {
    console.log(e)
    e.preventDefault()
    $.getJSON(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${api_token}`, data => {
        stockData.push(data["Time Series (Daily)"])
        // console.log(stockData[0]['2021-12-08']['4. close'])
        const el = document.querySelector("table")
        const price = stockData[0]['2021-12-08']['4. close']
        const date = "2012-12-08"
        el.innerHTML += (
            `<tr> 
                <td> ${ticker} </td> 
                <td> ${formatter.format(price)} </td> 
                <td> ${quantity} </td> 
                <td> ${formatter.format(price * quantity)}</td> 
                <td> ${date} </td> 
            </tr>`
        )
    })
  })