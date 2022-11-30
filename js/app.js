let copied;
const getColor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777225);
    const randomCode = "#" + randomNumber.toString(16);
    copied = randomCode;
    document.body.style.backgroundColor = randomCode;
    document.getElementById('copy-btn').style.backgroundColor = randomCode;
    document.getElementById('color-code').value = randomCode;
}

const copyColor = () =>{
   navigator.clipboard.writeText(copied);
    alert("Copied the Color: " + copied);
}

document.getElementById('copy-btn').addEventListener("click",
copyColor
)

document.getElementById('btn').addEventListener("click",
getColor
)
getColor()