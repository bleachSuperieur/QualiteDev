window.onload = init;
function init() {
    var chaineJSON =
        '[{"nom": "Class40", "logo" : "photos/Class40.jpg"},' +
        '{"nom": "Imoca", "logo" : "photos/Imoca.jpg"},' +
        '{"nom": "OceanFifty", "logo" : "photos/OceanFifty.jpg"},' +
        '{"nom": "RhumMono", "logo" : "photos/RhumMono.jpg"},' +
        '{"nom": "RhumMulti", "logo" : "photos/RhumMulti.jpg"},' +
        '{"nom": "Ultim", "logo" : "photos/Ultim.jpg"}]';

    var classesVoiliers = JSON.parse(chaineJSON);

    var divLogo = document.getElementById("logos");
    for (var i = 0; i < classesVoiliers.length; i++) {
        var logo = document.createElement("img");
        logo.setAttribute("src", classesVoiliers[i].logo);
        logo.setAttribute("alt", classesVoiliers[i].nom);
        logo.setAttribute("width", 150);
        logo.setAttribute("height", 100);
        logo.setAttribute("id", i);
        divLogo.appendChild(logo);
    }

    var result = document.getElementById("result");

    for (var j = 0; j < classesVoiliers.length; j++) {
        var image = divLogo.children[j];
        image.onmouseover = function() {
            var h3 = document.createElement("h3");

            h3.innerHTML = this.alt;

            result.innerHTML = "";
            result.appendChild(h3);
        };
        //En commentaire pour que le nom reste lorsque la souris n'est plus sur l'image
        //image.onmouseout = function() {
        //    result.innerHTML = "";
        //};
    }
}
