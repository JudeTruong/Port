(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };

  let d = C.document;

  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;

      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }

      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };

        const namespace = ar[1];
        api.q = api.q || [];

        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else {
          p(cal, ar);
        }

        return;
      }

      p(cal, ar);
    };
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", "15min", {
  origin: "https://app.cal.com",
});

Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;

Cal.ns["15min"]("inline", {
  elementOrSelector: "#my-cal-inline-15min",
  config: {
    layout: "month_view",
    useSlotsViewOnSmallScreen: true,
  },
  calLink: "port-consulting/15min",
});

Cal.ns["15min"]("ui", {
  hideEventTypeDetails: false,
  layout: "month_view",
});

const revealElements = document.querySelectorAll(
  ".hero, .section, .card, .timeline"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});