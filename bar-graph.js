(function ($) {
  "use strict";
  $(function () {
    if ($("#sales-chart").length) {
      var SalesChartCanvas = $("#sales-chart").get(0).getContext("2d");
      var SalesChart = new Chart(SalesChartCanvas, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Total Days",
              data: [480, 230, 470, 210, 330],
              backgroundColor: "#B4AEE8",
            },
            {
              label: "Shift",
              data: [400, 340, 550, 480, 170],
              backgroundColor: "#283975",
            },
          ],
        },
        options: {
          cornerRadius: 5,
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0,
            },
          },
          scales: {
            yAxes: [
              {
                display: true,
                gridLines: {
                  display: true,
                  drawBorder: false,
                  color: "#F2F2F2",
                },
                ticks: {
                  display: true,
                  min: 0,
                  max: 560,
                  callback: function (value, index, values) {
                    return value + "";
                  },
                  autoSkip: true,
                  maxTicksLimit: 10,
                  fontColor: "#6C7383",
                },
              },
            ],
            xAxes: [
              {
                stacked: false,
                ticks: {
                  beginAtZero: true,
                  fontColor: "#6C7383",
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  display: false,
                },
                barPercentage: 1,
              },
            ],
          },
          legend: {
            display: false,
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        },
      });
      document.getElementById(
        "sales-legend"
      ).innerHTML = SalesChart.generateLegend();
    }
  });
})(jQuery);
