const User_info_form = document.querySelector(".User_info_form")
const User = localStorage.getItem("NameUser");


const now_user_akk = document.querySelector(".now_user_akk");

if (User) {
    now_user_akk.innerHTML = `
        <h2 class = "TITLE_TEXT">Вашь Аккаунт:</h2>
        <p class = "TEXT">
            ${User}
        </p>
    `
} else {
    now_user_akk.innerHTML = `
    <h2 class = "TITLE_TEXT">Вашь Аккаунт:</h2>
    <p class = "TEXT">
       Вы не вошли в Аккаунт
    </p>
`
}



function RegUser(user_inp) { 
    User_info_form.reset() 

    const user = {
        Name: user_inp[0],
        Last_name: user_inp[1],
        Passworld: user_inp[2],
        IsAgree: user_inp[3]
    }

    localStorage.setItem("NameUser", `${user.Last_name} ${user.Name}`)
    
    now_user_akk.innerHTML = `
        <h2 class = "TITLE_TEXT">Вашь Аккаунт:</h2>
        <p class = "TEXT">
            ${user.Last_name} ${user.Name}
        </p>
    `
    
    console.log(user)
    return user
}

function Error(err) {

    User_info_form.reset() 

    InfoForUser = document.getElementById("InfoForUser");
    InfoForUser.innerHTML = err;
    InfoForUser.style.display = "block";

    const Info = setInterval(() => {
        InfoForUser.style.display = "none";
        clearInterval(Info);
    }, 8000)
}

User_info_form.addEventListener('submit', function(event) {
    event.preventDefault();

    const User_name = document.getElementById("User_name"),
        User_last_name = document.getElementById("User_last_name"),
        User_passworld = document.getElementById("User_passworld"),
        User_passworld2 = document.getElementById("User_passworld2"),
        User_isAgree = document.getElementById("User_isAgree"),
        User_File = document.getElementById("File"),
        User_File_img = document.getElementById("File_img");

    let name = User_name.value.trim()
    let last_name = User_last_name.value.trim()
    let passworld = User_passworld.value.trim()
    let passworld2 = User_passworld2.value.trim()
    let isAgree = User_isAgree.checked

    if (last_name.length >= 3 && name.length >= 3 && last_name.length <= 20 && name.length <= 20) {
        if (passworld.length >= 5 && passworld.length <= 20 && passworld == passworld2) {
            if (isAgree) {
                RegUser([name, last_name, passworld, isAgree])
            } else {
                Error("Вы не принели соглашение !");
            }
        } else {
            Error("Вы ввели не корректно в полу -> 'Пароль' ");
        }

    } else {

        Error("Вы не корректно ввели данные в поле -> 'Фамилия и Имя' ");

    }

})