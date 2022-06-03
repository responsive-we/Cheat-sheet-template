// storing the original text invariable
const original_text='Copy and move ahead'

// Function to add text on mouse move
let text = document.getElementById("slogan_text");
text.addEventListener("mousemove",()=>{
    text.innerText= "Copy and move ahead Thank me later";
})

// Function to remove the added text by mouse out event
text.addEventListener("mouseout",()=>{
    text.innerHTML = original_text;
})




