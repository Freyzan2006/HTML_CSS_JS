const Whan_exesise_content_item = document.querySelectorAll(".Whan_exesise_content_item");


for (let i = 0; i < Whan_exesise_content_item.length; i++) {
    Whan_exesise_content_item[i].classList.add("animate__animated");
    if (i == 0) {
        Whan_exesise_content_item[i].classList.add("animate__bounceInDown");
    } else if (i == 1) {
        Whan_exesise_content_item[i].classList.add("animate__bounceInRight");
    } else if (i == 2) {
        Whan_exesise_content_item[i].classList.add("animate__bounceInUp");
    } else {
        Whan_exesise_content_item[i].classList.add("animate__bounceInLeft");
    }
}