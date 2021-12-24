const barConfig = {
  type: 'bar',
  data: class3BarData,
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
        text: 'BUS 321 - By Week'
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
  data: class3PieData,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'BUS 321 - Total'
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
