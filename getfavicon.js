function getFavicon(url) {
  // Create a new XMLHttpRequest object.
  var xhr = new XMLHttpRequest();

  // Set the request method to "GET".
  xhr.open("GET", "https://www.google.com/s2/favicons?sz=64&domain=" + url.replace("https://", "").replace("http://", "") + "&s=42");

  // Add a load event listener to the xhr object.
  xhr.addEventListener('load', function() {
    // Check the response status code.
    if (xhr.status === 200) {
      // The request was successful.
      // Create a new canvas element.
      var canvas = document.createElement("canvas");

      // Set the canvas width and height to 42 pixels.
      canvas.width = 42;
      canvas.height = 42;

      // Create a new 2D context for the canvas.
      var ctx = canvas.getContext("2d");

      // Draw the favicon data on the canvas.
      ctx.drawImage(xhr.response, 0, 0);

      // Convert the canvas to an image.
      var image = canvas.toDataURL("image/png");

      // Display the image on the page.
      document.getElementById("favicon").src = image;
    } else {
      // The request failed.
      alert("The request failed.");
    }
  });

  // Send the request.
  xhr.send();
}
function getFavicon(url) {
  // Create a new XMLHttpRequest object.
  var xhr = new XMLHttpRequest();

  // Set the request method to "GET".
  xhr.open("GET", "https://www.google.com/s2/favicons?sz=64&domain=" + url.replace("https://", "").replace("http://", "") + "&s=42");

  // Add a load event listener to the xhr object.
  xhr.addEventListener('load', function() {
    // Check the response status code.
    if (xhr.status === 200) {
      // The request was successful.
      // Create a new canvas element.
      var canvas = document.createElement("canvas");

      // Set the canvas width and height to 42 pixels.
      canvas.width = 42;
      canvas.height = 42;

      // Create a new 2D context for the canvas.
      var ctx = canvas.getContext("2d");

      // Draw the favicon data on the canvas.
      ctx.drawImage(xhr.response, 0, 0);

      // Convert the canvas to an image.
      var image = canvas.toDataURL("image/png");

      // Display the image on the page.
      document.getElementById("favicon").src = image;
    } else {
      // The request failed.
      alert("The request failed.");
    }
  });

  // Send the request.
  xhr.send();
}
