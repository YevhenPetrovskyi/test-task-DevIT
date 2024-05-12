const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');
p.appendChild(span);
div.appendChild(p);

function nodeChildCount(node, deep = Infinity) {
  let count = 0;

  function countChildren(node, currentDepth) {
    if (currentDepth <= deep) {
      count += node.childNodes.length;
      for (let i = 0; i < node.childNodes.length; i++) {
        countChildren(node.childNodes[i], currentDepth + 1);
      }
    }
  }

  countChildren(node, 1);
  return count;
}

nodeChildCount(div); // 2
nodeChildCount(div, 1); // 1
nodeChildCount(div, 2); // 2
