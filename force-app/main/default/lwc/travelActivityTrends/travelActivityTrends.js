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
                                'rgba(255, 191, 0, 0.9)',
                                'rgba(223, 255, 0, 0.9)',
                                'rgba(255, 215, 0, 0.9)',
                                'rgba(255, 234, 0, 0.9)',
                                'rgba(255, 255, 0, 0.9)',
                            ],
                            borderColor: [
                                'rgba(255, 191, 0, 1)',
                                'rgba(223, 255, 0, 1)',
                                'rgba(255, 215, 0, 1)',
                                'rgba(255, 234, 0, 1)',
                                'rgba(255, 255, 0, 1)',
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
