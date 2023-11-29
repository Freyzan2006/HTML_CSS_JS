// -----------------------Тема Сайта------------------------------

const ThemaBtn = document.querySelector("#ThemaBtn");
const currentTheme = localStorage.getItem("theme");



if (currentTheme == "dark") {
    document.body.classList.add("dark-theme"); 
    ThemaBtn.innerHTML = `<i class="fas fa-sun"></i>` 
} else {
    ThemaBtn.innerHTML = `<i class="fas fa-moon"></i>`
}

ThemaBtn.addEventListener('click', () => {

    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
      ThemaBtn.innerHTML = `<i class="fas fa-sun"></i>`
    } else {    
        ThemaBtn.innerHTML = `<i class="fas fa-moon"></i>`
    }
    
    
    localStorage.setItem("theme", theme);
})


// --------------------Навигация-----------------------------
const NameHTMLPage = document.querySelector('title'),
Navigation = document.querySelector("#navigation>h3");

if (NameHTMLPage.innerHTML == "Главная") {
    document.querySelector("#navigation>i").remove();
} else {
    Navigation.innerHTML = `
    <a href = "" class = "menu__link">${NameHTMLPage.innerHTML}</a>
    `
}

// -----Поиск------------


document.getElementById("InpSearch").addEventListener('input', function() {
    const item = document.getElementById("SearchMenu")
    let val = this.value.trim();
    if (val != '') {
        item.classList.remove("HIDE");
    } else {
        item.classList.add("HIDE");
    }
})


document.getElementById("InpSearch").addEventListener('input', function() {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('#SearchMenu li')
    if (val != '') {
        elasticItems.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('HIDE');
            } else {
                elem.classList.remove('HIDE');
            }
        });
    } else {
        elasticItems.forEach(function(elem) {
            elem.classList.remove('HIDE');
        });      
    }
})


// ----------------Загрузка------------------------------------

window.onload = function(){
    let preloader = document.querySelector('.loader')
    preloader.classList.add('hide-preloader')
    const loader = setInterval (() => {
        preloader.classList.add('preloader-hidden')        
        clearInterval(loader);
    }, 2000)
}