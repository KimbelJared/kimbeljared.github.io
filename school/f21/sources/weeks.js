const config = {
  type: 'bar',
  data: allData,
  options: {
    plugins: {
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
