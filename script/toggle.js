// Initially hide the cashout section
document.getElementById("cashout").style.display = "none";
document.getElementById("transection-history").style.display = "none";

// Event listener for adding money
document.getElementById("add-money-box").addEventListener("click", function () {
    handleToggle("addmoney", "block");
    handleToggle("cashout", "none");
    handleToggle("transection-history","none")
    // document.getElementById("addmoney").style.display = "block";
    // document.getElementById("cashout").style.display = "none";
});

document.getElementById("cashout-box").addEventListener("click", function(){
    handleToggle("addmoney", "none");
    handleToggle("cashout", "block");
    handleToggle("transection-history","none")
})

// // Event listener for cashout section
// document.getElementById("cashout-box").addEventListener("click", function () {
//     handleToggle("cashout", "block");
//     handleToggle("addmoney", "none");
//     // document.getElementById("cashout").style.display = "block";
//     // document.getElementById("addmoney").style.display = "none";
// });


