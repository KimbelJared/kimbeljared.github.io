const CHART_COLORS = {
  red: 'rgba(255, 99, 132, 1)',
  redL: 'rgba(255, 99, 132, 0.2)',
  orange: 'rgba(255, 159, 64, 1)',
  orangeL: 'rgba(255, 159, 64, 0.2)',
  yellow: 'rgba(255, 205, 86, 1)',
  yellowL: 'rgba(255, 205, 86, 0.2)',
  green: 'rgba(75, 192, 192, 1)',
  greenL: 'rgba(75, 192, 192, 0.2)',
  blue: 'rgba(54, 162, 235, 1)',
  blueL: 'rgba(54, 162, 235, 0.2)',
  purple: 'rgba(153, 102, 255, 1)',
  purpleL: 'rgba(153, 102, 255, 0.2)',
  grey: 'rgba(201, 203, 207, 1)',
  greyL: 'rgba(201, 203, 207, 0.2)'
};
const CLASSES = {
  class1: 'ACC 400',
  class2: 'ACC 405',
  class3: 'BUS 321',
  class4: 'FIN 301',
  class5: 'Work',
  class6: 'Physical Fitness'
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

const class3study = [.6769, .2261, .1916, 1.2738, 1.4716, .7413, .4944, 2.1622, 1.4461, 1.6252, .4097, .3811, .9183, .7019, .5936, 0];
const class3lecture = [2.3666, 1.25, 1.5, 2.5, 1.25, 2.5, 2.5, 2.5, 2.7686, 0, 1.25, 1.25, 2.5677, 0, 2.5213, 0];
const class3total = [3.0436, 1.4761, 1.6916, 3.7738, 2.7216, 3.2413, 2.9944, 4.6622, 4.2147, 1.6252, 1.6597, 1.6311, 3.4861, .7019, 3.115, 0];
const class3sum = [13.3144, 26.7244];

const class4study = [.3147, .545, 2.9258, 1.5555, 0, 0, 0, 1.5772, 0, 0, 0, 1.3972, 1.4519, 0, 0, 9.3941];
const class4lecture = [2.5, 1.25, 0, 2.5, 2.5, 2.8744, 2.5, 2.25, 1.25, 0, 0, 3.2194, 2.9466, 2.5, 2.7216, 0];
const class4total = [2.8147, 1.795, 2.9258, 4.0555, 2.5, 2.8744, 2.5, 3.8272, 1.25, 0, 0, 4.4616, 4.3986, 2.5, 2.7216, 9.3941];
const class4sum = [19.1616, 29.0122];

const workweeks = [28.3756, 26.5633, 25.0639, 19.2975, 24.2806, 20.1972, 27.7936, 17.5242, 26.9156, 23.0450, 31.4600, 15.2533, 27.7017, 22.6194, 19.7542, 16.1192];
const worktotal = [371.9642];

const gymweeks = [1.8344, 1.6792, 1.9414, 1.7872, 2.0853, 1.0917, .9472, 5.6039, 2.7972, 4.2633, 2.2386, 2.8914, 2.0625, 1.6261, 4.4681, 1.4567];
const gymtotal = [38.7742];

const allData = {
  labels: labels,
  datasets: [
    {
      label: CLASSES.class1,
      data: class1total,
      backgroundColor: CHART_COLORS.orangeL,
      borderColor: CHART_COLORS.orange,
      borderWidth: 1
    },
    {
      label: CLASSES.class2,
      data: class2total,
      backgroundColor: CHART_COLORS.greenL,
      borderColor: CHART_COLORS.green,
      borderWidth: 1
    },
    {
      label: CLASSES.class3,
      data: class3total,
      backgroundColor: CHART_COLORS.redL,
      borderColor: CHART_COLORS.red,
      borderWidth: 1
    },
    {
      label: CLASSES.class4,
      data: class4total,
      backgroundColor: CHART_COLORS.purpleL,
      borderColor: CHART_COLORS.purple,
      borderWidth: 1
    },
    {
      label: CLASSES.class5,
      data: workweeks,
      backgroundColor: CHART_COLORS.yellowL,
      borderColor: CHART_COLORS.yellow,
      borderWidth: 1
    },
    {
      label: CLASSES.class6,
      data: gymweeks,
      backgroundColor: CHART_COLORS.blueL,
      borderColor: CHART_COLORS.blue,
      borderWidth: 1
    }
  ]
};

const class1BarData = {
  labels: labels,
  datasets: [
    {
      label: "Study",
      data: class1study,
      backgroundColor: CHART_COLORS.orangeL,
      borderColor: CHART_COLORS.orange,
      borderWidth: 1
    },
    {
      label: "Lecture",
      data: class1lecture,
      backgroundColor: CHART_COLORS.greenL,
      borderColor: CHART_COLORS.green,
      borderWidth: 1
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
      backgroundColor: [CHART_COLORS.orangeL, CHART_COLORS.greenL],
      borderColor: [CHART_COLORS.orange, CHART_COLORS.green]
    }
  ]
};

const class2BarData = {
  labels: labels,
  datasets: [
    {
      label: "Study",
      data: class2study,
      backgroundColor: CHART_COLORS.orangeL,
      borderColor: CHART_COLORS.orange,
      borderWidth: 1
    },
    {
      label: "Lecture",
      data: class2lecture,
      backgroundColor: CHART_COLORS.greenL,
      borderColor: CHART_COLORS.green,
      borderWidth: 1
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
      backgroundColor: [CHART_COLORS.orangeL, CHART_COLORS.greenL],
      borderColor: [CHART_COLORS.orange, CHART_COLORS.green]
    }
  ]
};

const class3BarData = {
  labels: labels,
  datasets: [
    {
      label: "Study",
      data: class3study,
      backgroundColor: CHART_COLORS.orangeL,
      borderColor: CHART_COLORS.orange,
      borderWidth: 1
    },
    {
      label: "Lecture",
      data: class3lecture,
      backgroundColor: CHART_COLORS.greenL,
      borderColor: CHART_COLORS.green,
      borderWidth: 1
    }
  ]
};

const class3PieData = {
  labels: [
    'Study',
    'Lecture'
  ],
  datasets: [
    {
      data: class3sum,
      backgroundColor: [CHART_COLORS.orangeL, CHART_COLORS.greenL],
      borderColor: [CHART_COLORS.orange, CHART_COLORS.green]
    }
  ]
};

const class4BarData = {
  labels: labels,
  datasets: [
    {
      label: "Study",
      data: class4study,
      backgroundColor: CHART_COLORS.orangeL,
      borderColor: CHART_COLORS.orange,
      borderWidth: 1
    },
    {
      label: "Lecture",
      data: class4lecture,
      backgroundColor: CHART_COLORS.greenL,
      borderColor: CHART_COLORS.green,
      borderWidth: 1
    }
  ]
};

const class4PieData = {
  labels: [
    'Study',
    'Lecture'
  ],
  datasets: [
    {
      data: class4sum,
      backgroundColor: [CHART_COLORS.orangeL, CHART_COLORS.greenL],
      borderColor: [CHART_COLORS.orange, CHART_COLORS.green]
    }
  ]
};
