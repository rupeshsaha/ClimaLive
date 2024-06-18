// DOM elements
let date = document.querySelector(".date");
let city = document.querySelector(".location");
let brief = document.querySelector(".brief");
let temperature = document.querySelector(".temperature");

// Arrays for date formatting
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Initialize date
const d = new Date();
date.innerText = `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;

// Event listener for search button
document.querySelector("#search-button").addEventListener("click", async function() {
    let inputValue = document.querySelector("#search-bar").value.trim(); // Trim whitespace

    if (inputValue) {
        city.innerText = inputValue.charAt(0).toUpperCase()+inputValue.slice(1); // Update city name

        try {
            let current_url = `http://api.weatherapi.com/v1/current.json?key=94a008657eb74bb0969134527241706&q=${inputValue}`;
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

// Event listener for creating search bar if not present
document.querySelector("#search-button").addEventListener("click", function() {
    if (!document.querySelector("#search-bar")) {
        let searchBar = document.createElement("input");
        searchBar.id = "search-bar";
        searchBar.placeholder = "Enter Your City";
        searchBar.style.border = "2px solid black";
        searchBar.style.height = "2rem";
        searchBar.style.width = "6rem";
        searchBar.style.margin = "0.5rem";
   
        document.querySelector("#search-button").appendChild(searchBar);
    }
});

