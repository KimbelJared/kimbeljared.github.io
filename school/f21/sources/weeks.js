const config = {
  type: 'bar',
  data: allData,
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
        text: 'Fall \'21 - By Week'
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

const myChart = new Chart(document.getElementById('barChart'), config);
