
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

const dateToObject = (date) => {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const selectedDate = new Date(date);

    return {
        day: selectedDate.getDate(),
        month: meses[selectedDate.getMonth()]
    }
}

const hourToString = (date, city) => {
    const selectedDate = new Date(date);
    return `a las ${selectedDate.getHours()}:${selectedDate.getMinutes()} hrs, hora de ${city}`;
}

const setTheme = (element, theme) => {
    const themes = {
        owasp: {
            src: "./assets/images/owasp-background.png",
        },
        gdg: {
            src: "./assets/images/gdg-background.png"
        }
    }
    element.style.backgroundImage = `url('${themes[theme].src}')`;
    element.className = "";
    element.classList.add(`theme-${theme}`);
}

const form = document.getElementById('formflyer');
const data = new FormData(form);
const triggerTheme = document.getElementById("changeTheme");
const backgroundTheme = document.getElementById("flyerTheme");
const appendTitle = document.getElementById("title");
const appendSpeakerName = document.getElementById("speaker");
const appendDayDate = document.getElementById("dayevent");
const appendMonthDate = document.getElementById("monthevent");
const appendHourDate = document.getElementById("hourformat");


const host = window.location.host;




form.addEventListener('submit', function (event) {
    event.preventDefault();
    const { title, speaker, date, city } = Object.fromEntries(new FormData(event.target));
    const hourTextFormat = hourToString(date, city);
    const { day, month } = dateToObject(date)

    appendTitle.innerText = title;
    appendSpeakerName.innerText = speaker;
    appendHourDate.innerText = hourTextFormat;
    appendDayDate.innerText = day;
    appendMonthDate.innerText = month;

    document.getElementById("getImage").style.display = "block";
});

document.getElementById("getImage").style.display = "none";
setTheme(backgroundTheme, triggerTheme.value)
triggerTheme.addEventListener("change", () => {
    setTheme(backgroundTheme, triggerTheme.value)
})




