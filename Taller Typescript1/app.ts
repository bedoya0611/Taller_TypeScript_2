import { series } from './data.js';

function renderSeriesTable(): void {
    const seriesTable = document.getElementById('series-table') as HTMLTableElement;
    const averageSeasonsElement = document.getElementById('average-seasons') as HTMLElement;

    series.forEach(serie => {
        const row = seriesTable.insertRow();
        row.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="#" class="series-link" data-id="${serie.id}">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;

        // Evento de clic para mostrar el detalle de la serie
        row.addEventListener('click', () => showSeriesDetail(serie));
    });

    // Calcular y mostrar el promedio de temporadas
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const averageSeasons = totalSeasons / series.length;
    averageSeasonsElement.textContent = `Seasons average: ${averageSeasons.toFixed(1)}`;
}

function showSeriesDetail(serie: { id: number, name: string, channel: string, seasons: number, image: string, description: string, link: string }): void {
    const detailCard = document.getElementById('series-detail-card') as HTMLElement;
    const seriesImage = document.getElementById('series-image') as HTMLImageElement;
    const seriesTitle = document.getElementById('series-title') as HTMLElement;
    const seriesDescription = document.getElementById('series-description') as HTMLElement;
    const seriesLink = document.getElementById('series-link') as HTMLAnchorElement;

    seriesImage.src = serie.image;
    seriesImage.alt = serie.name;
    seriesTitle.textContent = serie.name;
    seriesDescription.textContent = serie.description;
    seriesLink.href = serie.link;

    // Mostrar la tarjeta de detalle
    detailCard.style.display = 'block';
}

// Ejecutar la función cuando la página esté cargada
document.addEventListener('DOMContentLoaded', () => {
    renderSeriesTable();
});
