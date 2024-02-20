
const url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

let dropselect=document.querySelectorAll(".dropdown select")

for(let select of dropselect){
    for(let code in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=code;
        newoption.value=code;
        if(select.name==="from"&&code==="USD"){
            newoption.selected="selected"
        }
        else if(select.name==="to"&&code==="INR"){
            newoption.selected="selected"
        }
        select.append(newoption)
    }
}


