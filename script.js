// DOM elements
let date = document.querySelector(".date");
let city = document.querySelector(".location");
let brief = document.querySelector(".brief");
let temperature = document.querySelector(".temperature");



// Event listener for search button
document.querySelector("#search-button").addEventListener("click", async function() {
    let inputValue = document.querySelector("#search-bar").value.trim();
    

    if (inputValue) {
        city.innerText = inputValue.charAt(0).toUpperCase()+inputValue.slice(1); // Update city name

        try {
            let current_url = `https://api.weatherapi.com/v1/current.json?key=94a008657eb74bb0969134527241706&q=${inputValue}`;
            const currentResponse = await fetch(current_url);

            if (!currentResponse.ok) {
                throw new Error("No Response");
            }

            const currentData = await currentResponse.json();
            temperature.innerText = `${currentData.current.temp_c}°C`;
            brief.innerText = currentData.current.condition.text;

        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    } else {
        console.log("Please enter a city name.");
    }
});



