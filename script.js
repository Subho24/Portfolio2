
const ctx = document.getElementById('mySkill');

const barColors = ['#e44d27', '#2face0', '#f7e017']

new Chart(ctx, {
    type: "bar",
    data: {
        datasets: [{
            data:[50, 30, 20, 100, 0],
            backgroundColor: barColors
        }],
        labels: ['Html', 'Css', 'Javascript']
    },
    options: {
      legend: {display: false},
      title: {display: false}
    }
  });