var urlParams = new URLSearchParams(window.location.search);
var page = urlParams.get("page");

if (page === undefined || page === "1") {
  var valid_name = localStorage.getItem("name") ? localStorage.getItem("name") : "";
  var valid_surname = localStorage.getItem("surname") ? localStorage.getItem("surname") : "";

  var formHtml =
    '<div class="row">' +
    '<div class="col-md-6">' +
    '<div class="mb-3 mt-3">' +
    '<label for="name">First Name:</label>' +
    '<input type="text" class="form-control" id="name" placeholder="Enter Your Name" name="name" value="' +
    valid_name +
    '">' +
    '<div id="nameerr" class="err d-none"></div>' +
    '</div>' +
    '</div>' +
    '<div class="col-md-6">' +
    '<div class="mb-3 mt-3">' +
    '<label for="surname">Last Name:</label>' +
    '<input type="text" class="form-control" id="surname" placeholder="Enter Your Name" name="surname" value="' +
    valid_surname +
    '">' +
    '<div id="surnameerr" class="err d-none"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col-sm-2">' +
    '<button type="submit" id="next" class="btn btn-primary">Next</button>' +
    '</div>' +
    '</div>';

  document.getElementById("myfrm").innerHTML = formHtml;

  document.getElementById("name").addEventListener("keyup", function () {
    var fname = document.getElementById("name").value;
    var pattern = /^[a-zA-Z]*$/;

    if (fname === "") {
      document.getElementById("nameerr").innerHTML = "Fill out this field";
      document.getElementById("nameerr").classList.remove("d-none");
      valid_name = false;
    } else if (!pattern.test(fname)) {
      document.getElementById("nameerr").innerHTML = "Only alphabets allowed";
      document.getElementById("nameerr").classList.remove("d-none");
      valid_name = false;
    } else {
      document.getElementById("nameerr").classList.add("d-none");
      valid_name = fname;
    }
  });

  document.getElementById("surname").addEventListener("keyup", function () {
    var surname = document.getElementById("surname").value;
    var pattern = /^[a-zA-Z]*$/;

    if (surname === "") {
      document.getElementById("surnameerr").innerHTML = "Fill out this field";
      document.getElementById("surnameerr").classList.remove("d-none");
      valid_surname = false;
    } else if (!pattern.test(surname)) {
      document.getElementById("surnameerr").innerHTML = "Only alphabets allowed";
      document.getElementById("surnameerr").classList.remove("d-none");
      valid_surname = false;
    } else {
      document.getElementById("surnameerr").classList.add("d-none");
      valid_surname = surname;
    }
  });

  document.getElementById("next").addEventListener("click", function () {
    if (valid_surname && valid_name) {
      localStorage.setItem("name", valid_name);
      localStorage.setItem("surname", valid_surname);
      window.location.href = "http://127.0.0.1:5500/Task-2/form.html?page=2";
    } else {
      document.getElementById("surname").dispatchEvent(new Event("keyup"));
      document.getElementById("name").dispatchEvent(new Event("keyup"));
    }
  });
}

if (page === "2") {
  var valid_email = localStorage.getItem("email") ? localStorage.getItem("email") : "";

  var formHtml =
    '<div class="row">' +
    '<div class="col">' +
    '<div class="mb-3 mt-3">' +
    '<label for="email">Email:</label>' +
    '<input type="email" class="form-control" id="email" placeholder="Enter email" name="email" value="' +
    valid_email +
    '">' +
    '<div id="emailerr" class="err d-none"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col-sm-2">' +
    '<a href="form.html?page=1"><button type="button" id="prev" class="btn btn-primary">Prev</button></a>' +
    '</div>' +
    '<div class="col-sm-8"></div>' +
    '<div class="col-sm-2"><button type="button" id="next" class="btn btn-primary">Next</button></div>' +
    '</div>';

  document.getElementById("myfrm").innerHTML = formHtml;

  document.getElementById("email").addEventListener("keyup", function () {
    var email = document.getElementById("email").value;
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (email === "") {
      document.getElementById("emailerr").innerHTML = "Fill out this field";
      document.getElementById("emailerr").classList.remove("d-none");
      valid_email = false;
    } else if (!pattern.test(email)) {
      document.getElementById("emailerr").innerHTML = "Enter a valid email";
      document.getElementById("emailerr").classList.remove("d-none");
      valid_email = false;
    } else {
      document.getElementById("emailerr").classList.add("d-none");
      valid_email = email;
    }
  });

  document.getElementById("prev").addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/Task-2/form.html?page=1";
  });

  document.getElementById("next").addEventListener("click", function () {
    if (valid_email) {
      localStorage.setItem("email", valid_email);
      window.location.href = "http://127.0.0.1:5500/Task-2/form.html?page=3";
    } else {
      document.getElementById("email").dispatchEvent(new Event("keyup"));
    }
  });
}

