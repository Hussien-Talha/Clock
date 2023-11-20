// A function that returns the current time and date for any location
function getTimeAndDate(location) {
    // Use the fetch API to get the data from time.is
    fetch("https://time.is/" + location)
      .then((response) => response.text())
      .then((data) => {
        // Use a regular expression to extract the time and date from the HTML
        let time = data.match(/<div id="twd">(.+?)<\/div>/)[1];
        let date = data.match(/<div id="dd">(.+?)<\/div>/)[1];
        // Display the time and date in the console
        console.log("The current time and date in " + location + " is:");
        console.log(time);
        console.log(date);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }
  
  // Call the function with a location as an argument
  getTimeAndDate("Cairo");  