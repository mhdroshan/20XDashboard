$(document).ready(function () {
  var calendar = $("#calendar").fullCalendar({
    themeSystem: "bootstrap4",
    editable: true,
    height: 650,
    showNonCurrentDates: false,
    header: {
      left: "prev,next ", //today button hide manually by designer
      center: "title",
      right: "month,agendaWeek,agendaDay",
    },

    events: [
      {
        id: "a",
        title: "event A",
        start: "2021-4-05",
        icon: "car",
      },
      {
        id: "b",
        title: " event B",
        start: "2021-4-05",
      },
      {
        id: "c",
        title: " event C",
        start: "2021-4-20",
        backgroundColor: "#fb6b84",
        borderColor: "#bb0707",
        icon: "bell",
        // border: "2px solid green",
      },
      {
        id: "d",
        title: " event D",
        start: "2021-4-10",
        end: " 2021-4-11",
      },
    ],
    eventRender: function (event, element) {
      if (event.icon) {
        element
          .find(".fc-title")
          .append("<i class='fa fa-" + event.icon + "'></i>");
      }
    },
    // events: "load.php",
    selectable: true,
    selectHelper: true,

    select: function (start, end, allDay) {
      var title = prompt("Enter Event Title");
      if (title) {
        var start = $.fullCalendar.formatDate(start, "Y-MM-DD HH:mm:ss");
        var end = $.fullCalendar.formatDate(end, "Y-MM-DD HH:mm:ss");
        $.ajax({
          // url: "insert.php",
          type: "POST",
          data: { title: title, start: start, end: end },
          success: function () {
            calendar.fullCalendar("refetchEvents");
            alert("Added Successfully");
          },
        });
      }
    },
    editable: true,
    eventResize: function (event) {
      var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
      var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
      var title = event.title;
      var id = event.id;
      $.ajax({
        // url: "update.php",
        type: "POST",
        data: { title: title, start: start, end: end, id: id },
        success: function () {
          calendar.fullCalendar("refetchEvents");
          alert("Event Update");
        },
      });
    },

    eventDrop: function (event) {
      var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
      var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
      var title = event.title;
      var id = event.id;
      $.ajax({
        // url: "update.php",
        type: "POST",
        data: { title: title, start: start, end: end, id: id },
        success: function () {
          calendar.fullCalendar("refetchEvents");
          alert("Event Updated");
        },
      });
    },

    eventClick: function (event) {
      if (confirm("Are you sure you want to remove it?")) {
        var id = event.id;
        $.ajax({
          // url: "delete.php",
          type: "POST",
          data: { id: id },
          success: function () {
            calendar.fullCalendar("refetchEvents");
            alert("Event Removed");
          },
        });
      }
    },
  });
});
