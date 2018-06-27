console.log("Starting app.js");

function populateDropdown() {
    const nameUrl = "/names";
    Plotly.d3.json(nameUrl, function (error, response) {

        console.log(response);
        const selectedElement = document.getElementById("selDataset");
        for (let i = 0; i < response.length; i++) {
            const option = document.createElement("option");
            option.text = response[i];
            option.value = response[i];
            selectedElement.appendChild(option);
        }
    });
}


function optionChanged(sample) {
    console.log(sample);
    buildPieChart(sample);
}

function buildPieChart(sample) {
    const pieUrl = "/samples/" + sample;
    console.log(pieUrl);
    Plotly.d3.json(pieUrl, function (error, response) {
        console.log(response);
        console.log(response["otu_ids"]);
        console.log(response["sample_values"])
        let bob = response["otu_ids"].slice(0,10);
        let mary = response["sample_values"].slice(0,10);
        console.log("Bob" + bob);
        console.log("Mary " + mary);

    const pieTrace = {
        labels: bob.map(row => row["otu_ids"]),
        values: mary.map(row => row["sample_values"]),
        type: 'pie'
    };

    const pieData = [pieTrace];

    var layout = {
        title: "'Bar' Chart",
    };

    Plotly.newPlot("piePlot", pieData, layout);
    });
}

populateDropdown()
