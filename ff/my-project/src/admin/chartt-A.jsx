import React ,{ useRef, useState, useEffect }from "react";
import ApexCharts from "react-apexcharts";

export const LineChart = () => {
    const chartConfig = {
        series: [
            {
                name: "Sales",
                data: [120, 160, 180, 160, 190, 190, 200, 220, 225],
            },
        ],
        chart: {
            type: "line",
            height: 180, // Decrease the chart height here
            toolbar: { show: false },
        },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", colors: ["#e9b0dd"] },
        xaxis: {
            categories: [],
            axisTicks: { show: false },
            axisBorder: { show: false },
            labels: { show: false },
        },
        yaxis: { labels: { show: false } },
        grid: { show: false },
        tooltip: { theme: "dark" },
    };

    return (
        <div className="w-80 h-28"> {/* Adjust the height here as well */}
            <ApexCharts options={chartConfig} series={chartConfig.series} type="line" height={180} /> {/* Match height here */}
        </div>
    );
};


import Chart from 'react-apexcharts';

export
    const SatisfactionPieChart = () => {
        // Sample data for customer satisfaction ratings
        const chartOptions = {
            chart: {
                type: 'pie',
                toolbar: {
                    show: false,
                },
            },
            labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'],
            colors: ['#f791d5', '#7ee1f3', '#f0ee8e', '#8ef091', '#9CA3AF'], // Colors for each category
            legend: {
                show: false, // Hide default legend, as we're using custom legends
            },
        };

        const chartSeries = [55, 30, 15, 7,]; // Sample data representing ratings

        return (
            <div className="">
                <div className="h-[250px]  justify-center items-center  flex flex-row">
                    {/* Pie Chart */}
                    <div id="hs-pie-chart " className="mt-3 ">
                        <Chart options={chartOptions} series={chartSeries} type="pie" height={240} />
                    </div>

                    {/* Legend Indicator */}
                    <div className="flex flex-col sm:justify-end gap-x-4 mt-0  space-y-2">
                    <h1 className="text-xl font-medium text-gray-300">Customer Satisfaction</h1>
                        <div className="inline-flex items-center">
                            <span className="size-2.5 inline-block w-2.5 h-2.5 bg-green-300 rounded-sm mr-2"></span>
                            <span className="text-[16px] text-gray-500 dark:text-neutral-400">Very Satisfied</span>
                        </div>
                        <div className="inline-flex items-center">
                            <span className="size-2.5 inline-block w-2.5 h-2.5 bg-cyan-200 rounded-sm mr-2"></span>
                            <span className="text-[16px] text-gray-500 dark:text-neutral-400">Satisfied</span>
                        </div>
                        <div className="inline-flex items-center">
                            <span className="size-2.5 inline-block w-2.5 h-2.5 bg-yellow-300 rounded-sm mr-2"></span>
                            <span className="text-[16px] text-gray-500 dark:text-neutral-400">Neutral</span>
                        </div>
                        <div className="inline-flex items-center">
                            <span className="size-2.5 inline-block w-2.5 h-2.5 bg-pink-400 rounded-sm mr-2"></span>
                            <span className="text-[16px] text-gray-500 dark:text-neutral-400">Dissatisfied</span>
                        </div>

                    </div>
                    {/* End Legend Indicator */}
                </div>
            </div>
        );
    };


 
    import { FaDollarSign } from "react-icons/fa";
    
    export const BarChart = () => {
        const [salesData, setSalesData] = useState([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            fetch("http://13.203.36.105:5000/api/salesChart")
                .then((response) => response.json())
                .then((data) => {
                    console.log("Sales API Response:", data); // Debugging
                    if (data && data.monthlySales) {
                        setSalesData(data.monthlySales);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching sales data:", error);
                    setLoading(false);
                });
        }, []);
    
        const chartConfig = {
            series: [{ name: "Sales", data: salesData }],
            chart: { type: "bar", height: 240, toolbar: { show: false } },
            colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFDB33', '#33FFF0', '#F033FF', '#F0FF33', '#FF5733'],
            plotOptions: {
                bar: {
                    columnWidth: "40%",
                    borderRadius: 2,
                    borderWidth: 2,
                    borderColor: "#af75f1",
                    colors: {
                        ranges: [
                            { from: 0, to: 100, color: "#f8e53b" },
                            { from: 101, to: 200, color: "#75f179" },
                            { from: 201, to: 300, color: "#49e3ee" },
                            { from: 301, to: 400, color: "#ee49af" },
                            { from: 401, to: 500, color: "#af75f1" }
                        ]
                    }
                },
            },
            xaxis: {
                categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: { style: { fontSize: "12px", colors: "#616161" } }
            },
            yaxis: { labels: { style: { fontSize: "12px", colors: "#616161" } } },
            grid: { show: false },
            tooltip: { theme: "dark" },
        };
    
        return (
            <div className="px-4 py-2">
                <h3 className="text-lg flex font-medium mt-2 ml-3 text-gray-300">
                    <FaDollarSign className="text-green-400 text-xl mt-1" /> Monthly Sales
                </h3>
                {loading ? (
                    <p className="text-gray-400 mt-2">Loading sales data...</p>
                ) : (
                    <Chart options={chartConfig} series={chartConfig.series} type="bar" height={240} />
                )}
            </div>
        );
    };

    
    export const GenderChart = () => {
        const chartOptions = {
          chart: {
            type: "bar",
            toolbar: { show: false },
            background: "transparent",
          },
          plotOptions: {
            bar: {
              horizontal: true, // Horizontal bar chart
              barHeight: "50%",
              borderRadius: 6, // Rounded bar edges
            },
          },
          colors: ["#8B5CF6"], // Purple color for bars
          xaxis: {
            categories: ["Male", "Female"],
            axisBorder: { show: false },
            axisTicks: { show: false },
          },
          grid: {
            show: false, // Remove grid lines
          },
          tooltip: {
            enabled: false,
          },
        };
      
        const chartSeries = [
          {
            data: [60, 40], // Percentage values
          },
        ];
      
        return (
          <div className="w-full max-w-lg  p-4">
            <h2 className="text-white text-lg font-semibold mb-2">Audience</h2>
            <Chart options={chartOptions} series={chartSeries} type="bar" height={150} width={450} />
          </div>
        );
      };


      
export const GenderDonutChart = () => {
    const chartOptions = {
      chart: {
        type: "donut",
      },
      labels: ["Male", "Female"],
      colors: ["#8B5CF6", "#E91E63"], // Purple & Pink
      legend: {
        show: false,
      },
      tooltip: {
        enabled: true,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "75%", // Adjust donut thickness
          },
        },
      },
      stroke: {
        show: false, // Removes the white circle line
      },
      dataLabels: {
        enabled: false, // Hides percentage labels inside the chart
      },
    };
  
    const chartSeries = [60, 40]; // Male 60%, Female 40%
  
    return (
      <div className="w-60 max-w-xs ">

        <Chart options={chartOptions} series={chartSeries} type="donut" height={120} />
      </div>
    );
  };