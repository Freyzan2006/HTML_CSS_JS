const Method_Payment_Rdo = document.querySelectorAll(".Method_Payment input[name='Method']");
const Method_Payment_Rdo_lable = document.querySelectorAll(".Method_Payment label>img");



for (let i = 0; i < Method_Payment_Rdo.length; i++) {
    Method_Payment_Rdo_lable[i].addEventListener('click', () => {
        let el = Method_Payment_Rdo_lable[i]
        
        for (let j = 0; j < Method_Payment_Rdo_lable.length; j++) {
            if (i != j) {
                Method_Payment_Rdo_lable[j].classList.remove("isActive")
            } else {

            }
        }

        if (el.classList[0]) {
           
            el.classList.remove("isActive");
            
        } else {
             
            el.classList.add("isActive");
            
        }

        
    })
}


const Name_Carta = document.querySelector(".Method_Payment #Name_Carta")
const User_place = document.querySelector(".Method_Payment #User_place")


Name_Carta.addEventListener('input', () => {
    console.log(Name_Carta.value)
})

User_place.addEventListener('input', () => {
    console.log(User_place.value)
})

