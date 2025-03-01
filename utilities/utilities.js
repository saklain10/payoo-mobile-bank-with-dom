function getInputValueById(id) {
  const value = document.getElementById(id).value;
   const convertedValue = parseFloat(value);
   return convertedValue;
   
}

function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}
 function setInnerTextByIDandValue(id, value) {
  document.getElementById(id).innerText = value;
 }


 // Function to toggle display property of elements
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
  // document.getElementById(id).classList.toggle("hidden"); // Alternative using Tailwind (if applicable)
}