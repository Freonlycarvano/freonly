//DOM : document object model
//1. menambah object /tag html
//2. merubah isi dari object html
//3. menghapus object
//4. merubah style

//1. alert pop up
//alert("Hallo Albert");
//2. prompt pop up
//let nama = prompt("tuliskan nama anda?");
//alert("Hallo" + nama);
//3. confirm pop up
//let joomblo = confirm("apakah anda joomblo?");
//alert("Hallo " + ((joomblo==true)?"joomblo": "ayang"));

//menulis object
document.write("Hallo freonly carvano!");

//merubah object/element html
//1.pilih element berdasarkan tag name 
let elh1 = document.getElementsByTagName[0]("h1");
//2. tulis isi ke dalam element yang terpilih
elh1.innerHTML = "welcome to javascript HTML Dom";

let elh2 = document.getElementsByTagName[0]("h2");
elh2.innerHTML = "freonly carvano";

//pilih element berdasarkan id
let demo = document.getElementById("demo");
demo.innerHTML = "ternyata javascript itu mudah dan menyenangkan sekali!"

let demo2 =document.getElementById("demo2");
demo2.innerText ="<b> ini text tebal</B>"

let demo3 =document.getElementById("demo3");
//demo3.innerHTML ="sistem informasi,informatika,manajemen informatika"
let isilama = demo3.outerHTML; //sistem informasi,informatika,manajemen informatika
demo3.innerHTML= isilama + "manajemen informatika";