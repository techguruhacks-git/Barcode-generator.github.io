let input = document.getElementById("input");
let bg = document.getElementById("barcode");
let btn = document.getElementById("generate-btn");

btn.addEventListener("click", ()=>{

    JsBarcode("#barcode", input.value, {
        format: "code128",
        displayValue: true,
        fontSize: 24,
        lineColor: "#000000",
});

if(input.value == ""){

    bg.style.background = "none";
}
else{

bg.style.background = "#ffffff";
}

});

window.onload = (event) =>{
    
    input.value = "";

}

