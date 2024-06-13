import { LightningElement, track } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import CHARTJS from '@salesforce/resourceUrl/ChartJs';

export default class DestinationTrends extends LightningElement {
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
                        labels: ['USA', 'Canada', 'Brazil', 'UK', 'Australia'],
                        datasets: [{
                            label: 'Number of Visitors',
                            data: [150, 120, 100, 90, 80],
                            backgroundColor: [
                                'rgba(255, 234, 0, 0.9)',
                                'rgba(223, 255, 0, 0.9)',
                                'rgba(255, 215, 0, 0.9)',
                                'rgba(255, 191, 0, 0.9)',
                                'rgba(255, 255, 0, 0.9)',
                            ],
                            borderColor: [
                                'rgba(255, 234, 0, 1)',
                                'rgba(223, 255, 0, 1)',
                                'rgba(255, 215, 0, 1)',
                                'rgba(255, 191, 0, 1)',
                                'rgba(255, 255, 0, 1)',
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.1)'
                                },
                                ticks: {
                                    color: '#ffffff'
                                }
                            },
                            x: {
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.1)'
                                },
                                ticks: {
                                    color: '#ffffff'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
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
