init = () => {

    let text;
    let data;
    let names;
    const myForm = document.getElementById("myForm");
    const csvFile = document.getElementById("csvFile");
    let markers = [];

    var mymap = L.map('mapid').setView(new L.LatLng(49.799, 15.749), 8);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZmlsaW5wbGFzcyIsImEiOiJja3QwM256dXIyMnlwMnFzMjJ5OHkzNDVwIn0.IcRnLQnfEN0Ar-_0X09ncw'
    }).addTo(mymap);
    
    /*var marker = L.marker([50.088, 14.420]).addTo(mymap);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();*/

    myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = csvFile.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            text = e.target.result;
            data = csvToArray(text, ",");
            names = csvNames(text)

            for (let i = 0; i < data.length; i++) {
                
                markers.push(L.marker([data[i][1].substr(0,2) + "." + data[i][1].substr(2) , data[i][0].substr(0,2) + "." + data[i][0].substr(2)] ).addTo(mymap));
        
            }
            for(let i = 0; i < markers.length; i++){

                markers[i].bindPopup(names[i]).openPopup();

            }
            console.log(markers);
            //document.write(JSON.stringify(data));

        };

        reader.readAsText(input);

    });

    
    





    function csvNames(str) {
        const rows = str.slice(str.indexOf("\n") + 1).split("\n");
        let names = [];
        for (i = 0; i < rows.length; i++) {
            names.push(rows[i].split(",")[0]);
        }
        return names;
    }
    function csvToArray(str, delimeter) {

        const rows = str.slice(str.indexOf("\n") + 1).split("\n");

        let a = []
        let b = [];
        let coords = [];
        for (let i = 0; i < rows.length; i++) {
            a.push(rows[i].split("\t\t\t\t",))
        }
        for (let i = 0; i < a.length; i++) {
            b.push(a[i][1]);
        }
        b.forEach(element => {
            if (typeof element !== 'undefined') {
                coords.push(element.split("\t", 2));
            }
        })
        let x = b[0].split("\t", 2);
        return coords;
    }
}


document.addEventListener("DOMContentLoaded", init);


//circle.bindPopup("I am a circle.");
//polygon.bindPopup("I am a polygon.");

/*var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);*/