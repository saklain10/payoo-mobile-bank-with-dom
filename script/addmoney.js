document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueById("amount")
    const pin = getInputValueById("pin")
    const account = document.getElementById("account-number").value
    // const mainBalance =  ("main-balance")
    const mainBalance = parseFloat(getInnerTextById("main-balance"));
    // console.log(mainBalance)

    const selectedBank = document.getElementById("all-bank").value;
    console.log(selectedBank)


    if (amount < 0){
        alert("give pos. no")
        
    }




    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance + amount
            // document.getElementById("main-balance").innerText = sum
            setInnerTextByIDandValue("main-balance", sum)

            const container = document.getElementById("transection-container")
            // const p = document.createElement("p");
            // p.innerText = `
            // added ${amount} from ${account} account
            // `
            // container.appendChild(p)

            const div = document.createElement("div");
            div.classList.add("bg-red-400")
            div.innerHTML = `
            <h1 class ="text-blue-500">Added Money form ${selectedBank}</h1>
            <h3>${amount}</h3>
            <p>account number: ${account}</p>

            `
            container.appendChild(div)


        }
        else {
            console.log("pin thik nai")
        }
    }
    else {
        console.log("thik nai")
    }
});

