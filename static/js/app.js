// This is what happens when we miss manage our time....
function init() {
  // Obtain reference for the dropdown select element
  var selector = d3.select("#selDataset");

  // Populate the select options with Sample Names in Json data
  d3.json('data/samples.json').then((data) => {
    // Initialize sampleNames
    let sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });


  });
}


// Initialize the dashboard
init();