Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    var fontSize = 12;
                    var fontStyle = 'normal';
                    var fontFamily = 'Arial';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    var dataString = dataset.data[index].toString();

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    var padding = 5;
                    var position = element.tooltipPosition();
                });
            }
        });
    }
});
Chart.defaults.global.defaultFontSize=30,
Chart.defaults.global.defaultFontFamily="Tahoma",
Chart.defaults.global.defaultFontStyle="bold",
Chart.defaults.global.defaultFontColor="black",  
  
$('#chart').on('inview', function(event, isInView) {
if (isInView) {
var ctx=document.getElementById("chart");
var chart=new Chart(ctx,{
type:'horizontalBar',
data:{
  labels:["HP","ATK","DEF",],
  datasets: [
        {
          label: 'status',
          data: [32, 82, 14,],
          backgroundColor: "#black"
        }
      ]

},
options:{ 
  legend:{  
    display: false
  },
  maintainAspectRatio: false,
tooltips:{
  enabled: false,
  },
  title:{
    display: false,
  },
  scales:{
    xAxes:[
      {
        display: false,
        scaleLabel:{
          display: false,
        },
        ticks:{
          beginAtZero:true,
          suggestedMax: 100,
          suggestedMin: 0,
          stepSize: 10,
          callback: function(value){
            return  value     
        }
      }
      }
    ],
    yAxes:[
      {
        gridLines:{
          display: false,
          drawBorder: false,
        },
        categoryPercentage: 0.45,
      }
    ]
  }
}
});       
}
});

Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    var fontSize = 12;
                    var fontStyle = 'normal';
                    var fontFamily = 'Arial';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    var dataString = dataset.data[index].toString();

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    var padding = 5;
                    var position = element.tooltipPosition();
                });
            }
        });
    }
});
Chart.defaults.global.defaultFontSize=30,
Chart.defaults.global.defaultFontFamily="Tahoma",
Chart.defaults.global.defaultFontStyle="bold",
Chart.defaults.global.defaultFontColor="black",  
  
$('#chart2').on('inview', function(event, isInView) {
if (isInView) {
var ctx=document.getElementById("chart2");
var chart=new Chart(ctx,{
type:'horizontalBar',
data:{
  labels:["HP","ATK","DEF",],
  datasets: [
        {
          label: 'status',
          data: [60, 77, 62,],
          backgroundColor: "#black"
        }
      ]

},
options:{ 
  legend:{  
    display: false
  },
  maintainAspectRatio: false,
tooltips:{
  enabled: false,
  },
  title:{
    display: false,
  },
  scales:{
    xAxes:[
      {
        display: false,
        scaleLabel:{
          display: false,
        },
        ticks:{
          beginAtZero:true,
          suggestedMax: 100,
          suggestedMin: 0,
          stepSize: 10,
          callback: function(value){
            return  value     
        }
      }
      }
    ],
    yAxes:[
      {
        gridLines:{
          display: false,
          drawBorder: false,
        },
        categoryPercentage: 0.45,
      }
    ]
  }
}
});       
}
});

Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    var fontSize = 12;
                    var fontStyle = 'normal';
                    var fontFamily = 'Arial';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    var dataString = dataset.data[index].toString();

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    var padding = 5;
                    var position = element.tooltipPosition();
                });
            }
        });
    }
});
Chart.defaults.global.defaultFontSize=30,
Chart.defaults.global.defaultFontFamily="Tahoma",
Chart.defaults.global.defaultFontStyle="bold",
Chart.defaults.global.defaultFontColor="black",  
  
$('#chart3').on('inview', function(event, isInView) {
if (isInView) {
var ctx=document.getElementById("chart3");
var chart=new Chart(ctx,{
type:'horizontalBar',
data:{
  labels:["HP","ATK","DEF",],
  datasets: [
        {
          label: 'status',
          data: [13, 97, 83,],
          backgroundColor: "#black"
        }
      ]

},
options:{ 
  legend:{  
    display: false
  },
  maintainAspectRatio: false,
tooltips:{
  enabled: false,
  },
  title:{
    display: false,
  },
  scales:{
    xAxes:[
      {
        display: false,
        scaleLabel:{
          display: false,
        },
        ticks:{
          beginAtZero:true,
          suggestedMax: 100,
          suggestedMin: 0,
          stepSize: 10,
          callback: function(value){
            return  value     
        }
      }
      }
    ],
    yAxes:[
      {
        gridLines:{
          display: false,
          drawBorder: false,
        },
        categoryPercentage: 0.45,
      }
    ]
  }
}
});       
}
});