// Simulating an asynchronous function to fetch data
function fetchData(callback) {
    // Simulating a delay (e.g., making an API call)
    setTimeout(function () {
        const error = null; // Set to some value to simulate an error
        const result1 = { data: 'Fetched Data' }; // Simulated fetched data
        callback(error, result1);
    }, 1000); // Simulated delay of 1000 milliseconds
}

// Simulating an asynchronous function to process data
function processData(data, callback) {
    // Simulating a delay (e.g., processing the data)
    setTimeout(function () {
        const error = null; // Set to some value to simulate an error
        const result2 = { processedData: `${data.data} - Processed` }; // Simulated processed data
        callback(error, result2);
    }, 1000); // Simulated delay of 1000 milliseconds
}

// Function to get data and process it using callbacks
function getData(callback) {
    fetchData(function (error, result1) {
        if (error) {
            callback(error);
        } else {
            processData(result1, function (error, result2) {
                if (error) {
                    callback(error);
                } else {
                    callback(null, result2);
                }
            });
        }
    });
}

// Using the getData function
getData(function (error, finalResult) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Final Result:", finalResult);
    }
});
