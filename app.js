window.addEventListener('DOMContentLoaded', (event) => {
  console.log("Javascript is alive!");
  var greeting = document.getElementById('greeting');
  var allListItems = document.getElementsByTagName('li');

  var myImg = document.createElement('img');
  myImg.src = "https://placekitten.com/96/139"; //as of 26 May 2020 cannot do it with gif for security reasons: https://www.chromestatus.com/feature/5629709824032768, changed picture
  myImg.alt = "A Simplsons character waving in front of lockers."
  
  var array = ['make coffee', 'eat donut', 'change diapers', 'drive to work']
  var unorderedTodo = document.createElement('ul');


  greeting.innerText = 'Hello World!';

  for (var i in allListItems) {
    var listItem = allListItems[i];
    listItem.style = 'background-color : yellow';
  }

  greeting.appendChild(myImg);

  document.body.appendChild(unorderedTodo);
  unorderedTodo.setAttribute("class", "todo-items");

  for (i = 0; i < array.length; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = array[i];
    console.log(newLi);
    unorderedTodo.appendChild(newLi);
  }
  console.log(unorderedTodo);


});

/*
Go through the array 
['make coffee','eat donut','change diapers','drive to work']
and create an li element for each item e.g. 
<li>make coffee</li>
*/