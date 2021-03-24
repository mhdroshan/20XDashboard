!(function (a) {
  var e;
  (e = {
    init: function (i, s) {
      a(i[0]).find(".simple-bar-graph").length
        ? (a.each(a(i[0]).find(".simple-bar-graph__bar"), function (e) {
            a(this).css({ height: "0%" });
          }),
          setTimeout(function () {
            e.render(i, s);
          }, a(i[0]).find(".simple-bar-graph__bar").length * s.delayAnimation +
            100))
        : e.render(i, s);
    },
    render: function (i, s) {
      var t, r, n, p, l, o, h;
      (p = e.getMaxValue(s.data)),
        (r = (100 / s.data.length).toFixed(3).slice(0, -1) + "%"),
        (h = (100 / s.rowsCount).toFixed(3).slice(0, -1) + "%"),
        (l = p / s.rowsCount),
        (o = e.getRows(s.rowsCount, h, l, p)),
        (t = e.getColumns(
          s.rowCaptionsWidth,
          s.height,
          s.data,
          p,
          r,
          s.barsColor,
          s.popups,
          s.delayAnimation
        )),
        (n = a("<div/>", { class: "simple-bar-graph" })),
        n.append(o),
        n.append(t),
        a(i[0]).html(n),
        a.each(a(i[0]).find(".simple-bar-graph__bar"), function () {
          a(this).height(a(this).data("height"));
        });
    },
    getMaxValue: function (e) {
      var i;
      return (
        (i = 0),
        a.each(e, function (a, e) {
          e.value > i && (i = e.value);
        }),
        i
      );
    },
    bindBar: function (e) {
      e.hover(
        function () {
          a(this).addClass("simple-bar-graph__bar--active");
        },
        function () {
          a(this).removeClass("simple-bar-graph__bar--active");
        }
      );
    },
    getRows: function (e, i, s, t) {
      var r, n, p;
      for (
        p = e - 1,
          n = a("<div/>", { class: "simple-bar-graph__rows" }).append(
            a("<div/>", {
              class: "simple-bar-graph__row",
              css: { height: i },
            }).append(
              a("<div/>", { class: "simple-bar-graph__value", text: t })
            )
          );
        p > 0;

      )
        (r = parseInt(s * p * 10) / 10),
          n.append(
            a("<div/>", {
              class: "simple-bar-graph__row",
              css: { height: i },
            }).append(
              a("<div/>", {
                class: "simple-bar-graph__value",
                text: r.toString(),
              })
            )
          ),
          p--;
      return (
        n.append(
          a("<div/>", { class: "simple-bar-graph__null" }).append(
            a("<div/>", { class: "simple-bar-graph__value", text: 0 })
          )
        ),
        n
      );
    },
    getColumns: function (i, s, t, r, n, p, l, o) {
      var h, d, c, g, u;
      for (
        u = 0,
          g = a("<div/>", {
            class: "simple-bar-graph__columns",
            css: { "padding-right": i, height: s },
          });
        u < t.length;

      )
        (c = ((t[u].value / r) * 100).toFixed(3).slice(0, -1) + "%"),
          (d = a("<div/>", {
            class: "simple-bar-graph__column",
            css: { width: n },
          })),
          (h = a("<div/>", {
            class: "simple-bar-graph__bar",
            css: {
              height: "0%",
              "-webkit-transition-delay": u * o + "ms",
              "-moz-transition-delay": u * o + "ms",
              "transition-delay": u * o + "ms",
            },
            "data-height": c,
          })),
          p && h.css("background-color", p),
          l &&
            h.append(
              a("<div/>", {
                class: "simple-bar-graph__popup",
                text: t[u].value,
              })
            ),
          e.bindBar(h),
          d.append(h),
          d.append(
            a("<div/>", { class: "simple-bar-graph__caption", text: t[u].key })
          ),
          g.append(d),
          u++;
      return g;
    },
  }),
    (jQuery.fn.simpleBarGraph = function (i) {
      (i = a.extend(
        {
          data: [],
          rowsCount: 5,
          height: "300px",
          rowCaptionsWidth: "16px",
          barsColor: "",
          popups: !0,
          delayAnimation: 20,
        },
        i
      )),
        e.init(this, i);
    });
})(jQuery);
