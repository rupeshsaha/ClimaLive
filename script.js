let refresh = document.querySelector(".refresh");
let date = document.querySelector(".date");
let locaion = document.querySelector(".location");
let brief = document.querySelector(".brief");
let brief_image = document.querySelector(".brief-image");
let temperature = document.querySelector(".temperature");

let URL = "https://api.open-meteo.com/v1/forecast?latitude=25.778914&longitude=87.4742&hourly=temperature_2m&timezone=auto"

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];




const d = new Date();

date.innerText = `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`

let fullDate = new Date();
fullDate = `${fullDate.getFullYear()}-0${fullDate.getMonth()+1}-${fullDate.getDate()}T${fullDate.getHours()}:00`

console.log(fullDate);


async function getData(){
    try {
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error("No Response")
        }
        const data = await response.json();
        const index = data.hourly.time.indexOf(fullDate)
        console.log(index);
     temperature.innerText = data.hourly.temperature_2m[index] +"°C";

    }
    
    catch (error){
        console.error("fetch problem")
    }
}

getData();

