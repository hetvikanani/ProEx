var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// modal finish
let data = [
  // {
  //   id: "hetvi",
  //   firstName: "hetvi",
  //   lastName: "kanani",
  //   email: "enam",
  //   mobile: 123456789,
  //   gender: "male",
  //   birthday: "2021-02-10",
  //   city: "Surat",
  //   state: "Punjab",
  //   country: "China",
  // },
  // {
  //   id: "kanani",
  //   firstName: "kanani",
  //   lastName: "kanani",
  //   email: "enam",
  //   mobile: "mname",
  //   gender: "female",
  //   birthday: "2021-02-15",
  //   city: "city",
  //   state: "state",
  //   country: "country",
  // },
];
document.getElementById("updatebtn").addEventListener("click", updatadata);
var form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", add);
}
function add(e) {
  event.preventDefault();
  const fname = document.getElementById("fname");
  var spaname = document.getElementById("spaname");
  if (fname.value.trim() === "") {
    spaname.innerHTML = "plz fill the feild";
    return false;
  }

  const lname = document.getElementById("lname");
  // if(lname===""){
  //     var spaname= document.getElementById("spalname").innerHTML="plz fill the feild";
  //      return false;}
  const ename = document.getElementById("ename");
  const mname = document.getElementById("mname");
  const gname = document.querySelector('input[name="optradio"]:checked');
  // let gendername=null;
  // if(gname){
  //     gendername=gname;
  // }
  const birthday = document.getElementById("birthday");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const country = document.getElementById("country");
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
var btnjevu = document.getElementById("btnjevu");
var spantwo = document.getElementsByClassName("closetwo")[0];
spantwo.onclick = function () {
  modaltwo.style.display = "none";
};

let updateid = null;
function update(event) {
  updateid = event.target.id;
  console.log(event.target.id);
  modaltwo.style.display = "block";

  let ans = data.filter((gme) => {
    return gme.id === event.target.id;
  });
  console.log(ans);

  const fname = document.getElementById("fnametwo");
  const lname = document.getElementById("lnametwo");
  const ename = document.getElementById("enametwo");
  const mname = document.getElementById("mnametwo");
  // const gname = document.querySelector('input[name="optradio"]:checked');
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
             <th><i class="fa fa-pencil" aria-hidden="true" id="${data[i].id}" onclick="update(event)" style="padding-right: 10px;"></i>
                 <i class="fa fa-trash-o" aria-hidden="true" id="${data[i].id}"  onclick="remove(event)"></i> </th>
             <td>${data[i].firstName}</td>
             <td>${data[i].lastName}</td>
             <td>${data[i].email}</td>
             <td>${data[i].mobile}</td>
             <td>${data[i].gender}</td>
             <td>${data[i].birthday}</td>
             <td>${data[i].city}</td>
             <td>${data[i].state}</td>
             <td>${data[i].country}</td>
 </tr>`;
  }
  table.append(rows);
  table.innerHTML = rows;
}
// var fname = document.getElementById("fname").value;

function updatadata(event) {
  event.preventDefault();

  const fname = document.getElementById("fnametwo").value;
  const lname = document.getElementById("lnametwo").value;
  const ename = document.getElementById("enametwo").value;
  const mname = document.getElementById("mnametwo").value;
  const gname = document.querySelector('input[name="optradiotwo"]:checked')
    .value;
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
document.getElementById("fname").addEventListener("keypress", (e) => {
  console.log(e.target.value, e);
  var spaname = document.getElementById("spaname");

  if (e.target.value.trim() !== "");
  {
    spaname.innerHTML = "";
  }
});
