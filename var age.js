const idadeParticipante = 28;        //idade     
let numeroInscricoes = 90;           //numero de inscriçoes atual
let diaEvento = 25;                  //dia marcado
let mesEvento = 3;                  //mes marcado 
let anoEvento = 2022;                //ano marcado
let diaAtual = 25;                   //hoje
let mesAtual = 02;                    //esse mes
let anoAtual = 2022;                 //esse ano
let numerodeVagas

console.log(`Data Evento: ${diaEvento}/${mesEvento}/${anoEvento}`);                  
console.log(`Data Atual: ${diaAtual}/${mesAtual}/${anoAtual}`)
console.log(`Número de inscrições: ${numeroInscricoes}`);
console.log(`Idade do participante: ${idadeParticipante}`);

if (diaEvento >= diaAtual && mesEvento > mesAtual && anoEvento >= anoAtual && idadeParticipante >= 18 && numeroInscricoes < 100) {
    console.log(`inscriçao aceita`);;
    numeroInscricoes = numeroInscricoes + 1;
    numerodeVagas = 100 - numeroInscricoes;
    console.log('numero de vagas restantes:'+ numerodeVagas);
}else{
    console.log("inscriçao recusada")
}