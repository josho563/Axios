"use strict";

//List All users
const getOutput = document.querySelector("#getOutput");
axios
    .get("https://reqres.in/api/users?page=2")
    .then(res => {
        //    console.log(res)
        const users = res.data.data;

        for (let user of users) {
            console.log(user);
            const userContainer = document.createElement("div");
            const userId = document.createElement("p");
            userId.innerText = `ID: ${user.id}`;
            userContainer.appendChild(userId);

            const Email = document.createElement("p");
            Email.innerText = `Email: ${user.email}`;
            userContainer.appendChild(Email);

            const First_Name = document.createElement("p");
            First_Name.innerText = `First_Name: ${user.first_name}`;
            userContainer.appendChild(First_Name);

            const Last_Name = document.createElement("p");
            Last_Name.innerText = `Last_Name: ${user.last_name}`;
            userContainer.appendChild(Last_Name);

            const avatar = document.createElement("img");
            avatar.src = user.avatar;
            userContainer.appendChild(avatar);

            getOutput.appendChild(userContainer);
        }
    })
//single user
const outputSingle = document.querySelector("#outputSingleUser");
document.querySelector("#userid2").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = this;
    const userId = form.userId.value;
    axios
        .get(`https://reqres.in/api/users/${userId}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.userId.focus();
            const user = res.data.data
            console.log(user);
            const userContainer = document.createElement("div");
            const userId = document.createElement("p");
            userId.innerText = `ID: ${user.id}`;
            userContainer.appendChild(userId);

            const Email = document.createElement("p");
            Email.innerText = `Email: ${user.email}`;
            userContainer.appendChild(Email);

            const First_Name = document.createElement("p");
            First_Name.innerText = `First_Name: ${user.first_name}`;
            userContainer.appendChild(First_Name);

            const Last_Name = document.createElement("p");
            Last_Name.innerText = `Last_Name: ${user.last_name}`;
            userContainer.appendChild(Last_Name);

            const avatar = document.createElement("img");
            avatar.src = user.avatar;
            userContainer.appendChild(avatar);

            getOutput.appendChild(userContainer);
        })
    //delete
})
document.querySelector("#deleteForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = this;
    const userId = form.userId.value;
    axios
        .delete(`https://reqres.in/api/users/${userId}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.userId.focus();
        })
    //Create 
const getOutput = document.querySelector("#getOutput")  
document.querySelector("#UserForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const form = this;

    const data = {
    name: form.name.value,
    job: form.name.value,         
};
console.log("DATA: ", data);
form.reset();
form.userId.focus();


axios.post("https://reqres.in/api/users", data)
.then(res => console.log(res))
.catch(err => console.error(err));
    })
        .catch(err => console.error(err));
});