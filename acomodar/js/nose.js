document.addEventListener('DOMContentLoaded', function(){

    var divText = document.getElementById('content_news');
   fetch('http://ddragon.leagueoflegends.com/cdn/10.6.1/data/es_MX/champion.json')
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(miJeison) {
        divText.innerHTML ="<h2>" + miJeison.data["Aatrox"].id + "</h2>";
      })
     
      })
  });
  