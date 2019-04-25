//$("body").append("<h1>Hello jQuery!</h1>").slideUp(1000);
// $("h1").slideUp(1000).slideDown(1000);
// $("h1").hide(1000);
// $("h1").show(1000);
// ("p").fadeOut(1000).fadeIn(1000);
// $("p").fadeOut(1000).fadeIn(1000);

// var newHeader = prompt("Enter new header: "), number = +prompt("Enter number: ");
// $("h1").text(newHeader).fadeIn(2000);

// console.log(newHeader);

// for (let i = 0; i < number; i++) {
//  let hobby = prompt("Enter you hobby: ");
//  $("body").append("<p>" + hobby +	"</p>");
// }



// $("h1").text("My friends:");
// var myFriends = ["Bako", "Beka", "Asko", "Tolya", "Galo", "Kuzya"];
// for (let i = 0; i < myFriends.length; i++) {
//   $("body").append("<p>" + (i + 1) + ". " + myFriends[i] + "</p>");
// }
// $("p").append(" the best!");
// //console.log(myFriends.length);

// for (let i = 1; i <= 5; i++) {
//   let timeInterval = 1000 * i;
//   $("h1").fadeOut(timeInterval).fadeIn(timeInterval);
// }
// for (let i = 1; i <= 3; i++) {
//   let delayTime = 1000 * (i * 2);
//   $(".cube1").delay(delayTime).fadeOut(1000).fadeIn(1000);
// }

// $(".cube2").fadeTo(1000, .7);
// $("p").fadeTo(2000, 0.7);

// setTimeout(function() {
//   $("body").text("").append('<p id="gameOver">GAME OVER</p>')
// }, 3000);

// gameOver = () => {
// 	$("body").text("");
// 	$("body").append('<p id="gameOver">ooops...</p>')
// }
// var timeoutId = setTimeout(gameOver, 1500);
// console.log(timeoutId);
//clearTimeout(timeoutId);


var counter = 1;
printCount = () => {
	$(".counter").text(counter + " ");
	counter++;
}
setInterval(printCount, 1000);
console.log(counter);