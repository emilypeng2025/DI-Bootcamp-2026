// Daily Challenge: Currency Converter
// Last Updated: October 8th, 2025

// What You will learn :
// Fetch API
// async await


// Instructions
// You will create a currencies converter:



// image


// In this application we’re going receive data from two asynchronous sources.

// You will use :

// This documentation
// Create your own API key by signing up - you will be able to make more requests :)


// Note
// The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.


// switch conversion arrow(1)

//	Step 1.	Get the API key.
const API_KEY = "YOUR_API_KEY_HERE";
//“Insert your own API key here”

//	Step 2.	Build the HTML skeleton with two dropdowns, one amount input, one convert button, and one switch button.

// step 3.	Fetch supported currency codes first and fill the dropdowns.

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
const switchBtn = document.getElementById("switchBtn");
const result = document.getElementById("result");

// make an async function to fetch supported codes
// loop through the returned supported_codes
// create <option> elements
// add them to both dropdowns

async function getCurrency(){
    try{
        result.textContent = "Loading currencies...";

        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
        if (!response.ok){
            throw new Error("Failed to fetch currencies");
        }

        const data = await response.json()
        console.log(data);

        // loop through supported_codes
        const currencies = data.supported_codes;

        currencies.forEach(currency => {
            // extract code + name
            const code = currency[0];
            const name = currency[1];

            // create option elements
            const option1 = document.createElement("option");
            const option2 = document.createElement("option");
            // create option for FROM
            option1.value = code;
            option1.textContent = `${code} - ${name}`;
            // create option for TO        
            option2.value = code;
            option2.textContent = `${code} - ${name}`; 

            // append to both selects
            fromCurrency.appendChild(option1);
            toCurrency.appendChild(option2);
        });
    
        fromCurrency.value = "USD";
        toCurrency.value = "ILS";
        
        
    } catch (error) {
        console.log(error);
        result.textContent = "Could not load currencies.";
    }

}


async function convertCurrency() {
    try {
        result.textContent = "Converting...";

        const from = fromCurrency.value;
        const to = toCurrency.value;
        const money = amount.value;

        if (!amount.value) {
            result.textContent = "Please enter an amount.";
            return;
        }

        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${money}`);

        if (!response.ok) {
            throw new Error("Failed to convert currency");
        }

        const data = await response.json();
        console.log(data);

        const converted = data.conversion_result;

        result.textContent = `${amount.value} ${fromCurrency.value} = ${converted} ${toCurrency.value}`;

    } catch (error) {
        console.log(error);
        result.textContent = "Could not convert currency.";
    }
}

//swap the two dropdown values
function switchCurrencies() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

    if (amount.value) {
        convertCurrency();
    }
}


getCurrency();
convertBtn.addEventListener("click", convertCurrency);

// convertCurrency();
switchBtn.addEventListener("click", switchCurrencies);
