const Title__Info_right_text_Btn = document.querySelectorAll(".Title__Info_right_text .BTN_NV");
const Title__Info_right_text_div = document.querySelector(".Title__Info_right_text_div");

let isActive = false
for (let i = 0; i < Title__Info_right_text_Btn.length; i++) {
    
    
    Title__Info_right_text_Btn[i].addEventListener('click', () => {
        if (isActive) {
            Title__Info_right_text_div.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.377), rgba(0, 0, 0, 0.178)), url(../image/index/main/Title__Info/img1.png)"
            isActive = false
            
        } else {
            Title__Info_right_text_div.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.377), rgba(0, 0, 0, 0.178)), url(../image/index/main/Title__Info/img2.png)"
            isActive = true
            
        }
    })
}








