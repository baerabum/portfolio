(function () {
  document.documentElement.classList.add("js");

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Close" : "Menu";
  }
  btn.addEventListener("click", function () {
    setMenu(!document.body.classList.contains("menu-open"));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });

  // Reveal on scroll
  var items = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Active nav state
  var map = { about: "about", works: "works", details: "works", contact: "contact" };
  var links = {};
  nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var key = map[en.target.id];
        Object.keys(links).forEach(function (k) { links[k].classList.toggle("is-active", k === key); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["about", "works", "details", "contact"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) so.observe(el);
    });
  }
})();
