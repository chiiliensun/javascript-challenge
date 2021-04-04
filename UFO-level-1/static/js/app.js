// from data.js
const tableData = data;

// Get reference to the table body
const tbody = d3.select("tbody");

// console logging the data from data.js
console.log(data);

// Loop through data
data.forEach(ufositing => console.log(ufositing));

// Using d3 to append one table row `tr` for each UFO ufoCiting
data.forEach(ufositing => {
  let row = tbody.append("tr");
  let cell = row.append("td");
  Object.values(uofositing).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
  });
});
