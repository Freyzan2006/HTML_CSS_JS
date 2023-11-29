function UsersShow(data) {
    for (let i = 0; i < 6; i++) {
        
        let Review = document.createElement("div");
        Review.classList.add("Review");
        Review.classList.add("animate__animated");
        if (i % 2 == 0) {
            Review.classList.add("animate__bounceInLeft");
        } else {
            Review.classList.add("animate__bounceInRight");
        }
        let result = document.querySelector(".All_Reviews").appendChild(Review);

        
        let first_name = document.createElement("h2")
        first_name.textContent = `Имя: ${JSON.stringify(data[i].first_name)}`
        result.appendChild(first_name);

        let last_name = document.createElement("h3")
        last_name.textContent = `Фамилия: ${JSON.stringify(data[i].last_name)}`
        result.appendChild(last_name);

        let avatar = document.createElement("img")
        urlImg = JSON.stringify(data[i].avatar).slice(0, -1).slice(1)
        avatar.src = urlImg
        avatar.textContent = `Фото: ${last_name.innerHTML}`
        result.appendChild(avatar);

        let email = document.createElement("h3")
        email.textContent = `Почта: ${JSON.stringify(data[i].email)}`
        result.appendChild(email)

        let text = document.createElement("p")
        text.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nihil pariatur quod vitae. Expedita amet fugit, a molestiae rerum similique dignissimos, dolor eligendi nihil dolore nobis illo placeat, maxime quasi!`
        result.appendChild(text);

        let isHappy = document.createElement("span");
        isHappy.textContent = Math.round(Math.random()) * 1;
        if (Math.round(Math.random()) * 1) {
            isHappy.textContent = "Да счаслив :)"
        } else {
            isHappy.textContent = "Не счаслив :("
        }
        result.appendChild(isHappy)
    }
}

function Data_url(baseUrl) {
    fetch(baseUrl)
        .then(res => res.json())
        .then(data =>  
            UsersShow(data.data)
        )
}

const baseUrl = "https://reqres.in/api/users?page=1";
const baseUrl2 = "https://reqres.in/api/users?page=2";

Data_url(baseUrl)
Data_url(baseUrl2)

