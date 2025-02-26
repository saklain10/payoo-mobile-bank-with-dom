// step-1: id k dhorci getelementbyid
document.getElementById('login-btn').addEventListener('click', function (event) {
    // console.log(event)
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById
        ('pin').value;
    // console.log(typeof pin)
    const convertedPin = parseInt(pin)   //********************* */

    // console.log(accountNumber, pin)
    // console.log(accountNumber.length)
    if (accountNumber.length === 11) {
        console.log(typeof pin)
        if (parseInt(pin) === 1234) {
            window.location.href = "./main.html"
        }
        else {
            alert("pin thik nai")
        }
    }
    else {
        alert("need valid account number")
    }
})