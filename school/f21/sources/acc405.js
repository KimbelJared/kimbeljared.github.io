const barConfig = {
  type: 'bar',
  data: class2BarData,
  options: {
    plugins: {
      tooltip: {
        displayColors: false,
        xAlign: 'center',
        yAlign: 'bottom',
        titleAlign: 'center',
        cornerRadius: 2,
      },
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
        text: 'ACC 405 - Total'
      },
    },
    responsive: true
  }
};

Chart.overrides.pie.plugins.tooltip = {
  displayColors: false,
  xAlign: 'center',
  yAlign: 'bottom',
  titleAlign: 'center',
  cornerRadius: 2
};

const myBarChart = new Chart(document.getElementById('barChart'), barConfig);
const myPieChart = new Chart(document.getElementById('pieChart'), pieConfig);
