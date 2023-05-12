function getFavicon(url) {
  // Create a new XMLHttpRequest object.
  var xhr = new XMLHttpRequest();

  // Set the request method to "GET".
  xhr.open("GET", url);

  // Send the request.
  xhr.send();

  // Check the response status code.
  if (xhr.status === 200) {
    // The request was successful.
    // Get the favicon data.
    var faviconData = xhr.responseText;

    // Create a new canvas element.
    var canvas = document.createElement("canvas");

    // Set the canvas width and height to 42 pixels.
    canvas.width = 42;
    canvas.height = 42;

    // Create a new 2D context for the canvas.
    var ctx = canvas.getContext("2d");

    // Draw the favicon data on the canvas.
    ctx.drawImage(faviconData, 0, 0);

    // Convert the canvas to an image.
    var image = canvas.toDataURL("image/png");

    // Display the image on the page.
    document.getElementById("favicon").src = image;
  } else {
    // The request failed.
    alert("The request failed.");
  }
}

// Prompt the user to enter the link of the website.
var url = prompt("Enter the link of the website:");

// Get the favicon of the website.
getFavicon(url);