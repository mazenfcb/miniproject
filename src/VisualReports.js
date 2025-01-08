import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import './VisualReports.css';

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const VisualReports = ({ transactions }) => {
    const categories = [
        'Business', 'Investments', 'Extra income', 'Deposits', 'Lottery', 'Gifts', 'Salary', 'Savings', 'Rental income',
        'Groceries', 'Transportation', 'Entertainment' // Add your existing categories here
    ];

    // Category-wise expense distribution
    const categoryData = categories.map(category => {
        return transactions.filter(t => t.category === category && t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
    });

    // Monthly income vs. expenses
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthlyIncomeData = new Array(12).fill(0);
    const monthlyExpenseData = new Array(12).fill(0);

    transactions.forEach(transaction => {
        const monthIndex = new Date(transaction.date).getMonth();
        if (transaction.type === 'income') {
            monthlyIncomeData[monthIndex] += transaction.amount;
        } else {
            monthlyExpenseData[monthIndex] += transaction.amount;
        }
    });

    return (
        <div className="visual-reports">
            <h2>Visual Reports</h2>
            <div className="chart">
                <Pie
                    data={{
                        labels: categories,
                        datasets: [{
                            data: categoryData,
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FFCD56', '#C9CBCF', '#FF6384', '#36A2EB', '#FFCE56'], // Adjust colors as needed
                        }],
                    }}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                callbacks: {
                                    label: (context) => `${context.label}: ${context.raw} DZD`,
                                },
                            },
                        },
                    }}
                />
            </div>
            <div className="chart">
                <Bar
                    data={{
                        labels: months,
                        datasets: [
                            {
                                label: 'Income',
                                data: monthlyIncomeData,
                                backgroundColor: '#36A2EB', // Adjust colors as needed
                            },
                            {
                                label: 'Expenses',
                                data: monthlyExpenseData,
                                backgroundColor: '#FF6384', // Adjust colors as needed
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                callbacks: {
                                    label: (context) => `${context.dataset.label}: ${context.raw} DZD`,
                                },
                            },
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Month',
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Amount (DZD)',
                                },
                                beginAtZero: true,
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default VisualReports;
