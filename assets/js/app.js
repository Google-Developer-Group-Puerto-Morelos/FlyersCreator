const screenshot = (name) => {
  const container = document.getElementById("flyer");
  html2canvas(container, {
    useCORS: true,
    allowTaint: true,
    scale: 1,
    dpi: 500,
  }).then((canvas) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.download = `${name}.png`;
    link.href = canvas.toDataURL("image/png");
    link.target = "_blank";
    link.click();
  });
};

const getTitleToSave = () => {
  return document.getElementById("getTitle").value.replace(" ", "_");
};

const dateToObject = (date) => {
  const meses = [
    "ENERO",
    "FEB",
    "MAR",
    "ABRIL",
    "MAY",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];
  const selectedDate = new Date(date);

  return {
    day: selectedDate.getDate(),
    month: meses[selectedDate.getMonth()],
  };
};

const hourToString = (date, city) => {
  const selectedDate = new Date(date);
  return `a las ${selectedDate.getHours()}:${selectedDate.getMinutes()} hrs en ${city}`;
};

const setTheme = (element, theme) => {
  const themes = {
    owasp: {
      src: "./assets/images/owasp-background.png",
    },
    gdg: {
      src: "./assets/images/gdg-background.png",
    },
  };
  element.style.backgroundImage = `url('${themes[theme].src}')`;
  element.className = "";
  element.classList.add(`theme-${theme}`);
};

const form = document.getElementById("formflyer");
const triggerTheme = document.getElementById("changeTheme");
const backgroundTheme = document.getElementById("flyerTheme");
const appendTitle = document.getElementById("title");
const appendSpeakerName = document.getElementById("speaker");
const appendDayDate = document.getElementById("dayevent");
const appendMonthDate = document.getElementById("monthevent");
const appendHourDate = document.getElementById("hourformat");
const getImageButton = document.getElementById("getImage");

const host = window.location.host;

const updateFlyer = (data) => {
  const { title, speaker, date, city } = data;
  const hourTextFormat = hourToString(date, city);
  const { day, month } = dateToObject(date);

  appendTitle.innerText = title;
  appendSpeakerName.innerText = speaker;
  appendHourDate.innerText = hourTextFormat;
  appendDayDate.innerText = day;
  appendMonthDate.innerText = month;

  getImageButton.style.display = "block";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));
  updateFlyer(formData);
});

getImageButton.style.display = "none";
setTheme(backgroundTheme, triggerTheme.value);
triggerTheme.addEventListener("change", () => {
  setTheme(backgroundTheme, triggerTheme.value);
});
