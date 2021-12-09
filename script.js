const stockData = []
const ticker = document.querySelector("#ticker").value
const api_token = "X3ZH5F4C7ZCUID7K"


document.querySelector("button").addEventListener("click", function(e) {
    console.log(e)
    e.preventDefault()
    $.getJSON(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${api_token}`, data => {
        stockData.push(data["Time Series (Daily)"])
        // console.log(stockData[0]['2021-12-08']['4. close'])
        const el = document.getElementById("table")
        el.innerHTML += (
            `<tr> 
                <td> ${ticker} </td> 
                <td> ${stockData[0]['2021-12-08']['4. close']} </td> 
                <td> 2021-12-08 </td> 
            </tr>`
        )
    })
  })