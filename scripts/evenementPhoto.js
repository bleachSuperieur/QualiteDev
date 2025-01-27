window.onload = function() {
    var voiliers = [
        "INITIATIVES COEUR",
        "MIEUX",
        "INTERACTION",
        "ARKEMA"
    ];

    var sources_voiliers = [
        "Voilier_Dalin.jpg",
        "Voilier_Cremer.jpg",
        "Voilier_LeCam.jpg",
        "Voilier_Bestaven.jpg"
    ]

    var images = document.getElementsByTagName("img");
    var result = document.getElementById("result");

    for (var i = 0; i < images.length; i++) {
        var image = images[i];

        image.onmouseover = function() {
            h3 = document.createElement("h3");
            h4 = document.createElement("h4");
            voilier = document.createElement("img");

            h3.innerHTML = this.alt;
            h4.innerHTML = voiliers[this.getAttribute("id") - 1];

            voilier.setAttribute("src", "photos/"
                + sources_voiliers[this.getAttribute("id") - 1]);
            voilier.setAttribute("class", "voilier");

            result.append(h3, h4, voilier);
        };

        image.onmouseout = function() {
            result.innerHTML = "";
        };
    }
};
