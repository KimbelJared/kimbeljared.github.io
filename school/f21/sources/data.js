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
  class7: 'Physical Fitness'
};

const labels = ['Week #1', 'Week #2', 'Week #3', 'Week #4', 'Week #5', 'Week #6', 'Week #7', 'Week #8', 'Week #9', 'Week #10', 'Week #11', 'Week #12', 'Week #13', 'Week #14', 'Week #15', 'Week #16']

const class1study = [.4211, 1.1316, .24, 3.7636, .8658, .3711, 1.7486, 2.3266, 3.6491, 1.3558, 0, .3733, 9.3719, 1.5813, .0483, 2.0522];
const class1lecture = [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.2833, .8686, 1.25, 1, 1.9166, .8980, 1.1780, 0];
const class1total = [2.9211, 3.631, 2.74, 6.2636, 3.3658, 2.8711, 4.2486, 4.8266, 5.9325, 2.2244, 1.25, 1.3733, 11.2886, 2.4794, 1.2263, 2.0522];
const class1sum = [29.3008, 29.3947];

const class2study = [.6802, .6825, .7333, .8255, 5.4113, 2.4086, 1.8105, 2.0541, 1.01, .4488, 4.4530, .4591, 1.5027, 0, 0, 1.18];
const class2lecture = [2.5, 2.5, 2.5, 2.5, 2.5, 2, 2.5, 2.5, 2.25, 1.1375, 2.3936, 1.1333, 2.3333, 1, 2.29, 0];
const class2total = [3.1802, 3.1825, 3.2333, 3.3255, 7.9113, 4.4086, 4.3105, 4.5541, 3.26, 1.5863, 6.8466, 1.5925, 3.8361, 1, 2.29, 1.18];
const class2sum = [23.6602, 32.0377];

const class3study = [];
const class3lecture = [];
const class3total = [];
const class3sum = [];

const allData = {
  labels: labels,
  datasets: [
    {
      label: CLASSES.class1,
      data: class1total,
      backgroundColor: CHART_COLORS.orange,
    },
    {
      label: CLASSES.class2,
      data: class2total,
      backgroundColor: CHART_COLORS.green,
    },
    {
      label: CLASSES.class3,
      data: [],
      backgroundColor: CHART_COLORS.purple,
    },
    {
      label: CLASSES.class4,
      data: [],
      backgroundColor: CHART_COLORS.red,
    },
    {
      label: CLASSES.class5,
      data: [],
      backgroundColor: CHART_COLORS.yellow,
    },
    {
      label: CLASSES.class6,
      data: [],
      backgroundColor: CHART_COLORS.grey,
    },
    {
      label: CLASSES.class7,
      data: [],
      backgroundColor: CHART_COLORS.blue,
    },
  ]
};

const class1BarData = {
  labels: labels,
  datasets: [
    {
      label: "Study",
      data: class1study,
      backgroundColor: CHART_COLORS.orange,
    },
    {
      label: "Lecture",
      data: class1lecture,
      backgroundColor: CHART_COLORS.green,
    }
  ]
};

const class1PieData = {
  labels: [
    'Study',
    'Lecture'
  ],
  datasets: [
    {
      data: class1sum,
      backgroundColor: [CHART_COLORS.orange, CHART_COLORS.green],
      borderColor: 'rgba(0, 0, 0, 0)'
    }
  ]
};

const class2BarData = {
  labels: labels,
  datasets: [
    {
      label: "Study",
      data: class2study,
      backgroundColor: CHART_COLORS.orange,
    },
    {
      label: "Lecture",
      data: class2lecture,
      backgroundColor: CHART_COLORS.green,
    }
  ]
};

const class2PieData = {
  labels: [
    'Study',
    'Lecture'
  ],
  datasets: [
    {
      data: class2sum,
      backgroundColor: [CHART_COLORS.orange, CHART_COLORS.green],
      borderColor: 'rgba(0, 0, 0, 0)'
    }
  ]
};
