function getSupplier(code) {
  let marker = code.indexOf(":"); /* anyhting before :*/
  return code.substring(0, marker);
}

function getProductNumber(code) {
  let startMarker =
    code.indexOf(":") + 1; /* returns all characters between the : and - */
  let endMarker = code.indexOf("-");
  return code.substring(startMarker, endMarker);
}

function getSize(code) {
  let marker = code.indexOf("-") + 1;
  return code.substring(marker);
}

let code1 = "ACME:123-L";
let code2 = "DI:12345-M";
let code3 = "ACE:1-12";

console.log(`For code ${code1}:`);
console.log("Supplier:", getSupplier(code1));
console.log("Product Number:", getProductNumber(code1));
console.log("Size:", getSize(code1));

console.log(`\nFor code ${code2}:`);
console.log("Supplier:", getSupplier(code2));
console.log("Product Number:", getProductNumber(code2));
console.log("Size:", getSize(code2));

console.log(`\nFor code ${code3}:`);
console.log("Supplier:", getSupplier(code3));
console.log("Product Number:", getProductNumber(code3));
console.log("Size:", getSize(code3));
