AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const periodoAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    
    const diasAteOEvento = Math.floor(periodoAteOEvento / (diaEmMs));
    const horasAteOEvento = Math.floor((periodoAteOEvento % (diaEmMs)) / (horaEmMs));
    const minutosAteOEvento = Math.floor((periodoAteOEvento % (horaEmMs)) / (minutoEmMs));
    const segundosAteOEvento = Math.floor((periodoAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (periodoAteOEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = "0d 0h 0m 0s. Evento expirado!"
    }
}, 1000);
