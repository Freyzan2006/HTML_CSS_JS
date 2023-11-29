const products = [
    product = {
        name: "Телефон",
        brand: "Samsung",
        img: "../image/ComplexDelivery/Tovar/img.png",
        info: "Lorem ipsum dolor sit amet.",
        price: 100000,
        href: "./TovarPhone.html"
    },

    product2 = {
        name: "Наушники",
        brand: "Apple",
        img: "../image/ComplexDelivery/Tovar/img2.png",
        info: "Lorem ipsum dolor sit amet.",
        price: 75000,
        href: "./TovarAirpods.html"
    },

    product3 = {
        name: "Часы",
        brand: "Apple",
        img: "../image/ComplexDelivery/Tovar/img3.png",
        info: "Lorem ipsum dolor sit amet.",
        price: 155000,
        href: "./TovarClock.html"
    }, 

    product4 = {
        name: "Планшет",
        brand: "Samsung",
        img: "../image/ComplexDelivery/Tovar/img4.png",
        info: "Lorem ipsum dolor sit amet.",
        price: 500000,
        href: "./TovarPlanshat.html"
    },


    product5 = {
        name: "Планшет",
        brand: "Samsung",
        img: "../image/ComplexDelivery/Tovar/img4.png",
        info: "Lorem ipsum dolor sit amet.",
        price: 500000,
        href: "./TovarPlanshat.html"
    },

    product6 = {
        name: "Часы",
        brand: "Apple",
        img: "../image/ComplexDelivery/Tovar/img3.png",
        info: "Lorem ipsum dolor sit amet.",
        price: 155000,
        href: "./TovarClock.html"
    },

    product7 = {
        name: "Наушники",
        brand: "Apple",
        img: "../image/ComplexDelivery/Tovar/img2.png",
        info: "Lorem ipsum dolor sit amet.",
        price: 75000,
        href: "./TovarAirpods.html"
    }, 

    product8 = {
        name: "Телефон",
        brand: "Samsung",
        img: "../image/ComplexDelivery/Tovar/img.png",
        info: "Lorem ipsum dolor sit amet.",
        price: 100000,
        href: "./TovarPhone.html"
    }
]

function TovarItems(start, end, products, here) {
    for(let i = start; i < end; i++) {
        

        let Tovar_items_div_item = document.createElement("div");
        Tovar_items_div_item.innerHTML = `
        <div>
            <img src="${products[i].img}" alt="">
            <h3>${products[i].name}</h3>
            <em>${products[i].brand}</em>
            <p>${products[i].info}</p>
            <b>${products[i].price} сум</b>
            <a href = '${products[i].href}' class = "BTN">Подробние</a>
        </div>
        `
        Tovar_items_div_item.classList.add("Tovar_items_div_item")

        

        here.querySelector(".Tovar_items_div").appendChild(Tovar_items_div_item);

        
    }
}


const Tovar_items = document.querySelectorAll(".Tovar_items");
const Tovar_items_btn = document.querySelectorAll(".Tovar_items_btn");


let start = 0
let end = 4
for (let j = 0; j < Tovar_items.length; j++) {
    let here = Tovar_items[j]
    TovarItems(start, end, products, here);
}

// for (let i = 0; i < Tovar_items_btn.length; i++) {
//     Tovar_items_btn[i].addEventListener('click', () => {
//         if (i % 2 == 0) {
//             if (start > 0 && end > 4) {
//                 start -= 4
//                 end -= 4

//                 for (let j = 0; j < Tovar_items.length; j++) {
//                     if (j == i - 1) {

//                         let here = Tovar_items[j]
//                         // here.innerHTML = ""
//                         TovarItems(start, end, products, here);
//                     }
//                 }

//                 console.log(i % 2)
//             }

//         } else {
//             start += 4
//             end += 4    

//             for (let j = 0; j < Tovar_items.length; j++) {
                
//                 if (j == i - 1) {
                   
//                     let here = Tovar_items[j]
//                     // here.innerHTML = ""
//                     TovarItems(start, end, products, here);
//                 }
//             }

//             console.log(i % 2)
//         }
//     })
// }

