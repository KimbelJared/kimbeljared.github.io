const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};
const CLASSES = {
  class1: 'ACC 400',
  class2: 'ACC 405',
  class3: 'FIN 301',
  class4: 'BUS 321',
  class5: 'Work',
  class6: 'Rebelsat',
  class7: 'Minerva',
  class8: 'Gym'
};

const labels = ['Week #1', 'Week #2', 'Week #3', 'Week #4', 'Week #5', 'Week #6', 'Week #7', 'Week #8', 'Week #9', 'Week #10', 'Week #11', 'Week #12', 'Week #13', 'Week #14', 'Week #15', 'Week #16']

const data = {
  labels: labels,
  datasets: [
    {
      label: CLASSES.class1,
      data: [161.22, 217.90, 164.40, 375.82, 201.95, 172.27, 254.92, 289.60],
      backgroundColor: CHART_COLORS.orange,
    },
    {
      label: CLASSES.class2,
      data: [176.25,	190.95,	119.00,	199.53,	474.68,	264.48,	258.63,	273.25],
      backgroundColor: CHART_COLORS.green,
    },
    {
      label: CLASSES.class3,
      data: [221.00,	88.57,	175.55,	243.33,	150.00,	172.47,	150.00,	229.63],
      backgroundColor: CHART_COLORS.purple,
    },
    {
      label: CLASSES.class4,
      data: [102.20,	88.57,	101.50,	226.43,	163.30,	194.48,	179.67,	279.73],
      backgroundColor: CHART_COLORS.red,
    },
    {
      label: CLASSES.class5,
      data: [1702.53,	1593.80,	1503.83,	1157.85,	1456.83,	1211.83,	1667.62,	1051.45],
      backgroundColor: CHART_COLORS.yellow,
    },
    {
      label: CLASSES.class6,
      data: [],
      backgroundColor: CHART_COLORS.grey,
    },
    {
      label: CLASSES.class7,
      data: [0.00,	0.00,	0.00,	0.00,	0.00,	0.00,	45.00, 0],
      backgroundColor: CHART_COLORS.purple,
    },
    {
      label: CLASSES.class8,
      data: [110.07, 100.75, 116.48, 107.23, 125.12,	65.50,	56.83,	336.23],
      backgroundColor: CHART_COLORS.purple,
    },
  ]
};

const config = {
  type: 'bar',
  data: data,
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
        stacked: true
      }
    }
  }
};

const myChart = new Chart(document.getElementById('barChart'), config);
