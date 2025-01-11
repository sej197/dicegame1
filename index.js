var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);
var file1 = "image/dice" + randomNumber1 + ".png";
var image1 = document.querySelector("img")[0];
image1.setAttribute("src", file1 );