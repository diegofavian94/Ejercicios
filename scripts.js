var timeOut; 
var interval;
let iniciar = false
let indexCal = 0
let indexEj = 0
let indexTunel = 0
let timerIniciado = false
cambioDia();
function iniciarTimer(){ 
    if (timerIniciado===false) {
        document.getElementById("timerText").innerHTML="Temporizador Iniciado"; 
        let tiempo = (document.getElementById("tempoId").value ?? 1) * 60000
        timeOut=setTimeout(
            function(){ 
                document.getElementById("timerText").innerHTML="Temporizador Finalizado"; 
                document.getElementById("audioFinal").play()
                cancelar()
                },tiempo,"JavaScript"); 
        let tiempoInterval=tiempo/1000;
        interval =setInterval(function() {document.getElementById("timerText").innerHTML=clock(tiempoInterval-1); tiempoInterval--}, 1000);
    }
    timerIniciado= true
} 
function cancelar(){ 
    clearTimeout(timeOut); 
    clearInterval(interval);
    document.getElementById("timerText").innerHTML="Temporizador Finalizado"; 
    timerIniciado = false
}
function insertarContenido (){
    if(!iniciar){
        document.querySelector('#botonInicio').innerHTML="Siguiente";
        iniciar=true
    }
    if(document.querySelector('#selector option:checked').id==="calentamiento"){
        const contenidoCal=[
        '<h2>1. Activación de cadera</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/calentamiento-activacion-cadera-1575301068.mp4"></video>',
        '<h2>2. Rotaciones de cadera</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/calentamiento-rotacion-cadera-1575301190.mp4"></video>',
        '<h2>3. Enhebrar la aguja</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/calentamiento-enhebrar-aguja-1575301208.mp4"></video>',
        '<h2>4. Tijeras abdominales</h2><img src="https://media.giphy.com/media/jUdlZc9Kw88mGqGPoD/giphy.gif" alt="Exercice 4" />',
        '<h2>5. Estocada lateral con elevación de rodilla</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/calentamiento-estocada-lateral-1575301237.mp4"></video>'
        ]
        document.querySelector('#contenido').innerHTML=contenidoCal[indexCal];
        indexCal=indexCal==contenidoCal.length-1 ? 0 : indexCal+1
    }else if(document.querySelector('#selector option:checked').id==="ejercicios"){
        let contenidoEj=[
            '<h2>1. Activación de cadera</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/calentamiento-activacion-cadera-1575301068.mp4"></video>',
            '<h2>2. Rotaciones de cadera</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/calentamiento-rotacion-cadera-1575301190.mp4"></video>',
            '<h2>3. Enhebrar la aguja</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/calentamiento-enhebrar-aguja-1575301208.mp4"></video>',
            '<h2>4. Plancha con estocada y rotación</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/calentamiento-plancha-1575301225.mp4"></video>',
            '<h2>5. Estocada lateral con elevación de rodilla</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/calentamiento-estocada-lateral-1575301237.mp4"></video>'
            ]
        if(document.querySelector('#selectorDia option:checked').id==="Martes"){
            contenidoEj=[
                '<h2>1. Sentadilla con salto de 180º</h2><video autoplay="" loop="" muted="" playsinline="" src="https://hmg-h-cdn.hearstapps.com/videos/2020-womenshealth-fitnessloops-ep24-tatiana-ms-kw-v1-gradedselects-180squatjump-01-1583933857.mp4"></video>',
                '<h2>2. Sentadilla con balanceo</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/squat-thrusts-1591196463.mp4"></video>',
                '<h2>3. Sentadillas sin peso</h2><img src="https://media.giphy.com/media/ed6cvbto3N5XbIgp67/giphy.gif" alt="Exercice 4" />',
                '<h2>4. Toques de pies laterales</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/lateral-toe-taps-1591198266.mp4"></video>',
                '<h2>5. Abdominales en bicicleta</h2><img src="https://media.giphy.com/media/dELBjGcheIAxp0iFmq/giphy.gif" alt="Exercice 4" />',
                '<h2>6. Crunch oblicuo tumbado</h2><img src="https://media.giphy.com/media/wCo4WYE1uzbuiSE5wP/giphy.gif" alt="Exercice 4" />',
            ]
        }else if(document.querySelector('#selectorDia option:checked').id==="Jueves"){
            contenidoEj=[
                '<h2>7.Pasitos rápidos con flexión</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/fast-feet-drop-1591199264.mp4"></video>',
                '<h2>8. Zancada lateral con rodillas arriba</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/2020-womenshealth-fitnessloops-ep24-tatiana-ms-kw-v1-gradedselects-lateralhighknees-02-1583933672.mp4"></video>',
                '<h2>9. Pasos rápidos con puños</h2><video autoplay="" loop="" muted="" playsinline="" width="600" height="400" src="https://hmg-h-cdn.hearstapps.com/videos/2020-womenshealth-fitnessloops-ep24-tatiana-ms-kw-v1-gradedselects-fastfeetwithpunches-02-1583933830.mp4"></video>',
                '<h2>10. Flexiones de Pared</h2><img src="https://media1.giphy.com/media/SHAh7hGU09oyXgrauE/giphy.gif" alt="Exercice 4" />',
                '<h2>11. Abdominales de Pie</h2><img src="https://runfitners.com/wp-content/uploads/2019/10/ABDOMINALES-DE-PIE-1-min-1.gif" alt="Exercice 4" />',
                '<h2>12. Abdominales de crossfit</h2><img src="https://media.giphy.com/media/ivpiAtbDZEQQVYYsIz/giphy.gif" alt="Exercice 4" />',
                ]
        }
        document.querySelector('#contenido').innerHTML=contenidoEj[indexEj];
        indexEj=indexEj==contenidoEj.length-1 ? 0 : indexEj+1
    }else if(document.querySelector('#selector option:checked').id==="tunelCarpio"){
        const contenidoTunel=[
            '<h2>1. Estiramiento Flexores</h2><img src="https://media3.giphy.com/media/humxpXtkc0PJsgIONE/giphy.gif" alt="Exercice 4" />',
            '<h2>2. Amasamiento del Antebrazo</h2><img src="https://media4.giphy.com/media/viosR1bL1So0e7fPoV/giphy.gif" alt="Exercice 4" />',
            '<h2>3. Apertura del túnel del carpo</h2><img src="https://media3.giphy.com/media/reECjVaeyg8MWynAp5/giphy.gif" alt="Exercice 4" />',
            '<h2>4. Movilización Neural</h2><img src="https://media3.giphy.com/media/3f7XH096AtzgncUjXe/giphy.gif" alt="Exercice 4" />',
            ]
            document.querySelector('#contenido').innerHTML=contenidoTunel[indexTunel];
            indexTunel=indexTunel==contenidoTunel.length-1 ? 0 : indexTunel+1
    }
    
}
function cerrarContenido(){
    document.querySelector('#contenido').innerHTML="";
    document.querySelector('#botonInicio').innerHTML="Iniciar";
    if(document.querySelector('#selector option:checked').id==="calentamiento" && document.getElementById("selectorDia")) document.getElementById("selectorDia").remove();
    iniciar = false
    indexCal = 0
    indexEj = 0
    indexTunel = 0
}
function cambioDia(){
    if(document.querySelector('#selector option:checked').id==="ejercicios"){
        let select=document.createElement("select")
        select.id="selectorDia"
        let dias = ["Martes","Jueves"]
        for(let i=0; i<dias.length; i++){
            var opt = document.createElement('option');
            opt.innerHTML = dias[i];
            opt.id=dias[i]
            select.appendChild(opt);
        }
        insertAfter(document.querySelector('#selector'), select)
    }
    cerrarContenido()
    
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const clock = (sec) => `${Math.floor(sec/60)} minutos con ${sec%60} segundos restantes`