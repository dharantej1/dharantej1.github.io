function findFriend() {
    // Get the roll number from the input field
    var rollNumber = document.getElementById("roll-number").value.toUpperCase();

    // Update the src attribute of the image element to display the friend's image
    document.getElementById("friend-image").src = "http://teleuniv.in/sanjaya/student-images/" + rollNumber + ".jpg";

    // Show the download button
    document.getElementById("download-button").style.display = "block";
}

function downloadImage() {
    // Get the image element
    var imageElement = document.getElementById("friend-image");

    // Create a link element
    var linkElement = document.createElement("a");

    // Set the href attribute of the link to the src attribute of the image
    linkElement.href = imageElement.src;

    // Set the download attribute of the link to the file name
    linkElement.download = "friend.jpg";

    // Add the link to the DOM
    document.body.appendChild(linkElement);

    // Click the link to initiate the download
    linkElement.click();

    // Remove the link from the DOM
    document.body.removeChild(linkElement);
}
