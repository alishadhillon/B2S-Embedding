console.log("Hello from Back 2 School!");

// TODO
//1. Create a URL variable for storing dahsboards
//2. Grab the container from the HTML
//3. Set some dashboard options (width, height, etc)

const url =
  "https://public.tableau.com/views/DiversityinData-COVIDandDepressioninAdults/COVIDandDepressioninAdults?";
const vizContainer = document.getElementById("vizContainer");
const vizOptions = {
  device: "desktop",
};
let viz;

//1. Grab button from HTML
const pdfButton = document.getElementById("ExportPDF");
const pptButton = document.getElementById("ExportPPT");

function initViz() {
  console.log("Hello from InitViz");
  viz = new tableau.Viz(vizContainer, url, vizOptions);
}

//2. Create a function to generate PDF
function ExportPDF() {
  console.log("Generating a PDF...");
  viz.showExportPDFDialog();
}
function ExportPPT() {
  viz.showExportPPTDialog();
}

// Wait til content has loaded and execute initViz
document.addEventListener("DOMContentLoaded", initViz);
pdfButton.addEventListener("click", ExportPDF);
pptButton.addEventListener("click", ExportPPT);
