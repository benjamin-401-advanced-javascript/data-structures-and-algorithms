'use strict';

function treeUnionAndIntersect(root1, root2) {
  let unionSet = new Set();
  let intersectSet = new Set();

  getAllTreeValues(root1, unionSet);
  compare(root2, unionSet, intersectSet);

  return { unionSet, intersectSet };
}

function getAllTreeValues(root, unionSet) {
  if (!root) { return; } // base case

  if (unionSet.has(root.value)) {
    return;
  } else {
    unionSet.add(root.value);
  }

  getAllTreeValues(root.left, unionSet);
  getAllTreeValues(root.right, unionSet);

}

function compare(root, unionSet, intersectSet) {
  if (!root) { return; } // base case

  if (!unionSet.has(root.value)) {
    unionSet.add(root.value);

  } else if (!intersectSet.has(root.value)) {
    intersectSet.add(root.value);
  }

  compare(root.left, unionSet, intersectSet);
  compare(root.right, unionSet, intersectSet);
}

module.exports = treeUnionAndIntersect;