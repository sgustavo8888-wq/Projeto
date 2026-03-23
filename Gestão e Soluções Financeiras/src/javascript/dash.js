// ===== GRÁFICO =====
const ctx = document.getElementById('meuGrafico');

if (ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Entradas', 'Saídas', 'Lucro'],
            datasets: [{
                label: 'Financeiro',
                data: [10000, 2000, 8000],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}