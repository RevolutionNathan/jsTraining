let testData = [
    [ '1' ],
    [ '0', '2', '4' ],
    [ '1', '3' ],
    [ '2', '4' ],
    [ '1', '3' ]
  ];

let testData2 = [ 
  [], 
  [ '2' ], 
  [ '1', '3' ], 
  [ '2' ] 
];
  
  //[]

// const isCycle = (V, adj) => {
//   let verticies = {};
//   let visited = [];

//   function build () {
//     for (let i = 0; i < adj.length; i++) {
//       verticies[i] = {name: i};
//     }
//     for (let j = 0; j < adj.length; j++) {
//       for (let k = 0; k < adj[j].length; k++) {
//         next = parseInt(adj[j][k]);
//         verticies[j][next] = verticies[next];
//       }
//     }
//   }

//   build(); 
//   console.log('pause');
//   // for (let l = 0; l < verticies.length; l++) {
//   //   verticies[l];
    
//   // }
//   // function traverse(vertex) {
//   //   if (visited.findIndex(vertex.find(vert => vert == vertex.name))) {
//   //     return 0;
//   //   }
//   //   visited.push(vertex.name);

//   // }
// }

const isCycle = (V, adj) => {
  let verticies = [];
  let visited = [];

  function build () {
    for (let i = 0; i < adj.length; i++) {
      verticies.push({
          name: i,
          edges: [...adj[i]]
        });
    }
  }

  build(); 

  let retval = 0;
  
  function traverse(vertex) {
    if (visited.find(vert => vert == vertex.name)) {
      //console.log('visited');
      retval = 1;
      return;
    }
    visited.push(vertex.name);
    for (let index = 0; index < vertex.edges.length; index++) {
      let temp = parseInt(vertex.edges[index]);
      traverse(verticies[temp]);
    } 
  }

  for (let l = 0; l < verticies.length; l++) {
    traverse(verticies[l]);
  }
  return retval;
}


console.log(isCycle(5, testData2));
