if (process.client && process.env.NODE_ENV === 'production') {
  window.doorbellOptions = {
    appKey: 'akmfqdy1fBgL1corAEydarDdZdwk4P55B94bk8vMbIvnXUTD7mxxYsXKrHeY96fG'
  };
  (function(w, d, t) {
    var hasLoaded = false
    function l() { if (hasLoaded) { return } hasLoaded = true; window.doorbellOptions.windowLoaded = true; var g = d.createElement(t); g.id = 'doorbellScript'; g.type = 'text/javascript'; g.async = true; g.src = 'https://embed.doorbell.io/button/5155?t=' + (new Date().getTime()); (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(g) }
    if (w.attachEvent) { w.attachEvent('onload', l) } else if (w.addEventListener) { w.addEventListener('load', l, false) } else { l() }
    if (d.readyState === 'complete') { l() }
  }(window, document, 'script'))
}
