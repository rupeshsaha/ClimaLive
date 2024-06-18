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
            
                throw document.querySelector(".error").innerText = "Check the spelling and your Internet connection.";
            }

        
            
            
         
            const currentData = await currentResponse.json();
            console.log(currentData);
            temperature.innerText = `${currentData.current.temp_c}°C`;
            brief.innerText = currentData.current.condition.text;
            city.innerText = currentData.location.name;
          

        } catch (error) {
           console.error("some error occured",error);
           
        }
    } else {
        document.querySelector(".error").innerText = "Please enter a city name.";
        
    }
});



