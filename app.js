window.addEventListener('DOMContentLoaded', (event) => {
  console.log("Javascript is alive!");
  var greeting = document.getElementById('greeting');
  var allListItems = document.getElementsByTagName('li');

  var myImg = document.createElement('img');
  myImg.src = "https://placekitten.com/96/139"; //as of 26 May 2020 cannot do it with gif for security reasons: https://www.chromestatus.com/feature/5629709824032768, changed picture
  myImg.alt = "A Simplsons character waving in front of lockers."

  var unorderedTodo = document.createElement('ul')

  greeting.innerText = 'Hello World!';

  for (var i in allListItems) {
    var listItem = allListItems[i];
    listItem.style = 'background-color : yellow';
  }

  greeting.appendChild(myImg);

});
