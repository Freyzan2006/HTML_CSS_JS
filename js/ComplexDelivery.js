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

function TovarItems(start, end, items) {
    for(let i = start; i < end; i++) {

        let Tovar_items_div_item = document.createElement("div");
        Tovar_items_div_item.innerHTML = `
        <div>
            <img src="${items[i].img}" alt="">
            <h3>${items[i].name}</h3>
            <em>${items[i].brand}</em>
            <p>${items[i].info}</p>
            <b>${items[i].price} сум</b>
            <a href = '${items[i].href}' class = "BTN">Подробние</a>
        </div>
        `
        Tovar_items_div_item.classList.add("Tovar_items_div_item")
        document.querySelector(".Tovar_items_div").appendChild(Tovar_items_div_item);
        
    }
}


const Tovar_items_btn1 = document.getElementById("Tovar_items_btn1"),
    Tovar_items_btn2 = document.getElementById("Tovar_items_btn2");




let start = 0
let end = 4
TovarItems(start, end, products);

Tovar_items_btn1.addEventListener('click', () => {
    
    
    start = 0
    end = 4

    document.querySelector(".Tovar_items_div").innerHTML = ``
    TovarItems(start, end, products);

    
})

Tovar_items_btn2.addEventListener('click', () => {
    
    start = 4
    end = 8

    document.querySelector(".Tovar_items_div").innerHTML = ``
    TovarItems(start, end, products);

    
})



