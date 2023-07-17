page=window.location.href.split('?')[1]
if(page == undefined || page == '1'){

    valid_name = localStorage.getItem("name") ? localStorage.getItem("name"): "" ;
    valid_surname = localStorage.getItem("surname") ? localStorage.getItem("surname"): "" ;

    $('#myfrm').html(
    `<div class="row"><div class="col-md-6"><div class="mb-3 mt-3"><label for="name">First Name:</label><input type="text" class="form-control" id="name" placeholder="Enter Your Name" name="name" value = "`+ valid_name +`"><div id="nameerr" class="err d-none"></div></div></div><div class="col-md-6"><div class="mb-3 mt-3"><label for="surname">Last Name:</label><input type="text" class="form-control" id="surname" placeholder="Enter Your Name" name="surname"value = "`+ valid_surname +`"><div id="surnameerr" class="err d-none"></div></div></div></div><div class="row"><div class="col-sm-2"><button type="submit" id="next" class="btn btn-primary">Next</button></div></div>`)
    $('#name').keyup(function(){
        fname = $('#name').val();
        pattern = /^[a-zA-Z]*$/;
        if(fname=='')
        {   
            $('#nameerr').html("Fillout this field");
            $('#nameerr').removeClass("d-none");
            valid_name = false;
        }
    
        else if(pattern.test(fname)==false)
        { 
            $('#nameerr').html("only alphabelts allowed");
            $('#nameerr').removeClass("d-none");
            valid_name = false;
        }
        else
        {
            $('#nameerr').addClass("d-none");
            valid_name = fname
        }
    });
    $('#surname').keyup(function(){
        surname = $('#surname').val();
        pattern = /^[a-zA-Z]*$/;
        if(surname=='')
        {   
            $('#surnameerr').html("Fillout this field");
            $('#surnameerr').removeClass("d-none");
            valid_surname = false;
        }
    
        else if(pattern.test(surname)==false)
        { 
            $('#surnameerr').html("only alphabelts allowed");
            $('#surnameerr').removeClass("d-none");
            valid_surname = false;
        }
        else
        {
            $('#surnameerr').addClass("d-none");
            valid_surname = surname;
        }
    });
    $('#next').click(function(){
        if(valid_surname && valid_name){
            localStorage.setItem("name",valid_name)
            localStorage.setItem("surname",valid_surname)
            window.location.href="http://127.0.0.1:5500/Task-2/form.html?2"
        }
        else{
            $('#surname').keyup()
            $('#name').keyup()
        }
    });
}
if(page == '2' ){
    valid_email = localStorage.getItem("email") ? localStorage.getItem("email"): "" ;
    $('#myfrm').html(
    `<div class="row"><div class="col"><div class="mb-3 mt-3"><label for="email">Email:</label><input type="email" class="form-control" id="email" placeholder="Enter email" name="email" value="`+ valid_email +`"><div id="emailerr" class="err d-none"></div></div></div><div></div></div><div class="row"><div class="col-sm-2"><a href="form.html?1"><button type="button" id="prev" class="btn btn-primary">Prev</button></a></div><div class="col-sm-8"></div><div class="col-sm-2"><button type="button" id="next" class="btn btn-primary">Next</button></div></div>`)
    $('#email').keyup(function(){
        email = $('#email').val();
        pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if(email=='')
        {   
            $('#emailerr').html("Fillout this field");
            $('#emailerr').removeClass("d-none");
            valid_email = false;
        }
    
        else if(pattern.test(email)==false)
        { 
            $('#emailerr').html("Enter valid email");
            $('#emailerr').removeClass("d-none");
            valid_email = false;
        }
        else
        {
            $('#emailerr').addClass("d-none");
            valid_email = email;
        }
    });
    $('#prev').click(function(){
       window.location.href="http://127.0.0.1:5500/Task-2/form.html?1"
    });
    $('#next').click(function(){
        if(valid_email){
            localStorage.setItem("email",valid_email)
            window.location.href="http://127.0.0.1:5500/Task-2/form.html?3"
        }
        else{
            $('#email').keyup()
        }
    });
}
if(page == '3' ){
    $('#myfrm').html(
    `<div class="row">
    <div class="col">
        Gender:
        <label class="radio-inline">
            <input type="radio" name="gender" value="Male">Male
          </label>
          <label class="radio-inline">
            <input type="radio" name="gender" value="female">Female
          </label>
          <label class="radio-inline">
            <input type="radio" name="gender" value="Other">Other
          </label>
          <div id="gendererr" class="err d-none"></div>
    </div>
    
    <div class="row">
    <div class="col-sm-2">
    <a href="form.html?2"><button type="button" id="prev" class="btn btn-primary">Prev</button></a>
    </div>
    <div class="col-sm-8"></div>
    <div class="col-sm-2"><button type="button" id="next" class="btn btn-primary">Next</button></div></div>
    </div>`)
    valid_gen = localStorage.getItem("gender") ? localStorage.getItem("gender"): "" ;
    if(valid_gen == "Male"){
        $('input:radio[value=Male]').attr('checked',true);
    }
    else if(valid_gen == "female"){
        $('input:radio[value=female]').attr('checked',true);
    }
    else if(valid_gen == "Other"){
        $('input:radio[value=Other]').attr('checked',true);
    }
    else{
    }
    $('input[name="gender"]').change(function(){
        valid_gen = $('input[name="gender"]:checked').val()
        if(valid_gen != undefined){
            $('#gendererr').addClass("d-none");
            valid_gen = $('input[name="gender"]:checked').val()
        }
        else{
            $('#gendererr').html("Select the Gender");
            $('#gendererr').removeClass("d-none");
            valid_gen = false;
        }
    });
    $('#prev').click(function(){
       window.location.href="http://127.0.0.1:5500/Task-2/form.html?2"
    });
    $('#next').click(function(){
        if(valid_gen){
            localStorage.setItem("gender",valid_gen)
            window.location.href="http://127.0.0.1:5500/Task-2/form.html?4"
        }
        else{
            $('input[name="gender"]').change()
        }
    });
}
if(page == '4' ){

    $('#myfrm').html(
    `<div class="row">
    <div class="col">Language:</div>
    <div class="row">
      <div class="form-check col-sm-1">
        Python<input class="form-check-input" type="checkbox" id="python" value="Python">
        </div>
        <div class="form-check col-sm-1">Java<input class="form-check-input" type="checkbox" value="Java" id="java"></div>
        <div class="form-check col-sm-1">React<input class="form-check-input" type="checkbox" value="React" id="react"></div>
        <div class="form-check col-sm-1">Node<input class="form-check-input" type="checkbox" value="Node" id="node"></div>
      </div>
      <div id="lanerr" class="err d-none">
      </div>
    </div>
    <div class="row">
    <div class="col-sm-2">
    <a href="form.html?3"><button type="button" id="prev" class="btn btn-primary">Prev</button></a>
    </div>
    <div class="col-sm-8"></div>
    <div class="col-sm-2"><button type="button" id="next" class="btn btn-primary">Submit</button></div></div>
    </div>`)
    valid_lan = undefined
    $('input[type=checkbox]').change(function(){
        valid_lan = $('input[type="checkbox"]:checked').length
        
        if(valid_lan != 0 && valid_lan != undefined){
            $('#lanerr').addClass("d-none");
        }
        else{
            
            $('#lanerr').html("Select the Language");
            $('#lanerr').removeClass("d-none");
            valid_lan = 0;
        }
    });
    $('#prev').click(function(){
       window.location.href="http://127.0.0.1:5500/Task-2/form.html?3"
    });
    $('#next').click(function(){
        if(valid_lan != 0 && valid_lan!= undefined){
            str_lan = ""
            $.each($("input[type=checkbox]:checked"), function (index, value) {
                str_lan+=value.value+",";
            });
            localStorage.setItem("language",str_lan.replace(/,\s*$/, ""))
            $('#myfrm').html(
                `<div class="container">
                <table>
                <tr>
                    <td>First Name</td>
                    <td>`+ localStorage.getItem("name") +`</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>`+ localStorage.getItem("surname") +`</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>`+ localStorage.getItem("email") +`</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>`+ localStorage.getItem("gender") +`</td>
                </tr>
                <tr>
                    <td>Language</td>
                    <td>`+ localStorage.getItem("language") +`</td>
                </tr>
                </table>
                </div>`) 
                localStorage.clear()
        }
        else{console.log("EHEHEHEH")
            $('input[type=checkbox]').change()
        }
    });
}