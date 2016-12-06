// READY STATES

window.onload = function() {

  // 0 - request xhr (not initalized)

 var btn = document.querySelector("button");
 btn.addEventListener("click", function() {
   var movieTitle = document.querySelector(".titleLink");
   var t = document.createElement("h1");
   movieTitle.innerHTML = "";
   var u = document.querySelector( "input" ).value;
   var image = document.querySelector("img");


   document.body.style.background = "green";


   // u+= "jaws";

   var request = new XMLHttpRequest();
   // Need event listener and valus of text field on the page

   // 1 - called .open
   request.open("GET", "http://omdbapi.com?t=" + u);

   // 2 - request has been sent
   request.send();
   console.log(request.readyState);

   // 3 - being processed
   request.onreadystatechange = function() {
     if (request.readyState !== 4) { return false;
      }
       var parsedData = JSON.parse(request.responseText);
       console.log(parsedData);

       var title = parsedData["Title"];
       var poster = parsedData["Poster"];

   console.log(parsedData);
   //  movieTitle.text = title;
    var text = document.createTextNode(title);
    t.appendChild(text);
    movieTitle.appendChild(t);

    image.setAttribute("src", poster);
      console.log(image);
      console.log("Button was clicked");
   //Object.keys(title); get all the keys in the title
   // parsedData["Title"] look up the Title key in the response
   // Use JavaScript to take values from the response and mainipulate the DOM using those values (eg creating a DOM node, changing the text of that element to be a value in the xhr.responseText and appending the new element to the DOM).
};
 });
 };
