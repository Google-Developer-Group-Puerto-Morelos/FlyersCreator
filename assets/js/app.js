
const screenshot = (name) => {
    var container = document.getElementById("flyer"); // full page 
    html2canvas(container, {
        useCORS: true,
        allowTaint: true,
        scale: 1,
        dpi: 500,
    }).then(function (canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = name + ".png";
        link.href = canvas.toDataURL("image/png");
        link.target = '_blank';
        link.click();
    });
}

const getTitleToSave = () => (document.getElementById("getTitle").value).replace(" ", "_");

const form = document.getElementById('formflyer');
const data = new FormData(form);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const { title, speaker, date, city } = Object.fromEntries(new FormData(event.target));
    const dateTextFormat = dateToString(date, city);
    const appendTitle = document.getElementById("title");
    const appendSpeakerName = document.getElementById("speaker");
    const appendEventDate = document.getElementById("dateformat");

    appendTitle.innerText = title;
    appendSpeakerName.innerText = speaker;
    appendEventDate.innerText = dateTextFormat;

    document.getElementById("getImage").style.display = "block";
});


document.getElementById("getImage").style.display = "none";


const dateToString = (date, city) => {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const selectedDate = new Date(date);

    return `${selectedDate.getDay()} de ${meses[selectedDate.getMonth()]} a las ${selectedDate.getHours()}:${selectedDate.getMinutes()} hrs, hora de ${city}`;
}
