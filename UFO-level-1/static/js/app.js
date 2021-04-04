// from data.js
const tableData = data;

// Get reference to the table body
const tbody = d3.select("tbody");

// console logging the data from data.js
// console.log(data);

// Loop through data
// data.forEach(ufoSiting => console.log(ufoSiting));

// Using d3 to append one table row `tr` for each UFO ufoCiting
data.forEach((ufoSiting) => {
  let row = tbody.append("tr");
  Object.values(ufoSiting).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
  });
});
