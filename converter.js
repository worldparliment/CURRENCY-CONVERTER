document.addEventListener("DOMContentLoaded", function() {
    function geturl() {
        let basecurrency = document.getElementById("CURRENCY").value;
        let convertcurrency = document.getElementById("CURRENCY2").value;
        let url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ufhNMlATp5AxMJeSaW11koctvdvdCYasS3pBkSk1&currencies=${convertcurrency}&base_currency=${basecurrency}`;
        return url;
    }

    let butt = document.getElementById("exchange");
    butt.addEventListener("click", async function getprice() {
        try {
            let amount = document.getElementById("input1").value;
            let response = await fetch(geturl());
            let jsobject = await response.json();
            let convertcurrency = document.getElementById("CURRENCY2").value;
            let price = Math.floor(jsobject.data[convertcurrency] * parseInt(amount));

            let b = document.getElementById("prce");
            if (b) {
                b.innerHTML = `<h4>${price}</h4>`; // Use backticks for template literals
            } else {
                console.error('Element with ID "prce" not found.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
