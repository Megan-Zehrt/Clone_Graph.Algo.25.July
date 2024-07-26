// 133. Clone Graph



// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.





/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {

    if (!node) return null;

    let table = new Map();

    function dfs(node) {
        if (table.has(node)) {
            return table.get(node);
        }

        let clonedNode = new _Node(node.val);
        table.set(node, clonedNode);

        for (let neighbor of node.neighbors) {
            clonedNode.neighbors.push(dfs(neighbor));
        }

        return clonedNode;
    }

    return dfs(node);
};
