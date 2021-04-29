/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var digitado = "";
//var horaInicial = document.getElementById("horaInicial").value;
//var horaFinal = document.getElementById("horaFinal").value;

function difHoras(horaInicial, horaFinal)
{
    var dtChegada = document.getElementById('horaInicial').value;
    var dtPartida = document.getElementById('horaFinal').value;
    debugger;

    var horarioChegada = convertStringToDate(dtChegada);
    var horarioPartida = convertStringToDate(dtPartida);

    var horaInicial = horarioChegada.getTime();
    var horaFinal = horarioPartida.getTime();

    var diffMs = (horaFinal - horaInicial);
    
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    var diff = diffHrs + 'h ' + diffMins + 'm';
    
    if (diffHrs <= 0 && diffMins <= 0 ){
        document.getElementById('result').innerHTML = "Suas horas não podem ser negativas: " + diff + ". Refaça o cálculo.";
    console.log(diff);
    }else if( diffHrs === 0 && diffMins === 0 ){
       document.getElementById('result').innerHTML = "Você não trabalhou nada pô! Olha isso: " + diff + ". Refaça o cálculo.";
    console.log(diff); 
    }
    else{
    document.getElementById('result').innerHTML = "Você trabalhou: " + diff;
    console.log(diff);
}}



function convertStringToDate(timeString) {
    var hoje = new Date();
    var hora = timeString.slice(0,2);
    var minuto = timeString.slice(3,5);

    hoje.setHours(hora);
    hoje.setMinutes(minuto);

    return hoje;
}
