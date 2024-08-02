let dollorirr;
function main(){
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {

    // قیمت سکه تمام و دلار به تومان
    if (this.readyState == 4 && this.status == 200) {
        let price = JSON.parse(this.responseText);
        let dollarPrice = price.result.currencies.dollar.p;
        let modifiedPrice = dollarPrice.replace(",", "");
        dollorirr = Math.round(modifiedPrice / 10);
        let seke = price.result.coin_retail.sekeb.p;
        let sekem = seke.replaceAll(",", "");
        let sekeirr = Math.round(sekem / 10);
        document.getElementById("coinirr").innerHTML = sekeirr.toLocaleString() + ' T';
        let dollorseke = Math.round(sekeirr / dollorirr);
        document.getElementById("coin").innerHTML = dollorseke.toLocaleString() + ' $';
        
// ============================================================================================
// قیمت ارز های دیجیتال به دلار و تومان
function send2() {
    var xmlhttpExchange = new XMLHttpRequest();
    xmlhttpExchange.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let x = JSON.parse(this.responseText);
            usdtirr = 1 * dollorirr + ' T';
            document.getElementById('usdtirr').innerHTML = usdtirr.toLocaleString();

            const currencies = ['btc','eth', 'trx', 'bnb', 'sol', 'ltc', 'etc', 'doge'];
            const currencieskey = ['0', '1' , '8' , '12', '32' , '3' , '46' , '5'];
            const irrCurrencies = ['btcirr','ethirr', 'trxirr', 'bnbirr', 'solirr', 'ltcirr', 'etcirr', 'dogeirr'];
            
            currencies.forEach(currency => {
                let index = currencies.indexOf(currency);
                let price = x.result[currencieskey[index]].price;
                let roundprc = Math.round(price * 1000) / 1000;
                document.getElementById(currency).innerHTML = roundprc + "$";
            });


            
            irrCurrencies.forEach(currencyirr => {
                let currency = currencyirr.slice(0, -3);
                let index = currencies.indexOf(currency);
                let price = x.result[currencieskey[index]].price;
                let roundprc = Math.round(price * 1000) / 1000;
                let prcirr = Math.round(roundprc * dollorirr);
                document.getElementById(currencyirr).innerHTML = prcirr.toLocaleString() + ' T';
            });
            


        }
    };
    xmlhttpExchange.open("GET", "https://one-api.ir/DigitalCurrency/?token=712158:65e5aa44b856d", true);
    xmlhttpExchange.send();
}
setInterval(send2, 1000 * 3600); 
send2();



    }
    
};

xmlhttp.open("GET", "https://one-api.ir/price/?token=712158:65e5aa44b856d&action=tgju", true);
xmlhttp.send();


}
setInterval(() => {

    main();
    
    }, 1000 * 3600);
    
    main();
