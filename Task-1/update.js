key=window.location.href.split('?')[1]
data = JSON.parse(localStorage.getItem(key));

document.getElementById('name').value = data['fname'];
document.getElementById('surname').value = data['sname'];
document.getElementById('email').value = data['email'];
document.getElementById('phno').value = data['phno'];
document.getElementById('date').value = data['date'];
document.querySelectorAll('option').forEach(element =>{
    if(data['database'].includes(element.value)){
        element.selected = true
    }
});
gender = document.querySelectorAll('input[name="gender"]');
language = document.querySelectorAll('input[type="checkbox"]');
gender.forEach(element => {
    if (element.value == data['gender']){
        element.checked = true
    }
    else{
        element.selected = false
    }
});
language.forEach(element => {
    if (data['language'].includes(element.value)){
        element.checked = true
    }
});