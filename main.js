// Declarations
let favs = Array.from (document.querySelectorAll(".fa-heart"));
let cards = Array.from (document.querySelectorAll(".card"));
let delbtns = Array.from(document.querySelectorAll(".fa-trash-can"));
let plusbtns = Array.from (document.querySelectorAll(".add"));
let minusbtns  =Array.from(document.querySelectorAll(".subtract"));

// Favorits
for (let fav of favs) {
    fav.addEventListener("click", function () {
        if (fav.style.color == "white") {
            fav.style.color = "red";
        } else {
            fav.style.color = "white";
        }
    });
};

// remove button part
for (let i in delbtns) {
    delbtns[i].addEventListener ("click", function () {
        cards[i].remove();
        total();
        subtotal1();
        subtotal2();
        subtotal3();
    })
};

// plus button part
for (let plus of plusbtns) {
    plus.addEventListener ("click", function () {
        plus.nextElementSibling.innerHTML++;
        total();
        subtotal1();
        subtotal2();
        subtotal3();
    })
};

// minus button part
for (let minus of minusbtns) {
    minus.addEventListener("click", function() {
        minus.previousElementSibling.innerHTML > 0 ? minus.nextElementSibling.innerHTML-- : null;
        total();
        subtotal1();
        subtotal2();
        subtotal3();
    })
};

// total price part
function total () {
    let qte=Array.from(document.querySelectorAll(".count"));
    let price=Array.from(document.querySelectorAll(".unit-price"));
    let s=0;
    for(let i= 0 ; i<price.length ; i++) {
        s= s + price[i].innerHTML * qte[i].innerHTML;
    }
    document.getElementById("total-price").innerHTML= s;
};

// subtotal 1 part
function subtotal1 () {
    let q= document.querySelectorAll("#qte1");
    let p= Document.querySelectorAll("#price1");
    let t= 0;
    t = t + q.innerHTML * p.innerHTML;
    document.querySelectorAll("#subtotal-price1").innerHTML= t;
};

// subtotal 2 part
function subtotal2 () {
    let q2= document.querySelectorAll("#qte2");
    let p2= Document.querySelectorAll("#price2");
    let t2= 0;
    t2 = t2 + q2.innerHTML * p2.innerHTML;
    document.querySelectorAll("#subtotal-price2").innerHTML= t2;
};

// subtotal 3 part
function subtotal3 () {
    let q3= document.querySelectorAll("#qte1");
    let p3= Document.querySelectorAll("#price1");
    let t3= 0;
    t3 = t3 + q.innerHTML * p.innerHTML;
    document.querySelectorAll("#subtotal-price3").innerHTML= t3;
};
