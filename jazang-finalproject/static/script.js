var x = 5
var y = 7
var z = x + y
console.log(z)
var A = 'Hello '
var B = 'world!'
var C = A + B
console.log(C)

function name(params) {
}

function sumnPrint(x1, x2) {
    var res = x1 + x2
    console.log(res)
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C)
} else if (C.length < z) {
    console.log(z)
} else {
    console.log("good job!")
}

/* L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i = i + 1) {
        if (arr[i] === "Banana") {
            alert("Banana found!")
        }
    }
}

findTheBanana(L1)
findTheBanana(L2)

function findTheBanana2(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!")
        }
    })
}

findTheBanana2(L1)
findTheBanana2(L2) */

// Greeting
var now = new Date()
var hour = now.getHours()

function greeting(x) {
    var greetingCheck = document.getElementById("greeting")
    if (greetingCheck) {
        if (x < 5 || x >= 20) {
            greetingCheck.innerHTML = "Good night, Welcome to MonoMuse"
        } else if (x < 12) {
            greetingCheck.innerHTML = "Good morning, Welcome to MonoMuse"
        } else if (x < 18) {
            greetingCheck.innerHTML = "Good afternoon, Welcome to MonoMuse"
        } else {
            greetingCheck.innerHTML = "Good evening, Welcome to MonoMuse"
        }
    }
}

greeting(hour)

// Footer year
function addYear() {
    var year = new Date().getFullYear()
    document.getElementById("copyYear").innerHTML = year
}

// Active navigation
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}
ActiveNav();

// Read more / Read less
if (typeof $ !== 'undefined') {
    $("#readLess").click(function(){ 
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });
      
    $("#readMore").click(function(){
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });
}

// Tickets page to show purchase form
function showForm() {
    document.getElementById("purchaseForm").style.display = "block";
}

// Ticket price calculation
function calculatePrice() {
    var ticketType = document.getElementById("ticketType");
    var quantity = document.getElementById("ticketQuantity");
    var totalPrice = document.getElementById("totalPrice");
    
    if (!ticketType || !quantity || !totalPrice) return;
    
    var price = parseFloat(ticketType.value) || 0;
    var qty = parseInt(quantity.value) || 0;
    var total = price * qty;
    
    totalPrice.innerHTML = "$" + total.toFixed(2);
}

// Tickets page for submit form
function submitForm() {
    var form = document.getElementById("ticketForm");
    var zipCode = document.getElementById("zipCode");
    
    if (zipCode && zipCode.value !== "" && zipCode.value.length !== 5) {
        alert("Zip code must be exactly 5 digits!");
        return;
    }
    
    if (form.checkValidity()) {
        var total = document.getElementById("totalPrice").innerHTML;
        var ticketType = document.getElementById("ticketType");
        var quantity = document.getElementById("ticketQuantity");
        var date = document.querySelector("input[name='date']");
        var name = document.querySelector("input[name='name']");
        
        localStorage.setItem("orderTotal", total);
        localStorage.setItem("orderType", ticketType.options[ticketType.selectedIndex].text);
        localStorage.setItem("orderQuantity", quantity.value);
        localStorage.setItem("orderDate", date.value);
        localStorage.setItem("orderName", name.value);
        
        window.location.href = "checkout.html";

    } else {
        form.reportValidity();
    }
}

// Checkout page after submit ticket
function loadConfirmation() {
    var confName = document.getElementById("confName");
    if (!confName) return;
    
    document.getElementById("confName").innerHTML = localStorage.getItem("orderName");
    document.getElementById("confType").innerHTML = localStorage.getItem("orderType");
    document.getElementById("confQuantity").innerHTML = localStorage.getItem("orderQuantity");
    document.getElementById("confDate").innerHTML = localStorage.getItem("orderDate");
    document.getElementById("confTotal").innerHTML = localStorage.getItem("orderTotal");
}

// Navigation hamburger menu
function toggleNav() {
    var nav = document.querySelector(".nav_bar");
    var hamburger = document.getElementById("hamburger");
    nav.classList.toggle("responsive");
    if (nav.classList.contains("responsive")) {
        hamburger.innerHTML = "✕";
    } else {
        hamburger.innerHTML = "☰";
    }
}

// Map API
if (document.getElementById('map')) {
    var map = L.map('map').setView([40.4444, -79.9606], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([40.438581, -79.946627]).addTo(map);
}

// Homepage slideshow images
var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

function showSlide(n) {
    if (slides.length === 0) return;
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

function autoSlide() {
    if (slides.length === 0) return;
    showSlide(slideIndex + 1);
}

setInterval(autoSlide, 4000);

// Exhibitions slider button
var trackPosition = 0;
var maxPosition = 1;

function slideLeft() {
    var track = document.getElementById("exhibitionsTrack");
    if (!track) return;
    if (trackPosition > 0) {
        trackPosition--;
        track.style.transform = "translateX(-" + (trackPosition * 33.333) + "%)";
    }
}

function slideRight() {
    var track = document.getElementById("exhibitionsTrack");
    if (!track) return;
    if (trackPosition < maxPosition) {
        trackPosition++;
        track.style.transform = "translateX(-" + (trackPosition * 33.333) + "%)";
    }
}

// Membership page
function showMembershipForm(type) {
    document.getElementById("membershipForm").style.display = "block";
    document.getElementById("selectedMembership").value = type;
    document.getElementById("membershipForm").scrollIntoView({behavior: "smooth"});
}

function submitMembership() {
    var form = document.getElementById("membershipFormInput");
    if (form.checkValidity()) {
        alert("Thank you for becoming a MonoMuse member!")
    } else {
        form.reportValidity();
    }
}