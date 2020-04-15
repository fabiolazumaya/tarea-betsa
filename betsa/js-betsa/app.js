import * as mifuntion from './function.js';

mifuntion.botonizquierdo.addEventListener('click', function () {
    fetch('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/es_MX/champion.json')
        .then(function (answer) {
            return answer.json();
        })
        .then(function (miJeison) {
            mifuntion.contenedorizquierdo.innerHTML = "<div class='insertar-carta-derecha'>" + "<img src='" + miJeison.data["Ashe"].image.full + "'/>" + "<h2>" + miJeison.data["Ashe"].name + "</h2>" + "<p>" + miJeison.data["Ashe"].blurb + "</p>" + "</div>";
        })
});

mifuntion.botonderecho.addEventListener('click', function () {
    fetch('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/es_MX/champion.json')
        .then(function (answer) {
            return answer.json();
        })
        .then(function (miJeison) {
            mifuntion.contenedorderecho.innerHTML = "<div class='insertar-carta-izquierda'>" + "<img src='" + miJeison.data["Akali"].image.full + "'/>" + "<h2>" + miJeison.data["Akali"].name + "</h2>" + "<p>" + miJeison.data["Akali"].blurb + "</p>" + "</div>";
        })
});

