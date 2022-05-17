let gotArray = [];

async function fetchGOT() {
    try {
        let response = await fetch("https://ThronesApi.com/api/v2/Characters/");
        let data = await response.json();
        gotArray.push(data);
    } catch (err) {
        console.log(err);
    }
    console.log(gotArray);
    showGOT(gotArray);
}

function showGOT(gotArray) {
    let gotContainer = document.getElementById("got-container");
    gotContainer.innerHTML = "";
        for (let i = 0; i < gotArray[0].length; i++) {
            let div = document.createElement("div");
             div.classList.add("got-card");

            let img = document.createElement("img");
            img.classList.add("got-img");
            img.src = gotArray[0][i].imageUrl;
                
            let fullName = document.createElement("h3");
            fullName.innerText = "Navn: " + gotArray[0][i].fullName;

            let title = document.createElement("h4");
            title.innerText = "Tittel: " + gotArray[0][i].title;

            let house = document.createElement("p");
            house.innerText = "Hus: " + gotArray[0][i].family;

            if (gotArray[0][i].family == "House Stark" || gotArray[0][i].family == "Stark") {
                    div.style.backgroundColor = "rgb(107,230,132)"}
                else if (gotArray[0][i].family == "House Lannister" || gotArray[0][i].family == "House Lanister" || gotArray[0][i].family == "Lannister" ) {
                    div.style.backgroundColor = "rgb(207,230,132)"}
                else if (gotArray[0][i].family == "House Greyjoy" || gotArray[0][i].family == "Greyjoy") {
                    div.style.backgroundColor = "violet"}
                 
                
                

        div.append(img,fullName,title,house);
        gotContainer.append(div);
    }
}

fetchGOT();