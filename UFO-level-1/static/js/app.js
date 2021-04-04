// from data.js
const tableData = data;


// Get reference to the table body, filter button and form
const tbody = d3.select("tbody");
      filterbtn = d3. select("#filter-btn");
      form = d3.select("#form")


// Using d3 to append data to table by using loop: forEach
data.forEach((ufoSiting) => {
  let row = tbody.append("tr");
  Object.values(ufoSiting).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
  });
});


// Filter code -- Function to run for filter events
const runEnter = () => {

  // Prevent page from refreshing
  d3.event.preventDefault();

  // Select which input elements (datetime) and values
  let inputElement = d3.select("#datetime");
  let inputValue = inputElement.property("value");

  // variable for filter
  let filtered = tableData.filter(filterSiting => filterSiting.datetime === inputValue);

  // remove any children from list
  tbody.html("");

  // created another append method to fill in only selected input datetime that matches
  filtered.forEach((filterSiting) => {
    let row = tbody.append("tr");
    Object.values(filterSiting).forEach(value => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
};

// Event handlers
filterbtn.on("click", runEnter);
form.on("submit", runEnter);
