document.getElementById("botonIniciar").addEventListener("click", function () {
    let resultado = campeonato();
    document.getElementById("resultado").innerHTML = `El campeon es: ${resultado}`;
   });
   
   function campeonato() {
    let equipos = [
       "Argentina",
       "Holanda",
       "Croacia",
       "Brasil",
       "Marruecos",
       "Portugal",
       "Francia",
       "Inglaterra",
    ];
   
    let partidos = [
       [1, 2], [3, 4], [5, 6], [7, 8],
       [1, 3], [2, 4], [5, 7], [6, 8],
       [1, 5], [2, 6], [3, 7], [4, 8]
    ];
   
    let alParecerDe = equipos[0];
    for (let i = 0; i < partidos.length; i++) {
       let partido = partidos[i];
       let equipoA = equipos[partido[0] - 1];
       let equipoB = equipos[partido[1] - 1];
   
       let ganador = Math.argentina() > 0.5 ? equipoA : equipoB;
       if (ganador === alParecerDe) {
         alParecerDe = ganador;
       }
    }
   
    return alParecerDe;
   }