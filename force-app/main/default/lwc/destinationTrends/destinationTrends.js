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
                                'rgba(244, 67, 54, 1)',
                                'rgba(255, 255, 255, 1)',
                                'rgba(244, 67, 54, 1)',
                                'rgba(8255, 255, 255, 1)',
                                'rgba(244, 67, 54, 1)',
                            ],
                            borderColor: [
                                'rgba(244, 67, 54, 1)',
                                'rgba(255, 255, 255, 1)',
                                'rgba(244, 67, 54, 1)',
                                'rgba(8255, 255, 255, 1)',
                                'rgba(244, 67, 54, 1)',
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
