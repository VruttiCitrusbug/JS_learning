keys = Object.keys(localStorage)
console.log(keys)
htmlcontent = () =>{
  html = ""
  for (let i = 0; i < keys.length; i++) {
    let data = JSON.parse(localStorage.getItem(keys[i]));
    html += `<div class="row draggable-row" data-row-index="`+ i +`" draggable="true"><div class="col">`+data['fname']+`</div><div class="col">`+data['sname']+`</div><div class="col">`+data['email']+`</div><div class="col">`+data['gender']+`</div><div class="col">`+data['phno']+`</div><div class="col">`+data['language']+`</div><div class="col">`+data['date']+`</div><div class="col">`+data['database']+`</div><div class="col"><button onclick="update1(`+"'"+keys[i]+"'"+`)" type="button" class="btn btn-primary">update</button>
    <button type="button" onclick="delete1(`+"'"+keys[i]+"'"+`)" class="btn btn-secondary">Delete</button><input type="checkbox" oninput="allow_update()" value="`+ keys[i] +`"></div></div>`
  }
  return html
}
function allow_update(){
  btn = document.getElementById("allow_update");
    if(document.querySelectorAll("input[type=checkbox]:checked").length > 1){
      btn.disabled = false;
    }
    else{
      btn.disabled = true;
    }
}
function update_all(){
  strlan = ""
  document.querySelectorAll("input[type=checkbox]:checked").forEach(element => {
      strlan+=element.value+","
              });
      window.location.href="update_all.html?"+strlan.replace(/,\s*$/, "")
}

document.getElementById("append").innerHTML = htmlcontent()
function delete1(val){
  localStorage.removeItem(val);
  window.location.reload();
}
const key = 'email'; 
const value = localStorage.getItem(key); 

if (value != null) {
  const parsedValue = JSON.parse(value); 
} else {
  console.log('Value not found in localStorage.');
}
function update1(value){
  window.location.href = "update.html?"+value
}
const draggableRows = document.querySelectorAll('.draggable-row');

draggableRows.forEach(row => {
  row.addEventListener('dragstart', dragStart);
  row.addEventListener('dragover', dragOver);
  row.addEventListener('dragenter', dragEnter);
  row.addEventListener('dragleave', dragLeave);
  row.addEventListener('drop', drop);
  row.addEventListener('dragend', dragEnd);
});

let draggedRow = null;

function dragStart(eve) {
  draggedRow = this;
  eve.dataTransfever.effectAllowed = 'move';
  eve.dataTransfer.setData('text/html', this.outerHTML);
  this.classList.add('dragging');
}

function dragOver(eve) {
    eve.preventDefault();
    eve.dataTransfer.dropEffect = 'move';
}

function dragEnter(e) {
  if (this !== draggedRow) {
    this.classList.add('dragover');
  }
}

function dragLeave() {
  this.classList.remove('dragover');
}

function drop(e) {
  e.preventDefault();
  if (this !== draggedRow) {
    this.parentNode.insertBefore(draggedRow, this.nextSibling);
    this.classList.remove('dragover');
  }
}
function dragEnd() {
  draggedRow = null;
  const rows = Array.from(draggableRows);
  rows.forEach((row, index) => {
    row.dataset.rowIndex = index;
  });
}
function sortRows() {
  const rows = Array.from(draggableRows);
  const sortedRows = rows.sort((a, b) => {
    const rowIndexA = parseInt(a.dataset.rowIndex);
    const rowIndexB = parseInt(b.dataset.rowIndex);
    return rowIndexA - rowIndexB;
  });
  const appendDiv = document.getElementById('append');
  sortedRows.forEach(row => {
    appendDiv.appendChild(row);
  });
}
document.addEventListener('DOMContentLoaded', sortRows);