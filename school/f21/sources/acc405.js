const barConfig = {
  type: 'bar',
  data: class2BarData,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'ACC 405 - By Week'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  }
};

const pieConfig = {
  type: 'pie',
  data: class2PieData,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'ACC 400 - Total'
      },
    },
    responsive: true
  }
};

const myBarChart = new Chart(document.getElementById('barChart'), barConfig);
const myPieChart = new Chart(document.getElementById('pieChart'), pieConfig);
