// DOM elements
let date = document.querySelector(".date");
let city = document.querySelector(".location");
let brief = document.querySelector(".brief");
let temperature = document.querySelector(".temperature");



// Event listener for search button
document.querySelector("#search-button").addEventListener("click", async function() {
    let inputValue = document.querySelector("#search-bar").value.trim();

    if (inputValue) {
        try {
            let current_url = `https://api.weatherapi.com/v1/current.json?key=94a008657eb74bb0969134527241706&q=${inputValue}`;
            const currentResponse = await fetch(current_url);

            if (!currentResponse.ok) {
                throw new Error("Check the spelling and your Internet connection.");
            }
            
            const currentData = await currentResponse.json();
            console.log(currentData);
            
            // Update DOM elements with API data
            temperature.innerText = `${currentData.current.temp_c}°C`;
            brief.innerText = currentData.current.condition.text;
            city.innerText = currentData.location.name;
            
            document.querySelector(".weather").style.display = "flex";
            document.querySelector(".error").innerText = "";
            
        } catch (error) {
            console.error("Error fetching data:", error);
            
            // Handle error by displaying error message and hiding .weather class
            document.querySelector(".error").innerText = error.message;
            document.querySelector(".weather").style.display = "none";
        }
    } else {
        document.querySelector(".error").innerText = "Please enter a city name.";
        document.querySelector(".weather").style.display = "none";
    }
});
