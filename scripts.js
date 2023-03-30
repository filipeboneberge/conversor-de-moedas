const button = document.getElementById("convert-button");
const selectPara = document.getElementById("currency-select-para");
const selectDe = document.getElementById("currency-select-de");

// const dolar = 5.13;
// const euro = 5.41;
// const bitcoin = 112890.39;

const convertValues = async () => {
    const inputValue = document.getElementById("input-value").value;
    const valueText = document.getElementById("value-text");
    const currencyValueText = document.getElementById("currency-value-text");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json());
   
    const dolar = data.USDBRL.high;
    const euro = data.EURBRL.high;
    const bitcoin = data.BTCBRL.high;

    if((selectPara.value === "US$ Dólar Americano") && (selectDe.value === "R$ Real Brasileiro")){
        valueText.innerHTML = new Intl.NumberFormat("pt-BR",
                            {style: "currency", currency: "BRL"}
                            ).format(inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US",
                                {style: "currency", currency: "USD"}            
                                ).format(inputValue / dolar);
    }

    if((selectPara.value === "US$ Dólar Americano") && (selectDe.value === "US$ Dólar Americano")){
        valueText.innerHTML = new Intl.NumberFormat("en-US",
                            {style: "currency", currency: "USD"}
                            ).format(inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US",
                                {style: "currency", currency: "USD"}            
                                ).format(inputValue);
    }
    
    if((selectPara.value === "US$ Dólar Americano") && (selectDe.value === "€ Euro")){
        valueText.innerHTML = new Intl.NumberFormat("de-DE",
                            {style: "currency", currency: "EUR"} 
                            ).format(inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US",
                                {style: "currency", currency: "USD"}            
                                ).format(inputValue * euro / dolar);
    }

    if((selectPara.value === "US$ Dólar Americano") && (selectDe.value === "Bitcoin")){
        valueText.innerHTML = (inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US",
                                {style: "currency", currency: "USD"}            
                                ).format(inputValue * bitcoin / dolar);
    }

    if((selectPara.value === "€ Euro") && (selectDe.value === "R$ Real Brasileiro")){
        valueText.innerHTML = new Intl.NumberFormat("pt-BR",
                            {style: "currency", currency: "BRL"}
                            ).format(inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",
                                    {style: "currency", currency: "EUR"}            
                                    ).format(inputValue / euro);
    }

    if((selectPara.value === "€ Euro") && (selectDe.value === "€ Euro")){
        valueText.innerHTML = new Intl.NumberFormat("de-DE",
                            {style: "currency", currency: "EUR"} 
                            ).format(inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",
                                {style: "currency", currency: "EUR"}            
                                ).format(inputValue);
    }

    if((selectPara.value === "€ Euro") && (selectDe.value === "US$ Dólar Americano")){
        valueText.innerHTML = new Intl.NumberFormat("en-US",
                            {style: "currency", currency: "USD"}
                            ).format(inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",
                                    {style: "currency", currency: "EUR"}            
                                    ).format(inputValue * dolar / euro);
    }

    if((selectPara.value === "€ Euro") && (selectDe.value === "Bitcoin")){
        valueText.innerHTML = (inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",
                                    {style: "currency", currency: "EUR"}            
                                    ).format(inputValue * bitcoin / euro);
    }

    if((selectPara.value === "Bitcoin") && (selectDe.value === "R$ Real Brasileiro")){
        valueText.innerHTML = new Intl.NumberFormat("pt-BR",
                            {style: "currency", currency: "BRL"}
                            ).format(inputValue);
        currencyValueText.innerHTML = (inputValue / bitcoin).toFixed(6);
    }

    if((selectPara.value === "Bitcoin") && (selectDe.value === "US$ Dólar Americano")){
        valueText.innerHTML = new Intl.NumberFormat("en-US",
                            {style: "currency", currency: "USD"}
                            ).format(inputValue);
        currencyValueText.innerHTML = (inputValue * dolar / bitcoin).toFixed(6);
    }

    if((selectPara.value === "Bitcoin") && (selectDe.value === "€ Euro")){
        valueText.innerHTML = new Intl.NumberFormat("de-DE",
                            {style: "currency", currency: "EUR"} 
                            ).format(inputValue);
        currencyValueText.innerHTML = (inputValue * euro / bitcoin).toFixed(6);
    }

    if((selectPara.value === "Bitcoin") && (selectDe.value === "Bitcoin")){
        valueText.innerHTML = (inputValue);
        currencyValueText.innerHTML = (inputValue);
    }

    if((selectPara.value === "R$ Real Brasileiro") && (selectDe.value === "R$ Real Brasileiro")){
        valueText.innerHTML = new Intl.NumberFormat("pt-BR",
                            {style: "currency", currency: "BRL"}
                            ).format(inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR",
                                    {style: "currency", currency: "BRL"}            
                                    ).format(inputValue);
    }

    if((selectPara.value === "R$ Real Brasileiro") && (selectDe.value === "US$ Dólar Americano")){
        valueText.innerHTML = new Intl.NumberFormat("en-US",
                            {style: "currency", currency: "USD"}
                            ).format(inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR",
                                    {style: "currency", currency: "BRL"}            
                                    ).format(inputValue * dolar);
    }
    
    if((selectPara.value === "R$ Real Brasileiro") && (selectDe.value === "€ Euro")){
        valueText.innerHTML = new Intl.NumberFormat("de-DE",
                            {style: "currency", currency: "EUR"} 
                            ).format(inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR",
                                    {style: "currency", currency: "BRL"}           
                                    ).format(inputValue * euro);
    }

    if((selectPara.value === "R$ Real Brasileiro") && (selectDe.value === "Bitcoin")){
        valueText.innerHTML = (inputValue);
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR",
                                    {style: "currency", currency: "BRL"}            
                                    ).format(inputValue * bitcoin);
    }

}   


