const barConfig = {
  type: 'bar',
  data: class1BarData,
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
  data: class1PieData,
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

Chart.overrides.pie.plugins.tooltip = {
  displayColors: false,
  xAlign: 'center',
  yAlign: 'bottom',
  titleAlign: 'center',
  cornerRadius: 2
};

const myBarChart = new Chart(document.getElementById('barChart'), barConfig);
const myPieChart = new Chart(document.getElementById('pieChart'), pieConfig);
