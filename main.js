#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyanBright("\n \t Welcome To Currency Conversion \n"));
// Currencies and their Exchange Rates.
let currencies = {
    USD: 1, // BASE CURRENCY
    PKR: 277.69, // PAKISTANI RUPEE
    INR: 83.37, // INDIAN RUPEE
    JPY: 154.62, // JAPANESE YEN
    CAD: 1.38, // CANADIAN DOLLAR
    AUD: 1.56, // AUSTRALIAN DOLLAR
    CNY: 7.24, // CHINESE YUAN
    EUR: 0.94, // EURO
    GBP: 0.81, // POUND
    AED: 3.67, // DIRHAM
    QAR: 3.64, // QAYARI RIYAL
    KWD: 0.31, // KUWAITI RIYAL
    NZD: 1.7, // NEW ZEALAND DOLLAR
    SAR: 3.75, // SAUDI ARABIA RIYAL
    SGD: 1.36, // SINGAPORIAN DOLLAR
    HKD: 7.83, // HONG KONG DOLLAR
    BDT: 109.51, // BANGLADESI TAKA
    OMR: 0.38, // OMANI RIYAL
    CHF: 0.91, // SWITZERLAND SWISS
    LKR: 301.36, // SRI LANKAN RUPPEE
    BHD: 0.38, // BAHRAINI DINAR
    JOD: 0.71, // JORDIAN DINAR
};
let userAnswer = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        message: chalk.greenBright("Select the currency you convert from"),
        choices: [
            "USD",
            "PKR",
            "INR",
            "JPY",
            "CAD",
            "AUD",
            "CNY",
            "EUR",
            "GBP",
            "AED",
            "QAR",
            "KWD",
            "NZD",
            "SAR",
            "SGD",
            "HKD",
            "BDT",
            "OMR",
            "CHF",
            "LKR",
            "BHD",
            "JOD",
        ],
    },
    {
        name: "To",
        type: "list",
        message: chalk.blueBright("Select the currency you convert to"),
        choices: [
            "USD",
            "PKR",
            "INR",
            "JPY",
            "CAD",
            "AUD",
            "CNY",
            "EUR",
            "GBP",
            "AED",
            "QAR",
            "KWD",
            "NZD",
            "SAR",
            "SGD",
            "HKD",
            "BDT",
            "OMR",
            "CHF",
            "LKR",
            "BHD",
            "JOD",
        ],
    },
    {
        name: "Amount",
        type: "input",
        message: chalk.redBright("Type amount here"),
    },
]);
const { From, To, Amount } = userAnswer;
// FORMULA
let FromAmount = currencies[userAnswer.From];
let ToAmount = currencies[userAnswer.To];
let amount = userAnswer.Amount;
let baseAmount = amount / FromAmount;
let currency_exchanged = baseAmount * ToAmount;
console.log(chalk.bgGray(`\n \tThe Coverted Amount is: ${currency_exchanged.toFixed(2)} \n`));
