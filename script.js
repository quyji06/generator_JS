function ksztalty() {
    var figury = document.getElementById("figury").value;
    var szerokosc = document.getElementById("szerokosc").value;
    var wysokosc = document.getElementById("wysokosc").value;
    var kolor = document.getElementById("kolor").value;
    var kolka = document.getElementById("kolka").checked;
    var trojkaty = document.getElementById("trojkaty").checked;

    // Clear previous shapes
    document.getElementById("circleContainer").innerHTML = '';
    document.getElementById("rectangleContainer").innerHTML = '';

    figury = parseInt(figury) || 1;  

    for (var i = 0; i < figury; i++) {
        // Create circles if the checkbox is checked
        if (kolka) {
            var circleDiv = document.createElement("div");
            circleDiv.className = "shape"; // Add class for styling
            circleDiv.style.width = szerokosc + "px";
            circleDiv.style.height = szerokosc + "px"; // Make it a circle
            circleDiv.style.backgroundColor = kolor;
            circleDiv.style.borderRadius = "50%";
            document.getElementById("circleContainer").appendChild(circleDiv);
        }

        // Create triangles if the checkbox is checked
        if (trojkaty) {
            var triangleDiv = document.createElement("div");
            triangleDiv.className = "shape"; // Add class for styling
            triangleDiv.style.width = 0;
            triangleDiv.style.height = 0;
            triangleDiv.style.borderLeft = szerokosc / 2 + "px solid transparent";
            triangleDiv.style.borderRight = szerokosc / 2 + "px solid transparent";
            triangleDiv.style.borderBottom = wysokosc + "px solid " + kolor;
            document.getElementById("rectangleContainer").appendChild(triangleDiv);
        }
    }
}