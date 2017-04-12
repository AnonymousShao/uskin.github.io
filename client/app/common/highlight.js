import hljs from 'highlight.js';

function highlight() {
  const snippets = document.getElementsByTagName('pre');
  for (let i = 0; i < snippets.length; i++) {
      hljs.highlightBlock(snippets[i]);
  }
}

export default highlight;
