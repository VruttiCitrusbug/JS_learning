let formData = [];
let currentIndex = 0;
keys = window.location.href.split('?')[1]
keys = keys.split(',')
for(i=0;i<keys.length;i++){
    formData[i] = JSON.parse(localStorage.getItem(keys[i]));
}
function updateFormFields() {
    const data = formData[currentIndex];
    document.getElementById('name').value = data['fname'];
    document.getElementById('surname').value = data['sname'];
    document.getElementById('email').value = data['email'];
    document.getElementById('phno').value = data['phno'];
    document.getElementById('date').value = data['date'];
    document.querySelectorAll('option').forEach(element =>{
        if(data['database'].includes(element.value)){
            element.selected = true
        }
        else{
            element.selected = false
        }
    });
    gender = document.querySelectorAll('input[name="gender"]');
    language = document.querySelectorAll('input[type="checkbox"]');
    gender.forEach(element => {
        if (element.value == data['gender']){
            element.checked = true
    }
    });
    language.forEach(element => {
        if (data['language'].includes(element.value)){
            element.checked = true
        }
        else{
            element.checked = false
        }
    });
}

document.getElementById('next').addEventListener('click', () => {
  if (currentIndex < formData.length - 1 && valid(currentIndex)) {
    currentIndex++;
    updateFormFields();
    if (currentIndex == formData.length-1){
        document.getElementById('index').classList.remove('d-none')
        document.getElementById('next').classList.add('d-none')
    }
  }
});

document.getElementById('pre').addEventListener('click', () => {
    document.getElementById('index').classList.add('d-none')
    document.getElementById('next').classList.remove('d-none')
    console.log(valid(currentIndex))
  if (currentIndex > 0 && valid(currentIndex)) {
    currentIndex--;
    updateFormFields();
  }
});
updateFormFields();
function index1(){
    console.log(valid())
    if(valid()){
        window.location.href = "index.html"
    }
}
function valid(currentIndex){
    valid1 = validphno();
    valid2 = validgender();
    valid3 = validemail();
    valid4 = validsurname();
    valid5 = validname();
    valid6 = validlanguage();
    valid7 = validdate();
    valid8 = validdatabase();
    bool = valid1 && valid2 && valid3 && valid4 && valid5 && valid6 && valid7 && valid8
    if(bool)
    {       
            strlan = ""
            document.querySelectorAll("input[type=checkbox]:checked").forEach(element => {
                strlan+=element.value+","
                        });
            key = document.getElementById('email').value
            value = {
            fname:document.getElementById('name').value,
            sname:document.getElementById('surname').value,
            email: document.getElementById('email').value,
            gender : document.querySelector('input[name="gender"]:checked')?.value,
            phno: document.getElementById('phno').value,
            language: strlan.replace(/,\s*$/, ""),
            date: document.getElementById('date').value,
            database: validdatabase().join(',')
            }
            if(localStorage.getItem(key) != null)
            {
                localStorage.removeItem(key);
                localStorage.setItem(key, JSON.stringify(value));
                formData[currentIndex] = JSON.parse(localStorage.getItem(key));
            }
            console.log(formData[currentIndex]);
            return true;
    }
    else{
        return false;
    }
}