// src/app/data.js
export const statisticsData = {
    all: {
      pieChart: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
          label: "Dataset",
          data: [200, 150, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
      },
      lineChart: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
          label: "Sales",
          data: [10, 35, 22, 45, 55],
          borderColor: "#42A5F5",
          backgroundColor: "rgba(66, 165, 245, 0.2)",
        }]
      },
      stackedBarChart: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Sales A",
            data: [20, 60, 50, 110, 100],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          },
          {
            label: "Sales B",
            data: [40, 40, 70, 100, 90],
            backgroundColor: "rgba(54, 162, 235, 0.5)"
          }
        ]
      },
      areaChart: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
          label: "Growth",
          data: [20, 40, 30, 60, 80],
          borderColor: "#FFCE56",
          backgroundColor: "rgba(255, 206, 86, 0.5)",
          fill: true
        }]
      },
      stats: {
        totalSales: 10000,
        newUsers: 200,
        activeUsers: 105,
      }
    },
    "1day": {
      pieChart: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
          label: "Dataset",
          data: [150, 30, 20],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
      },
      lineChart: {
        labels: ["April", "May"],
        datasets: [{
          label: "Sales",
          data: [20, 30],
          borderColor: "#42A5F5",
          backgroundColor: "rgba(66, 165, 245, 0.2)"
        }]
      },
      stackedBarChart: {
        labels: ["April"],
        datasets: [
          {
            label: "Sales A",
            data: [20],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          },
          {
            label: "Sales B",
            data: [10],
            backgroundColor: "rgba(54, 162, 235, 0.5)"
          }
        ]
      },
      areaChart: {
        labels: ["April", "May"],
        datasets: [{
          label: "Growth",
          data: [15, 25],
          borderColor: "#FFCE56",
          backgroundColor: "rgba(255, 206, 86, 0.5)",
          fill: true
        }]
      },
      stats: {
        totalSales: 1200,
        newUsers: 30,
        activeUsers: 25,
      }
    },
    "1week": {
      pieChart: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
          label: "Dataset",
          data: [100, 180, 150],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
      },
      lineChart: {
        labels: ["March", "April"],
        datasets: [{
          label: "Sales",
          data: [25, 35],
          borderColor: "#42A5F5",
          backgroundColor: "rgba(66, 165, 245, 0.2)"
        }]
      },
      stackedBarChart: {
        labels: ["March", "April"],
        datasets: [
          {
            label: "Sales A",
            data: [40, 50],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          },
          {
            label: "Sales B",
            data: [60, 70],
            backgroundColor: "rgba(54, 162, 235, 0.5)"
          }
        ]
      },
      areaChart: {
        labels: ["March", "April"],
        datasets: [{
          label: "Growth",
          data: [30, 50],
          borderColor: "#FFCE56",
          backgroundColor: "rgba(255, 206, 86, 0.5)",
          fill: true
        }]
      },
      stats: {
        totalSales: 3500,
        newUsers: 80,
        activeUsers: 60,
      }
    },
    "1month": {
      pieChart: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
          label: "Dataset",
          data: [250, 100, 200],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
      },
      lineChart: {
        labels: ["January", "February", "March", "April"],
        datasets: [{
          label: "Sales",
          data: [15, 35, 25, 45],
          borderColor: "#42A5F5",
          backgroundColor: "rgba(66, 165, 245, 0.2)"
        }]
      },
      stackedBarChart: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Sales A",
            data: [30, 20, 70, 100],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          },
          {
            label: "Sales B",
            data: [50, 40, 80, 100],
            backgroundColor: "rgba(54, 162, 235, 0.5)"
          }
        ]
      },
      areaChart: {
        labels: ["January", "February", "March", "April"],
        datasets: [{
          label: "Growth",
          data: [20, 40, 30, 80],
          borderColor: "#FFCE56",
          backgroundColor: "rgba(255, 206, 86, 0.5)",
          fill: true
        }]
      },
      stats: {
        totalSales: 8000,
        newUsers: 150,
        activeUsers: 90,
      }
    }
  };
  