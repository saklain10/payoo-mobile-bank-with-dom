document.getElementById("transection-box").addEventListener('click',function(event){
    event.preventDefault()
    handleToggle("addmoney","none")
    handleToggle("cashout","none")
    handleToggle("transection-history","block")
    
})