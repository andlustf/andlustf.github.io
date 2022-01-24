console.log('test');

// Test 1: If we click on the container, can we hide it?

// Get all the things with the class container on the page. And add a function called hideContainer
let allContainers = document.getElementsByClassName('container');
const containers = Array.from(allContainers);
for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener('click', hideWindow);
}

function hideWindow() {
  // This will hide the window and show the related hub-item

  // the next line will print the thing we clicked on
  // console.log(this);

  // to hide something on a page, we can change it's display style to none
  this.style.display = 'none';

  // get the id of the window we just hid and get the number so we can show the corresponding thing in the hub
  const id = this.id;
  const split_id = id.split('-');
  const number = split_id[1];

  // put together the word hub with the number we have:
  const a = 'hub-' + number;
  // console.log(a);

  // Now we unhide the correct hub using the id that we just made (variable a);
  let h = document.getElementById(a);
  // console.log(h);
  h.style.visibility = 'visible';
}

// Write JS code to do the other flip: when you click on a hub-item, you hide it and show the corresponding window

// Get all the things with the class container on the page. And add a function called hideContainer
let allWindowHubs = document.getElementsByClassName(
  'window-hub-item window-header'
);
const windowHubs = Array.from(allWindowHubs);
for (let i = 0; i < windowHubs.length; i++) {
  windowHubs[i].addEventListener('click', showWindow);
}

function showWindow() {
  // This will show the window and hide the related hub-item

  // the next line will print the thing we clicked on
  console.log(this);

  // hide the tab we just clicked on
  this.style.visibility = 'hidden';

  // get the id of the tab we just hid and get the number so we can show the corresponding window
  const id = this.id;
  const split_id = id.split('-');
  const number = split_id[1];

  // decide what window we're going to show
  const a = 'window-' + number;
  // console.log(a);
  // Now we hide the correct hub using the id that we just made (variable a);
  let w = document.getElementById(a);
  console.log(w);
  w.style.display = 'block';
}
