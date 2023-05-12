function getFavicon() {
  var url = document.getElementById("url").value;

  // Create a new XMLHttpRequest object.
  var xhr = new XMLHttpRequest();

  // Set the request method to "GET".
  xhr.open("GET", url + "/favicon.ico", true);

  // Set the responseType to "blob".
  xhr.responseType = "blob";

  // Send the request.
  xhr.send();

  // Handle the response.
  xhr.onload = function() {
    // Check the response status code.
    if (xhr.status === 200) {
      // The request was successful.
      // Get the favicon data.
      var faviconData = xhr.response;

      // Convert the favicon data to an image URL.
      var imageURL = window.URL.createObjectURL(faviconData);

      // Display the image on the page.
      document.getElementById("favicon").src = imageURL;
    } else {
      // The request failed.
      alert("Failed to get favicon.");
    }
  };
}

document.getElementById("btnSubmit").addEventListener("click", getFavicon);