if (page === "3") {
    var formHtml =
      '<div class="row">' +
      '<div class="col">' +
      'Gender:' +
      '<label class="radio-inline">' +
      '<input type="radio" name="gender" value="Male">Male' +
      '</label>' +
      '<label class="radio-inline">' +
      '<input type="radio" name="gender" value="female">Female' +
      '</label>' +
      '<label class="radio-inline">' +
      '<input type="radio" name="gender" value="Other">Other' +
      '</label>' +
      '<div id="gendererr" class="err d-none"></div>' +
      '</div>' +
      '<div class="row">' +
      '<div class="col-sm-2">' +
      '<a href="form.html?page=2"><button type="button" id="prev" class="btn btn-primary">Prev</button></a>' +
      '</div>' +
      '<div class="col-sm-8"></div>' +
      '<div class="col-sm-2"><button type="button" id="next" class="btn btn-primary">Next</button></div>' +
      '</div>' +
      '</div>';
  
    document.getElementById("myfrm").innerHTML = formHtml;
  
    var valid_gen = localStorage.getItem("gender") ? localStorage.getItem("gender") : "";
  
    if (valid_gen === "Male") {
      document.querySelector('input[name="gender"][value="Male"]').checked = true;
    } else if (valid_gen === "female") {
      document.querySelector('input[name="gender"][value="female"]').checked = true;
    } else if (valid_gen === "Other") {
      document.querySelector('input[name="gender"][value="Other"]').checked = true;
    }
  
    document.querySelectorAll('input[name="gender"]').forEach(function (radio) {
      radio.addEventListener("change", function () {
        valid_gen = document.querySelector('input[name="gender"]:checked').value;
        if (valid_gen) {
          document.getElementById("gendererr").classList.add("d-none");
          valid_gen = document.querySelector('input[name="gender"]:checked').value;
        } else {
          document.getElementById("gendererr").innerHTML = "Select the Gender";
          document.getElementById("gendererr").classList.remove("d-none");
          valid_gen = false;
        }
      });
    });
  
    document.getElementById("prev").addEventListener("click", function () {
      window.location.href = "http://127.0.0.1:5500/Task-2/form.html?page=2";
    });
  
    document.getElementById("next").addEventListener("click", function () {
      if (valid_gen) {
        localStorage.setItem("gender", valid_gen);
        window.location.href = "http://127.0.0.1:5500/Task-2/form.html?page=4";
      } else {
        document.querySelector('input[name="gender"]').dispatchEvent(new Event("change"));
      }
    });
  }
  if (page === "4") {
    var formHtml =
      '<div class="row">' +
      '<div class="col">' +
      'Language:' +
      '<div class="row">' +
      '<div class="form-check col-sm-1">' +
      'Python<input class="form-check-input" type="checkbox" id="python" value="Python">' +
      '</div>' +
      '<div class="form-check col-sm-1">' +
      'Java<input class="form-check-input" type="checkbox" value="Java" id="java">' +
      '</div>' +
      '<div class="form-check col-sm-1">' +
      'React<input class="form-check-input" type="checkbox" value="React" id="react">' +
      '</div>' +
      '<div class="form-check col-sm-1">' +
      'Node<input class="form-check-input" type="checkbox" value="Node" id="node">' +
      '</div>' +
      '</div>' +
      '<div id="lanerr" class="err d-none"></div>' +
      '</div>' +
      '<div class="row">' +
      '<div class="col-sm-2">' +
      '<a href="form.html?page=3"><button type="button" id="prev" class="btn btn-primary">Prev</button></a>' +
      '</div>' +
      '<div class="col-sm-8"></div>' +
      '<div class="col-sm-2"><button type="button" id="next" class="btn btn-primary">Submit</button></div>' +
      '</div>' +
      '</div>';
  
    document.getElementById("myfrm").innerHTML = formHtml;
  
    var valid_lan = 0;
  
    document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        valid_lan = document.querySelectorAll('input[type="checkbox"]:checked').length;
  
        if (valid_lan !== 0 && valid_lan !== undefined) {
          document.getElementById("lanerr").classList.add("d-none");
        } else {
          document.getElementById("lanerr").innerHTML = "Select the Language";
          document.getElementById("lanerr").classList.remove("d-none");
          valid_lan = 0;
        }
      });
    });
  
    document.getElementById("prev").addEventListener("click", function () {
      window.location.href = "http://127.0.0.1:5500/Task-2/form.html?page=3";
    });
  
    document.getElementById("next").addEventListener("click", function () {
      if (valid_lan !== 0 && valid_lan !== undefined) {
        var selectedLanguages = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(function (checkbox) {
          selectedLanguages.push(checkbox.value);
        });
  
        localStorage.setItem("language", selectedLanguages.join(","));
        var tableHtml =
          '<div class="container">' +
          '<table>' +
          '<tr>' +
          '<td>First Name</td>' +
          '<td>' + localStorage.getItem("name") + '</td>' +
          '</tr>' +
          '<tr>' +
          '<td>Last Name</td>' +
          '<td>' + localStorage.getItem("surname") + '</td>' +
          '</tr>' +
          '<tr>' +
          '<td>Email</td>' +
          '<td>' + localStorage.getItem("email") + '</td>' +
          '</tr>' +
          '<tr>' +
          '<td>Gender</td>' +
          '<td>' + localStorage.getItem("gender") + '</td>' +
          '</tr>' +
          '<tr>' +
          '<td>Language</td>' +
          '<td>' + localStorage.getItem("language") + '</td>' +
          '</tr>' +
          '</table>' +
          '</div>';
  
        document.getElementById("myfrm").innerHTML = tableHtml;
        localStorage.clear();
      } else {
        document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
          checkbox.dispatchEvent(new Event("change"));
        });
      }
    });
  }