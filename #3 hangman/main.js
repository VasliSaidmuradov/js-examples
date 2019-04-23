// Массив со словами
var words = ["cat", "dog", "good"];
// Выбираем случайное слово из массива words
var word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
var answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;
var count = word.length + 1;
console.log(count);
var elemW = document.getElementById("w");
// Игровой цикл
gameOverInfo = () => {
  // alert("You lose");
  elemW.innerHTML = "You Lose!"
  elemW.innerHTML += "<p>The answer was:</p>";
  elemW.innerHTML += '<p class="answer">' + word + '</p>';
}
gameWinInfo = () => {
  elemW.innerHTML = "You Win!";
  elemW.innerHTML += "<p>The answer is:</p>";
  elemW.innerHTML += '<p class="answer">' + word + '</p>';
}
showGameStatus = () => {
    document.getElementById("alertDiv").innerHTML = '<p class="answerRow">' + answerArray.join(" ") + '</p>';
  }

while (remainingLetters > 0) {
  if (count === 0) {
    gameOverInfo();
    break;
  }

  // Показываем состояние игры
  showGameStatus();
  // alert(answerArray.join(" "));
  //document.getElementById("alertDiv").innerHTML = '<p class="answerRow">' + answerArray.join(" ") + '</p>';
  // break;
  var guess = prompt("Guess a letter: ").toLowerCase();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter only one letter!");
  } else {
    //Обновляем состояние игры
    for (var j = 0; j < word.length; j++) {
      if (word[j] == guess) {
        answerArray[j] = guess;

        remainingLetters--;
        gameWinInfo();
        showGameStatus();
      }
    }
  }
count--;
console.log(count);
}
console.log(word);
console.log(remainingLetters);