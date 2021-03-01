
const screenshot = () => {
    // html2canvas(document.getElementById('flyer')).then(function (canvas) {
    //     var imageURL = canvas.toDataURL("image/png");
    //     let a = document.createElement("a");
    //     a.href = imageURL;
    //     a.download = imageURL;
    //     a.click();
    // });

    // let div =
    //     document.getElementById('flyer');
    // html2canvas(div, {
    //     windowWidth: div.scrollWidth,
    //     windowHeight: div.scrollHeight
    // }).then(
    //     function (canvas) {
    //         document
    //             .getElementById('output')
    //             .appendChild(canvas);
    //     })

    // var cssHead = document.querySelector("link[href$='styles.css']");
    // cssHead.parentNode.removeChild(cssHead);
    // let div =
    //     document.getElementById('flyer');
    // html2canvas(div, {
    //     windowWidth: 1920,
    //     windowHeight: 1080
    // }).then(function (canvas) {
    //     // Export canvas as a blob 
    //     // var ss = document.createElement("link");
    //     // ss.type = "text/css";
    //     // ss.rel = "stylesheet";
    //     // ss.href = "./assets/css/styles.css";
    //     // document.getElementsByTagName("head")[0].appendChild(ss);
    //     canvas.toBlob(function (blob) {
    //         // Generate file download
    //         var link = window.URL.createObjectURL(blob);
    //         // window.location = link;
    //         window.open(link)
    //     });
    // });


    var container = document.getElementById("flyer"); // full page 
    html2canvas(container, {
        windowWidth: 1920,
        windowHeight: 1080
    }).then(function (canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "html_image.png";
        link.href = canvas.toDataURL("image/png");
        link.target = '_blank';
        link.click();
    });



}


const form = document.getElementById('formflyer');
const data = new FormData(form);

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const { title, speaker, day, month, hour, zonehour, city } = Object.fromEntries(new FormData(event.target));
    const dateTextFormat = `${day} de ${month} a las ${hour}, ${zonehour} hora de ${city}`;
    const appendTitle = document.getElementById("title");
    const appendSpeakerName = document.getElementById("speaker");
    const appendEventDate = document.getElementById("dateformat");

    appendTitle.innerText = title;
    appendSpeakerName.innerText = speaker;
    appendEventDate.innerText = dateTextFormat;
});