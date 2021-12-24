const barConfig = {
  type: 'bar',
  data: class4BarData,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'FIN 301 - By Week'
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
  data: class4PieData,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'FIN 301 - Total'
      },
    },
    responsive: true
  }
};

const myBarChart = new Chart(document.getElementById('barChart'), barConfig);
const myPieChart = new Chart(document.getElementById('pieChart'), pieConfig);
