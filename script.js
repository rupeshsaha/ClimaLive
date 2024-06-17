let refresh = document.querySelector(".refresh");
let date = document.querySelector(".date");
let city = document.querySelector(".location");
let brief = document.querySelector(".brief");
let brief_image = document.querySelector(".brief-image");
let temperature = document.querySelector(".temperature");

let URL = "https://api.open-meteo.com/v1/forecast?latitude=25.778914&longitude=87.4742&hourly=temperature_2m&timezone=auto"

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];




const d = new Date();

date.innerText = `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`








let current_url = "http://api.weatherapi.com/v1/current.json?key=94a008657eb74bb0969134527241706&q=Purnia&aqi=yes"

async function getCurrentData(){
    try{
        const currentResponse = await fetch(current_url);
        if(!currentResponse.ok){
            throw new Error("No Response")
        }
        const currentData = await currentResponse.json();
        temperature.innerText=currentData.current.temp_c +"°C";
        brief.innerText = currentData.current.condition.text; 
    
        console.log(currentData.current.condition.icon);

    }
    catch (error){
        console.error("kuch garbar hai");
    }
}

getCurrentData()