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
}
else if (C.length < z) {
    console.log(z)
}
else {
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


function addYear() {
    var year = new Date().getFullYear()
    document.getElementById("copyYear").innerHTML = year
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}
ActiveNav();

 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });

function showForm() {
    document.getElementById("purchaseForm").style.display = "block";
}


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

var map = L.map('map').setView([40.4444, -79.9606], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([40.438581, -79.946627]).addTo(map);

