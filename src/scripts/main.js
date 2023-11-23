AOS.init();

const dataDoEvento = new Date("Dec 12,2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMS) / horasEmMS);
    const minutosSteOEvento = Math.floor((distanciaAteOEvento % horasEmMS) / minutosEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMS ) / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosSteOEvento}m ${segundosAteOEvento}s`

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = `Evento expirado`
    }
},1000)