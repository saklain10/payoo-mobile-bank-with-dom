document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueById("cashout-amount");
    console.log(amount)
    const pinNumber = getInputValueById("cashout-pin");
    console.log(pinNumber)
    const mainBalance = getInnerTextById("main-balance")
    console.log(mainBalance)

    if (amount > mainBalance) {
        alert("invalid amount")
        return;

    }

    if (accountNumber.length === 11) {
        if (pinNumber === 1234) {
            const sum = mainBalance - amount;
            setInnerTextByIDandValue("main-balance", sum)

            const container = document.getElementById("transection-container")
            const p = document.createElement("p");
            p.innerText = `
           cashout ${amount} form this ${accountNumber} account
           `
            container.appendChild(p)


        }
    }
    else {
        alert("ac thik nai")
    }
})

