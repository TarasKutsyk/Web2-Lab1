function depthTraversal(graph, currentVertex = 0)
{
  const n = graph.length;

  graph[currentVertex][currentVertex] = 1;
  console.log(`${currentVertex + 1} `);

  for (let i = 0; i < n; i++)
  {
    if (graph[currentVertex][i] === 1 && graph[i][i] !== 1)
    {
      depthTraversal(graph, i);
    }
  }
}

const graph = [ //граф заданий матрицею суміжності
  [0, 1, 0, 0, 0, 0, 0, 1, 0], //1
  [1, 0, 1, 0, 0, 0, 0, 1, 0], //2
  [0, 1, 0, 1, 0, 0, 0, 1, 0], //3
  [0, 0, 1, 0, 0, 0, 1, 0, 1], //4
  [0, 0, 0, 0, 0, 1, 1, 0, 0], //5
  [0, 0, 0, 0, 1, 0, 0, 0, 0], //6
  [0, 0, 0, 1, 1, 0, 0, 1, 0], //7
  [1, 1, 1, 0, 0, 0, 1, 0, 0], //8
  [0, 0, 0, 1, 0, 0, 0, 0, 0], //9
];

depthTraversal(graph);
