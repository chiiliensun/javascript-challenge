// from data.js
const tableData = data;

// Get reference to the table body, filter button and form
const tbody = d3.select("tbody"),
      filterbtn = d3. select("#filter-btn"),
      form = d3.select("#form");

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

  // Select which input and values for all columns, combine inputElement and inputValue from level-1
  let inputDate = d3.select("#datetime").property("value"),
      inputCity = d3.select("#city").property("value"),
      inputState = d3.select("#state").property("value"),
      inputCountry = d3.select("#country").property("value"),
      inputShape = d3.select("#shape").property("value");

  // variable for filtered data
  let newfilter = tableData;

  // variables for all columns by using if function and correct values
  
  // datetime
  if (inputDate) {
    newfilter = newfilter.filter(siting => siting.datetime === inputDate);
  };

  // city
  if (inputCity) {
    newfilter = newfilter.filter(siting => siting.city === inputCity);
  };

  // state
  if (inputState) {
    newfilter = newfilter.filter(siting => siting.state === inputState);
  };

  // country
  if (inputCountry) {
    newfilter = newfilter.filter(siting => siting.country === inputCountry);
  };

  // shape
  if (inputShape) {
    newfilter = newfilter.filter(siting => siting.shape === inputShape);
  };

  // remove any children from list
  tbody.html("");

  // created another append method to fill in only selected input datetime that matches
  newfilter.forEach((siting) => {
    let row = tbody.append("tr");
    Object.values(siting).forEach(value => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
};

// Event handlers
filterbtn.on("click", runEnter);
form.on("submit", runEnter);
