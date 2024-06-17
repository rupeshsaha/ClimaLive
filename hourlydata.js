let URL = "https://api.open-meteo.com/v1/forecast?latitude=25.778914&longitude=87.4742&hourly=temperature_2m&timezone=auto"


let fullDate = new Date();
fullDate = `${fullDate.getFullYear()}-0${fullDate.getMonth()+1}-${fullDate.getDate()}T${fullDate.getHours()}:00`

async function getData(){
    try {
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error("No Response")
        }
        const data = await response.json();
        const index = data.hourly.time.indexOf(fullDate)
     temperature.innerText = data.hourly.temperature_2m[index] +"°C";
     console.log(data);

    }
    
    catch (error){
        console.error("fetch problem")
    }
}

getData();