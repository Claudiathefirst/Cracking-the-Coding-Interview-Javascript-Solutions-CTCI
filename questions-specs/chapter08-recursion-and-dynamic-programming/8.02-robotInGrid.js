'use strict';


const maze = [
  [true, true, true, false], // 0
  [false, true, true, false], // 1
  [true, false, true, false], // 2
  [true, true, true, false], // 3
  [false, true, true, true], // 4
  [true, false, false, true] // 5
];
console.log(getPathForRobot(maze));
