const form = document.querySelector("#searchForm");
const temperature = document.querySelector("#temp");
const feels = document.querySelector("#feels");
const town = document.querySelector("#town");
const table = document.querySelector("ul");
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchedTown = form.elements.query.value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchedTown}&appid=7bb0c22f05189b37f70ed17b6ffd1565&units=metric&lang=pl`)
        .then(res => {
            let tempA = res.data.main.temp;
            let tempB = res.data.main.feels_like;
            let townA = res.data.name;
            let country = res.data.sys.country;
            town.innerText = townA;
            temperature.innerText = "Real temperature: " +
                Math.round(tempA) +
                "°C";
            feels.innerText = "Perceived temperature: " + Math.round(tempB) + "°C";
            const li = document.createElement('li');
            li.innerText = country + " " + townA + ": " + Math.round(tempA);
            table.appendChild(li);
        })
        .catch(err => {
            town.innerText = "I don't know this place!"
            temperature.innerText = " "
            feels.innerText = " "
        })
})