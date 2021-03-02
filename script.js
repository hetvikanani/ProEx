var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var spantwo = document.getElementsByClassName("closetwo")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

spantwo.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// modal finish
let data = [];
document.getElementById("updatebtn").addEventListener("click", updatadata);
var form = document.getElementById("form");

// calling
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const ename = document.getElementById("ename");
const mname = document.getElementById("mname");
const birthday = document.getElementById("birthday");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");

let spaname = document.getElementById("spaname");
var spalname = document.getElementById("spalname");
var spaeiname = document.getElementById("spaeiname");
var spaminame = document.getElementById("spaminame");

function validateEmail(ename) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(ename);
};


if (form) {
  form.addEventListener("submit", add);
}

function add(event) {
  event.preventDefault();
  if (fname.value.trim() === "") {  
    spaname.innerHTML = "plz fill the field";
    return false;
  }
  if (lname.value.trim() === "") {
    spalname.innerHTML = "plz fill the field";
    return false;
  }
  if (ename.value.trim() === "") {
    spaeiname.innerHTML = "please fill the field";
    return false;
  }
  // if (ename.value != validateEmail(ename)) {
  //   spaeiname.innerHTML = "plz proper email";

  // }
  if (mname.value.trim() === "") {
    spaminame.innerHTML = "please fill the field"
    return false;
  } 



  const gname = document.querySelector('input[name="optradio"]:checked');
const detail = {
    id: fname.value,
    firstName: fname.value,
    lastName: lname.value,
    email: ename.value,
    mobile: mname.value,
    gender: gname.value,
    birthday: birthday.value,
    city: city.value,
    state: state.value,
    country: country.value,
  };
  data.push(detail);
  console.log(data);
  loadData();
  modal.style.display = "none";

  fname.value = "";
  lname.value = "";
  ename.value = "";
  mname.value = "";
  gname.value = "";
  birthday.value = "";
  city.value = "";
  state.value = "";
  country.value = "";
}


function remove(event) {
  data = data.filter((element) => {
    return element.id !== event.target.id;
  });
  loadData();
}
var modaltwo = document.getElementById("myModalTwo");

var spantwo = document.getElementsByClassName("closetwo")[0];
spantwo.onclick = function () {
  modaltwo.style.display = "none";
};

let updateid = null;
function update(event) {
  updateid = event.target.id;
  modaltwo.style.display = "block";

  let ans = data.filter((gme) => {
    return gme.id === event.target.id;
  });


  const fname = document.getElementById("fnametwo");
  const lname = document.getElementById("lnametwo");
  const ename = document.getElementById("enametwo");
  const mname = document.getElementById("mnametwo");
  const birthday = document.getElementById("birthdaytwo");
  const city = document.getElementById("citytwo");
  const state = document.getElementById("statetwo");
  const country = document.getElementById("countrytwo");
  const genamefemale = document.getElementById("genamefemale");
  const genamemale = document.getElementById("genamemale");

  fname.value = ans[0].firstName;
  lname.value = ans[0].lastName;
  ename.value = ans[0].email;
  mname.value = ans[0].mobile;

  if (ans[0].gender === "male") {
    genamemale.checked = true;
  } else if (ans[0].gender === "female") genamefemale.checked = true;

  birthday.value = ans[0].birthday;
  city.value = ans[0].city;
  state.value = ans[0].state;
  country.value = ans[0].country;
}
function loadData() {
  const table = document.getElementById("table");
  let rows = "";
  for (let i = 0; i < data.length; i++) {
    rows =
      rows +
      `<tr>

             <td>${data[i].firstName}</td>
             <td>${data[i].lastName}</td>
             <td>${data[i].email}</td>
             <td>${data[i].mobile}</td>
             <td>${data[i].gender}</td>
             <td>${data[i].birthday}</td>
             <td>${data[i].city}</td>
             <td>${data[i].state}</td>
             <td>${data[i].country}</td>
             <th><i class="fa fa-pencil" aria-hidden="true" id="${data[i].id}" onclick="update(event)" style="padding-right: 10px;"></i>
             <i class="fa fa-trash-o" aria-hidden="true" id="${data[i].id}"  onclick="remove(event)"></i> </th>
 </tr>`;
  }
  table.append(rows);
  table.innerHTML = rows;
}


function updatadata(event) {
  event.preventDefault();

  const fname = document.getElementById("fnametwo").value;
  const lname = document.getElementById("lnametwo").value;
  const ename = document.getElementById("enametwo").value;
  const mname = document.getElementById("mnametwo").value;
  const gname = document.querySelector('input[name="optradiotwo"]:checked').value; 
   
  const birthday = document.getElementById("birthdaytwo").value;
  const city = document.getElementById("citytwo").value;
  const state = document.getElementById("statetwo").value;
  const country = document.getElementById("countrytwo").value;
  const detail = {
    id: fname,
    firstName: fname,
    lastName: lname,
    email: ename,
    mobile: mname,
    gender: gname,
    birthday: birthday,
    city: city,
    state: state,
    country: country,
  };
  console.log(updateid);
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === updateid) {
      data[i] = detail;
    }
  }
  loadData();
  modaltwo.style.display = "none";
}
fname.addEventListener("keypress", (e) => {

  if (e.target.value.trim() !== "");
  {
    spaname.innerHTML = "";
  }
});

lname.addEventListener("keypress", (e) => {

  if (e.target.value.trim() != "");
  {
    spalname.innerHTML = "";
  }
});

ename.addEventListener("keypress", (e) => {
  if (e.target.value.trim() != "" && e.target.value === validateEmail(ename)); {
    spaeiname.innerHTML = "";
  }
});


mname.addEventListener('keypress', (e) => {
  if (e.target.value.trim() != ""); {
    spaminame.innerHTML = "";
  }
});




  
    

