document.getElementsByTagName("select").addEventListener("change", optionChanged(value));

function optionChanged(sample) {
    console.log(sample);
    buildPie(sample);
}

function buildPie(sampleId) {
    const url = "/sample/" + sampleId;
    Plotly.d3.json(url, function(error, response) {
        console.log(response);

    });

}