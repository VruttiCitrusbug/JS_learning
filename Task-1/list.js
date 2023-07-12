keys = Object.keys(localStorage)
htmlcontent = () =>{
  html = ""
  for (let i = 0; i < keys.length; i++) {
    let data = JSON.parse(localStorage.getItem(keys[i]));
    html += `<div class="row"><div class="col">`+data['fname']+`</div><div class="col">`+data['sname']+`</div><div class="col">`+data['email']+`</div><div class="col">`+data['gender']+`</div><div class="col">`+data['phno']+`</div><div class="col">`+data['language']+`</div><div class="col"><button onclick="update1(`+"'"+keys[i]+"'"+`)" type="button" class="btn btn-primary">update</button>
    <button type="button" onclick="delete1(`+"'"+keys[i]+"'"+`)" class="btn btn-secondary">Delete</button></div></div>`
  }
  return html
}

document.getElementById("append").innerHTML = htmlcontent()
function delete1(val){
  localStorage.removeItem(val);
  window.location.reload();
}
const key = 'email'; // specify the key of the value you want to fetch
const value = localStorage.getItem(key); // retrieve the value from localStorage

if (value != null) {
  const parsedValue = JSON.parse(value); // parse the value from string to object
} else {
  console.log('Value not found in localStorage.');
}
function update1(value){
  window.location.href = "http://127.0.0.1:5500/update.html?"+value
}