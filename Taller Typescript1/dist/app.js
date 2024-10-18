import { series } from './data.js';
function renderSeriesTable() {
    var seriesTable = document.getElementById('series-table');
    var averageSeasonsElement = document.getElementById('average-seasons');
    series.forEach(function (serie) {
        var row = seriesTable.insertRow();
        row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"#\" class=\"series-link\" data-id=\"").concat(serie.id, "\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        // Evento de clic para mostrar el detalle de la serie
        row.addEventListener('click', function () { return showSeriesDetail(serie); });
    });
    // Calcular y mostrar el promedio de temporadas
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var averageSeasons = totalSeasons / series.length;
    averageSeasonsElement.textContent = "Seasons average: ".concat(averageSeasons.toFixed(1));
}
function showSeriesDetail(serie) {
    var detailCard = document.getElementById('series-detail-card');
    var seriesImage = document.getElementById('series-image');
    var seriesTitle = document.getElementById('series-title');
    var seriesDescription = document.getElementById('series-description');
    var seriesLink = document.getElementById('series-link');
    seriesImage.src = serie.image;
    seriesImage.alt = serie.name;
    seriesTitle.textContent = serie.name;
    seriesDescription.textContent = serie.description;
    seriesLink.href = serie.link;
    // Mostrar la tarjeta de detalle
    detailCard.style.display = 'block';
}
// Ejecutar la función cuando la página esté cargada
document.addEventListener('DOMContentLoaded', function () {
    renderSeriesTable();
});
//# sourceMappingURL=app.js.map