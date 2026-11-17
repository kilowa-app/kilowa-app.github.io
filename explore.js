// Pfeile neben den Pillen: vorherige bzw. nächste Ansicht. Ohne JavaScript gehen die Pillen trotzdem.
document.querySelectorAll("[data-explore]").forEach(function (g) {
  var rs = Array.prototype.filter.call(g.children, function (n) { return n.type === "radio"; });
  g.querySelectorAll("[data-step]").forEach(function (b) {
    b.addEventListener("click", function () {
      var i = rs.findIndex(function (r) { return r.checked; });
      var j = Math.min(rs.length - 1, Math.max(0, i + Number(b.getAttribute("data-step"))));
      rs[j].checked = true;
    });
  });
});
