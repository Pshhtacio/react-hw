// Create a function that returns a Promise
function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data (you can replace this with an actual API call)
    const success = true; // Change to false to simulate an error

    if (success) {
      // Data was successfully fetched, so resolve the Promise
      const data = { message: 'Data fetched successfully' };
      resolve(data);
    } else {
      // An error occurred, so reject the Promise
      const error = new Error('Failed to fetch data');
      reject(error);
    }
  });
}

// Usage of the Promise
fetchDataFromServer()
  .then((response) => {
    // Handle the resolved Promise (successful case)
    console.log(response.message);
  })
  .catch((error) => {
    // Handle the rejected Promise (error case)
    console.error(error.message);
  });