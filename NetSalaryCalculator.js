

function totalTax(basicSalary,benefits){

//   const basicSalary= x 
// const benefits=y 
const taxableAmount=basicSalary + benefits
 
const taxRates = [ //the rate is in percentage. for example 10% = 10/100 = 0.1
  {from:0,to:24000,rate:0.1},
  {from:24001,to:32333,rate:0.25}, // 25/100
  {from:32334,to:500000,rate:0.3},
  {from:500001,to:800000,rate:0.325},
  {from:800001,to:Infinity,rate:0.35},
];
let tax=0;
for(const taxRate of taxRates){
  if(taxableAmount>=taxRate.from && taxableAmount<=taxRate.to){
  tax += (taxableAmount-taxRate.from) * taxRate.rate;
   break;
}

  
  else if(taxableAmount>taxRates.to){
   tax+=(taxRate.to-taxRate.from)*(taxRate.rate)
  }
}
return tax;
}
console.log(totalTax(822000,5000))





// function calculateTax(basicSalary, benefits) {
//   // Calculate the monthly taxable pay
//   const monthlyTaxablePay = basicSalary + benefits;

//   // Define the tax brackets and rates
//   const taxBrackets = [
//       { min: 0, max: 24000, rate: 10.0 },
//       { min: 24001, max: 32333, rate: 25.0 },
//       { min: 32334, max: 500000, rate: 30.0 },
//       { min: 500001, max: 800000, rate: 32.5 },
//       { min: 800001, max: Infinity, rate: 35.0 }
//   ];

//   // Calculate the annual taxable pay
//   const annualTaxablePay = monthlyTaxablePay * 12;

//   // Calculate the tax based on the tax brackets
//   let tax = 0;
//   for (const bracket of taxBrackets) {
//       if (annualTaxablePay >= bracket.min && annualTaxablePay <= bracket.max) {
//           tax += (annualTaxablePay - bracket.min) * (bracket.rate / 100);
//           break;
//       } else if (annualTaxablePay > bracket.max) {
//           tax += (bracket.max - bracket.min) * (bracket.rate / 100);
//       }
//   }

//   return tax;
//}
// console.log(calculateTax(20000,5000))
// // Example usage:
// const basicSalary = 20000; // Change this to your basic salary
// const benefits = 5000;    // Change this to your benefits
// const taxAmount = calculateTax(basicSalary, benefits);
// console.log(`Tax to be paid: Ksh ${taxAmount.toFixed(2)}`);


