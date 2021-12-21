const barConfig = {
  type: 'bar',
  data: class1BarData,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'ACC 400 - By Week'
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
  data: class1PieData
};

const myBarChart = new Chart(document.getElementById('barChart'), barConfig);
const myPieChart = new Chart(document.getElementById('pieChart'), pieConfig);
