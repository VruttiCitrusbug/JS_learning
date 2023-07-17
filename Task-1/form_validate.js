function validname(){
    var pattern = /^[a-zA-Z]*$/;
    var fname=document.getElementById('name').value;
    var nameerr=document.getElementById('nameerr');
    if(fname=='')
    {
        nameerr.innerHTML = "Fillout this field"
        nameerr.classList.remove("d-none")
        return false;
    }

    else if(pattern.test(fname)==false)
    { 
        nameerr.textContent = "only alphabelts allowed"
        nameerr.classList.remove("d-none")
        return false;
    }
    else
    {
        nameerr.classList.add("d-none")
        return true;
    }
}
function validdate(){
    var date=document.getElementById('date').value;
    var dateerr=document.getElementById('dateerr');
    if(date=='')
    {
        dateerr.innerHTML = "select the date"
        dateerr.classList.remove("d-none")
        return false;
    }
    else
    {
        dateerr.classList.add("d-none")
        return true;
    }
}
function validsurname(){
var pattern = /^[a-zA-Z]*$/;
var fname=document.getElementById('surname').value;
var nameerr=document.getElementById('surnameerr');
if(fname=='')
{
    nameerr.textContent = "Fillout this field"
    nameerr.classList.remove("d-none")
    return false;
}

else if(pattern.test(fname)==false)
{ 
    nameerr.textContent = "only alphabelts allowed"
    nameerr.classList.remove("d-none")
    return false;
}
else
{
    nameerr.classList.add("d-none")
    return true;
}
}
function validemail(){

    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email= document.getElementById('email').value;
    var emailerr= document.getElementById('emailerr');
    if(email=='')
    {
        emailerr.textContent = "Fillout this field"
        emailerr.classList.remove("d-none")
        return false;
    }

    else if(pattern.test(email)==false)
    {  
        emailerr.textContent = "Enter valid email"
        emailerr.classList.remove("d-none")
        return false;
    }
    else
    {
        emailerr.classList.add("d-none")
        return true;
    }
}
function validgender(){
var getSelectedValue = document.querySelector( 'input[name="gender"]:checked');   
var gendererr = document.getElementById('gendererr');
if(getSelectedValue != null) {   
        gendererr.classList.add("d-none")
        return true; }
else {  
        gendererr.textContent = "Enter valid email"
        gendererr.classList.remove("d-none")
        return false; }
}
function validphno(){
    var pattern = /^[a-zA-Z]*$/;
    var phno= document.getElementById('phno').value;
    var phnoerr = document.getElementById('phnoerr');
    if(phno=='')
    {
        phnoerr.textContent = "Fillout this field"
        phnoerr.classList.remove("d-none")
        return false;
    }
    else if(phno.length!=10 || pattern.test(phno)==true)
    {
        phnoerr.textContent = "Invalid number"
        phnoerr.classList.remove("d-none")
        return false;
    }
    else
    {
        phnoerr.classList.add("d-none")
        return true;
    }
}
function validlanguage(){
var lanerr = document.getElementById('lanerr');
try
{checkbox = document.querySelector('.form-check-input:checked').value; }
catch{
    checkbox = null 
}
if(checkbox != null){
    lanerr.classList.add("d-none")
    return true;
}
else{
    lanerr.textContent = "Plese select languages"
    lanerr.classList.remove("d-none")
    return false;
    
}
}
function validdatabase(){
    var database= document.getElementById('database').value;
    var databaseerr=document.getElementById('databaseerr');
    if(database=='')
    {
        databaseerr.innerHTML = "select the database"
        databaseerr.classList.remove("d-none")
        return false;
    }
    else
    {
        var selectElement = document.getElementById("database");
        var selectedValues = [];
        
        for (var i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].selected) {
            selectedValues.push(selectElement.options[i].value);
            }
        }
        
        databaseerr.classList.add("d-none")
        return selectedValues;
    }
}

function submitfrm(){

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
        }
        else{
            localStorage.setItem(key, JSON.stringify(value));
        }
        console.log(JSON.stringify(value));
        window.location.href = "index.html"
}
else{
    return false;
}

}