const changeCurrentPara = () => {
    const currencyNamePara = document.getElementById("currency-name-para");
    const currencyImgPara = document.getElementById("currency-img-para");

    

    if(selectPara.value === "US$ Dólar Americano") {
        currencyNamePara.innerHTML = "Dólar Americano";
        currencyImgPara.src = "./assets/usa.png";
    }

    if(selectPara.value === "€ Euro") {
        currencyNamePara.innerHTML = "Euro";
        currencyImgPara.src = "./assets/euro.png";
    }

    if(selectPara.value === "Bitcoin") {
        currencyNamePara.innerHTML = "Bitcoin";
        currencyImgPara.src = "./assets/bitcoin.png";
    }

    if(selectPara.value === "R$ Real Brasileiro") {
        currencyNamePara.innerHTML = "Real";
        currencyImgPara.src = "./assets/brasil.png";
    }

    convertValues();
}


const changeCurrentDe = () => {
    const currencyNameDe = document.getElementById("currency-name-de");
    const currencyImgDe = document.getElementById("currency-img-de");

    
    if(selectDe.value === "US$ Dólar Americano") {
        currencyNameDe.innerHTML = "Dólar Americano";
        currencyImgDe.src = "./assets/usa.png";
    }

    if(selectDe.value === "€ Euro") {
        currencyNameDe.innerHTML = "Euro";
        currencyImgDe.src = "./assets/euro.png";
    }

    if(selectDe.value === "Bitcoin") {
        currencyNameDe.innerHTML = "Bitcoin";
        currencyImgDe.src = "./assets/bitcoin.png";
    }

    if(selectDe.value === "R$ Real Brasileiro") {
        currencyNameDe.innerHTML = "Real";
        currencyImgDe.src = "./assets/brasil.png";
    }

    convertValues();
}

button.addEventListener("click", convertValues);
selectPara.addEventListener("change", changeCurrentPara);
selectDe.addEventListener("change", changeCurrentDe);