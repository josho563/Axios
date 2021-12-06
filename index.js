"use strict";
const promisesPromises = new Promise((resolve, reject) => {
});

const onSuccess = res => console.log("Success", res);
const onFailure = err => console.log("Success", res);

promisesPromises.then(onSuccess).catch(onFailure);

const output = document.querySelector("section#superhero");

axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
.then(response => {
    const heroSquad = response.data;
    console.log("RES:", response);
    const members = document.createElement("h2");
    const active = document.createElement("h2");
    members.innerText = heroSquad.active;
    members.innerText = heroSquad.members;
    output.appendChild(active);
    output.appendChild(members);
    // const info = document.createElement("p");
    // info.innerText = `ID:`
})
.catch(err => console.error(err));
