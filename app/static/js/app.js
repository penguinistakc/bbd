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
        let sample_list = response.otu_id;
        console.log(sample_list);
    const pieTrace = {
        labels: ["beer", "wine", "martini", "margarita",
        "ice tea", "rum & coke", "mai tai", "gin & tonic"],
        values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
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
