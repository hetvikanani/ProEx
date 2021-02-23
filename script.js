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
let data = [];
var form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", add);
}
function add(e) {
  event.preventDefault();
  const fname = document.getElementById("fname").value;
  var spaname = document.getElementById("spaname");
  if (fname === "") {
    spaname.innerHTML = "plz fill the feild";
    return false;
  }
  // else{
  //  var spaname= spaname.innerHTML="plz fill the feild";
  // }
  const lname = document.getElementById("lname").value;
  // if(lname===""){
  //     var spaname= document.getElementById("spalname").innerHTML="plz fill the feild";
  //      return false;}
  const ename = document.getElementById("ename").value;
  const mname = document.getElementById("mname").value;
  const gname = document.querySelector('input[name="optradio"]:checked').value;
  // let gendername=null;
  // if(gname){
  //     gendername=gname.value;
  // }
  const birthday = document.getElementById("birthday").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
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
  data.push(detail);
  loadData();
  modal.style.display = "none";
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
function update(event) {
  modaltwo.style.display = "block";
}
function loadData() {
  const table = document.getElementById("table");
  let rows = "";
  for (let i = 0; i < data.length; i++) {
    rows =
      rows +
      `<tr>
             <th><i class="fa fa-pencil" aria-hidden="true" id="${btnjevu}" onclick="update(event)" style="padding-right: 10px;"></i>
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
var fname = document.getElementById("fname").value;
function valirem() {
  var spaname = document.getElementById("spaname");
  if (!fname === "") {
    var spaname = (spaname.innerHTML = "");
    return false;
  }
}
