import { LightningElement, track } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import CHARTJS from '@salesforce/resourceUrl/ChartJs';

export default class TravelActivityTrends extends LightningElement {
    @track chart;

    renderedCallback() {
        if (this.chart) {
            return;
        }
        loadScript(this, CHARTJS)
            .then(() => {
                const ctx = this.template.querySelector('canvas').getContext('2d');
                this.chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Hiking', 'Parties', 'Surfing', 'Sightseeing', 'Food Tasting'],
                        datasets: [{
                            label: 'Number of People',
                            data: [40, 30, 20, 50, 25],
                            backgroundColor: [
                                'rgba(244, 208, 63, 0.7)',
                                'rgba(231, 76, 60, 0.7)',
                                'rgba(142, 68, 173, 0.7)',
                                'rgba(46, 204, 113, 0.7)',
                                'rgba(52, 152, 219, 0.7)',
                                //'rgba(255, 99, 132, 0.6)',
                                //'rgba(54, 162, 235, 0.6)',
                                //'rgba(255, 206, 86, 0.6)',
                                //'rgba(75, 192, 192, 0.6)',
                                //'rgba(153, 102, 255, 0.6)'
                            ],
                            borderColor: [
                                'rgba(244, 208, 63, 1)',
                                'rgba(231, 76, 60, 1)',
                                'rgba(142, 68, 173, 1)',
                                'rgba(46, 204, 113, 1)',
                                'rgba(52, 152, 219, 1)',
                                //'rgba(255, 99, 132, 1)',
                                //'rgba(54, 162, 235, 1)',
                                //'rgba(255, 206, 86, 1)',
                                //'rgba(75, 192, 192, 1)',
                                //'rgba(153, 102, 255, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                                position: 'top',
                                labels: {
                                    color: 'rgba(255,255,255,0.87)'
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(tooltipItem) {
                                        return tooltipItem.dataset.label + ': ' + tooltipItem.raw.toFixed(0);
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                stacked: true,
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    color: 'rgba(255,255,255,0.87)'
                                },
                            },
                            y: {
                                stacked: true,
                                ticks: {
                                    color: 'rgba(255,255,255,0.87)'
                                },
                                grid: {
                                    color: 'rgba(255,255,255,0.1)'
                                }
                            }
                        }
                    }
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
}
