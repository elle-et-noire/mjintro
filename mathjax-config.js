window.MathJax = {
  loader: {load: ['[tex]/physics', '[tex]/mathtools', '[tex]/color']},
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    packages: { '[+]': ['physics', 'mathtools', 'color'] },
    color: {
      padding: '5px',
      borderWidth: '2px',
    },
    macros: {
      ds: "\\displaystyle",
      C: '{\\mathbb C}',
      R: '{\\mathbb R}',
      Q: '{\\mathbb Q}',
      Z: '{\\mathbb Z}',
      bm: ['\\boldsymbol{#1}', 1],
    },
    tags: 'ams',
    processRefs: true,
  },
  svg: {
    fontCache: 'global'
  },
  chtml: {
    displayAlign: 'left', /* 数式を左寄せにする */
    displayIndent: '2em',
    mtextInheritFont: true, /* 数式中の \text{} を本文と同じフォントにする */
  },
  startup: {
    ready: () => {
      console.log('MathJax is loaded, but not yet initialized');
      MathJax.startup.defaultReady();
      console.log('MathJax is initialized, and the initial typeset is queued');
      MathJax.startup.promise.then(() => {
        console.log('MathJax initial typesetting complete');
      });
    }
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/latest?tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
