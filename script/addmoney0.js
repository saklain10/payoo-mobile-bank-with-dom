document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    // console.log(typeof amount) //string
    const convertedAmount = parseFloat(amount)
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin)
    const mainBalance = document.getElementById('main-balance').innerText;
    // console.log(typeof mainBalance) //string
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else {
        console.log("Pin no. is not correct")
    }
})