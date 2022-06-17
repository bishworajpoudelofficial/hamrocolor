function getColor(){
    var symbol,color;
    symbol = "01234567890ABCDEF";

    color = "#";
    for(var i = 0;i<6;i++){
        color = color + symbol[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
    document.getElementById("hex").innerHTML = color;
    document.getElementById("show").innerHTML = "";
}


function copyCode(){
    var hexcode = document.getElementById("hex");
    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value= hexcode.innerText
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    document.getElementById("show").innerHTML = "Your Color Code Copied.";
}

