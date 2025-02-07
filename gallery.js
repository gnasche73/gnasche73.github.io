function upDate(previewPic) {
    // Change the background image of the div with id="image" to the hovered image
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Change the text inside the div to the alt text of the hovered image
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    // Restore the background image to its original state (empty)
    document.getElementById("image").style.backgroundImage = "none";
    
    // Restore the original text inside the div
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
