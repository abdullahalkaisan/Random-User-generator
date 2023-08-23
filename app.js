


const loadUser = ()=>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const addUser = document.querySelector("#addUser");
const removeUser = document.querySelector("#removeUser");
const inputGenerateAdd = document.querySelector("#inputGenerateAdd");
const inputGenerateRemove = document.querySelector("#inputGenerateRemove");
const userCount = document.querySelector("#userCount");


loadUser();



document.addEventListener("DOMContentLoaded", ()=>{


    addUser.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log(inputGenerateAdd.value);

        for (let i = 0; i < inputGenerateAdd.value ; i++) {
            loadUser();
            // const userCount = document.querySelector("#userCount");
            userCount.innerHTML = (i + 1);
            console.log(i);

        }

        inputGenerateAdd.value = "";
    })

})








const displayUser = (data)=>{

    const userProfilePic = data.results[0].picture.large;
    const userFullName = data.results[0].name.first + " " + data.results[0].name.last;
    const userLocation = data.results[0].location.city +", "+ data.results[0].location.country
    const userEmail = data.results[0].email;
    const userPhone = data.results[0].phone;
    const userAge = data.results[0].dob.age;
    const userWrapper =document.querySelector("#userWrapper")

    const cardTemplate = `
    <div class="card w-96 h-max bg-base-100  m-2 border rounded-md">
    <figure class="px-10 pt-10">
      <img src="${userProfilePic}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body text-gray-600">
      <h2 class="card-title">
            ${userFullName}
    </h2>
      <p> 
        <i class="uil uil-location-point text-xl"></i>
            ${userLocation}
        </p>
    <p>
        <i class="uil uil-user text-xl"></i>
        <span id="age">
           ${userAge}
        </span>
        year old.                  
    </p>
    <p>
        <i class="uil uil-phone text-xl"></i>
            ${userPhone}
    </p>
      <p>
        <i class="uil uil-envelope text-xl"></i>
        ${userEmail}
    </p>
    </div>
  </div>
    `
    userWrapper.innerHTML += cardTemplate;
    userCount.innerHTML = userWrapper.children.length;
}








