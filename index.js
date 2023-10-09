let inputFlavors = prompt(
    "Enter a list of froyo flavors, separate them with commas"
);

let flavorDesired = String(inputFlavors);
let valuesArray = inputFlavors.split(",");


let tableData = valuesArray.map((value, index) => ({
  Value: value.trim(),
  Index: index + 1
}));
console.table(tableData);

