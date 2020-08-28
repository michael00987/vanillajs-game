let table = document.getElementById('table');
let data = [];

function initialize() {
  let fragment = document.createDocumentFragment();
  [1, 2, 3, 4].forEach(function () {
    let rowData = [];
    data.push(rowData);
    let tr = document.createElement('tr');
    [1, 2, 3, 4].forEach(function () {
      rowData.push(0);
      let td = document.createElement('td');
      tr.appendChild(td);
    });
    fragment.appendChild(tr);
  });
  table.appendChild(fragment);
}

function randomGenerate() {
  let emptyCellArray = [];
  data.forEach(function (rowData, i) {
    rowData.forEach(function (colData, j) {
      if (!colData) {
        emptyCellArray.push([i, j]);
      }
    });
  });
  let randomCell =
    emptyCellArray[Math.floor(Math.random() * emptyCellArray.length)];
  data[randomCell[0]][randomCell[1]] = 2;
  draw();
}

function draw() {
  data.forEach(function (rowData, i) {
    rowData.forEach(function (colData, j) {
      if (colData > 0) {
        table.children[i].children[j].textContent = colData;
      } else {
        table.children[i].children[j].textContent = '';
      }
    });
  });
}

initialize();
randomGenerate();
draw();
