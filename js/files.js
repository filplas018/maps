

init = () => {

    let text;
    let data;
    let names;
    const myForm = document.getElementById("myForm");
    const csvFile = document.getElementById("csvFile");

    myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = csvFile.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            text = e.target.result;
            data = csvToArray(text, ",");
            names = csvNames(text)
            
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