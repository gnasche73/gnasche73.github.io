function initializeGallery() {
    let images = document.querySelectorAll(".preview");
    images.forEach(img => {
        img.addEventListener("mouseover", function() { upDate(this); });
        img.addEventListener("mouseout", function() { unDo(); });
        img.addEventListener("focus", function() { upDate(this); });
        img.addEventListener("blur", function() { unDo(); });
        console.log("Event listeners added to:", img.alt);
    });
}

function upDate(previewPic) {
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "none";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
