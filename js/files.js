

init = () => {

    let text;
    let data;

    const myForm = document.getElementById("myForm");
    const csvFile = document.getElementById("csvFile");

    myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = csvFile.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            text = e.target.result;
            data = csvToArray(text, ",");
            let names = csvNames(text)
            document.write(JSON.stringify(data));

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
        //const headers = str.slice(0, str.indexOf("\n")).split(delimeter);

        // slice from \n index + 1 to the end of the text
        // use split to create an array of each csv value row
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
        b.forEach(element =>
            coords.push(element.split("\t",2))
            
            );
        let x = b[0].split("\t", 2);

        //console.log(a);
        //console.log(b);
        console.log(x);
        console.log(coords);
        return a;
    }
}


document.addEventListener("DOMContentLoaded", init);