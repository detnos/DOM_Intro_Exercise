window.addEventListener('DOMContentLoaded', (event) => {
  console.log("Javascript is alive!");
  //Part One
  var greeting = document.getElementById('greeting');
  var allListItems = document.getElementsByTagName('li');

  var myImg = document.createElement('img');
  myImg.setAttribute('src', 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif');
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
    unorderedTodo.appendChild(newLi);
    newLi.addEventListener('click', (event) => {
      
      event.target.setAttribute('class', 'selected');

    });
  }

  //Part Two


});

/*
Go through the array 
['make coffee','eat donut','change diapers','drive to work']
and create an li element for each item e.g. 
<li>make coffee</li>
*/