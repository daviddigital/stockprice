const stockData = []
const ticker = "IBM"

document.getElementById("button").addEventListener("click", function(e) {
    console.log(e)
    e.preventDefault()
    $.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo", data => {
        stockData.push(data["Time Series (Daily)"])
        console.log(stockData[0]['2021-12-08']['4. close'])
        const el = document.getElementById("table")
        el.innerHTML += `<tr> <td> ${ticker} </td> <td> ${stockData[0]['2021-12-08']['4. close']} </td> <td> 2021-12-08 </td> </tr>`
    })
  })