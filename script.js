let data = [
  {
    city: "Rajkot",
    email: "ffd",
    firstName: "hetvi",
    gender: "female",
    lastName: "kanani",
    mobile: "65566",
  },
  {
    email: "ffd",
    firstName: "chaku",
    gender: "female",
    lastName: "kanani",
  },
  {
    email: "ffd",
    firstName: "vasu",
    gender: "female",
    lastName: "kanani",
  },
];
const constLimit = 5;
const constPageNumber = 1;
const customPagination = document.getElementById("customPagination");

console.log(data);
var modal = document.getElementById("myModal");
var myModalTwo = document.getElementById("myModalTwo");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var spantwo = document.getElementsByClassName("closetwo")[0];
console.log(spantwo, "done");
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
  if (event.target == myModalTwo) {
    myModalTwo.style.display = "none";
  }
};
// modal finish

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
var btnsearch = document.getElementById("btnsearch");

function validateEmail(ename) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(ename);
}

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
    spaminame.innerHTML = "please fill the field";
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
  // gname.value = "";
  birthday.value = "";
  city.value = "";
  state.value = "";
  country.value = "";
}

function searchh() {
  var search = document.getElementById("search").value;
  if (search) loadData(data.filter((d) => d.firstName.includes(search)));
  else loadData();
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
  document
    .getElementById("closeButtonForUpdateModal")
    .addEventListener("click", () => {
      console.log("hi");
      modaltwo.style.display = "none";
    });
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
  const genamefemale = document.getElementById("genamefemaleupdate");
  const genamemale = document.getElementById("gnamemaleupdate");

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

const changePagination = (e) => {
  loadData(null, +e.target.id.split("-")[1]);
  console.log(document.getElementById(e.target.id).parentElement);
  document.getElementById(e.target.id).classList.add("activePageBorder");
};
function loadData(newData, pageNumber) {
  let finalPageNumber = constPageNumber;
  if (pageNumber) finalPageNumber = pageNumber;
  const totalUserCount = document.getElementById("totalUserCount");
  // console.log(newData);
  let finalData = data;
  if (newData) finalData = newData;
  const table = document.getElementById("table");
  totalUserCount.innerText = finalData.length;
  let rows = "";
  let paginationUi = "";
  const totalPage = Math.ceil(finalData.length / constLimit);
  for (let i = 0; i < totalPage; i++) {
    if (i === 0 && finalPageNumber === 1)
      paginationUi =
        paginationUi +
        `<li class="page-item "  onclick="changePagination(event)" ><a  id='page-${
          i + 1
        }'
      data-id='page-${
        i + 1
      }'style="margin: 0.5rem;" class="page-link activePageBorder" href="#">${
          i + 1
        }</a></li>`;
    else
      paginationUi =
        paginationUi +
        `<li class="page-item"  onclick="changePagination(event)" ><a id='page-${
          i + 1
        }'
      data-id='page-${
        i + 1
      }'style="margin: 0.5rem;" class="page-link" href="#">${i + 1}</a></li>`;
  }
  // paginationUi =
  //   paginationUi +
  //   `<div>Total User : <span id='totalUserCount'>${finalData.length}</span></div>`;

  customPagination.innerHTML = paginationUi;
  let start = (finalPageNumber - 1) * constLimit;
  let end = finalPageNumber * constLimit;
  let finalEnd = end;
  if (finalEnd > finalData.length) finalEnd = finalData.length;

  for (let i = start; i < finalEnd; i++) {
    rows =
      rows +
      `<tr>

             <td>${finalData[i].firstName}</td>
             <td>${finalData[i].lastName}</td>
             <td>${finalData[i].email}</td>
             <td>${finalData[i].mobile}</td>
             <td>${finalData[i].gender}</td>
             <td>${finalData[i].birthday}</td>
             <td>${finalData[i].city}</td>
             <td>${finalData[i].state}</td>
             <td>${finalData[i].country}</td>
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
  if (e.target.value.trim() != "" && e.target.value === validateEmail(ename));
  {
    spaeiname.innerHTML = "";
  }
});

mname.addEventListener("keypress", (e) => {
  if (e.target.value.trim() != "");
  {
    spaminame.innerHTML = "";
  }
});

loadData();
