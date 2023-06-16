console.log("Final Test");
const eid = document.getElementById("eid");
const name = document.getElementById("name");
const age = document.getElementById("age");
let alert1 = document.querySelector(".alert1");

let tbody = document.getElementsByTagName("tbody");
let deleteStatus = false;
const addBtn = document.querySelector(".add");
let array = [];
let editArray = [];
let delArray = [];
const popeid = document.querySelector(".popeid");
const popname = document.querySelector(".popname");
const popage = document.querySelector(".popage");
let popalert1 = document.querySelector(".popalert1");

let search = document.getElementById("searchText");
let search1 = document.getElementById("searchText1");
let search2 = document.getElementById("searchText2");
var isInvalidStart = false;
var isInvalidEnd = false;

var currentDate = new Date();

var year = currentDate.getFullYear();
var month = String(currentDate.getMonth() + 1).padStart(2, "0");
var day = String(currentDate.getDate()).padStart(2, "0");

var currentformattedDate = year + "-" + month + "-" + day;
console.log(currentformattedDate);

eid.addEventListener("blur", function () {
  alert1.textContent = "";
  eid.style.borderColor = "white";
  let reg = /^[a-zA-Z0-9]+$/;
  let str = eid.value;
  if (str == "") {
    alert1.textContent = "Activity should not be empty";
    eid.style.borderColor = "red";
    alert1.style.color = "red";
  } else if (!reg.test(str)) {
    console.log("No Character");
    alert1.textContent = "Special characters are not allowed";
    eid.style.borderColor = "red";
    alert1.style.color = "red";
  } else {
    isInvalidStart = true;
  }
});

function f1() {
  console.log(name.value, age.value);
  if (new Date(name.value) < new Date(currentformattedDate) && new Date(age.value) < new Date(currentformattedDate)) {
    console.log("hi");
    let dropdown = document.getElementById("select");
    let options = dropdown.getElementsByTagName("option");
    options[1].disabled = true;
    options[0].disabled = true;
    options[2].disabled = true; 
    options[3].disable = false;
    options[4].disabled = false;
  } else if (new Date(name.value) < new Date(currentformattedDate) && new Date(age.value) > new Date(currentformattedDate)) {
    let dropdown = document.getElementById("select");
    let options = dropdown.getElementsByTagName("option");
    options[1].disabled = false;
    options[0].disabled = true;
    options[2].disabled = false;
    options[3].disabled = false;
    options[4].disabled = true;
  }   
  else if (new Date(name.value) > new Date(currentformattedDate) && new Date(age.value) > new Date(currentformattedDate)) {
    let dropdown = document.getElementById("select");
    let options = dropdown.getElementsByTagName("option");
    options[1].disabled = false;
    options[0].disabled = true;
    options[2].disabled = false;
    options[3].disabled = false;
    options[4].disabled = true;
  }
}

function f2() {
  console.log(name.value, age.value);
  if (new Date(popname.value) < new Date(currentformattedDate) && new Date(popage.value) < new Date(currentformattedDate)) {
    console.log("hi");
    let dropdown2 = document.getElementById("select1");
    let options2 = dropdown2.getElementsByTagName("option");
    options2[1].disabled = true;
    options2[0].disabled = true;
    options2[2].disabled = true;
    options2[4].disabled = false;
  } 
  else if (new Date(popname.value) < new Date(currentformattedDate) && new Date(popage.value) > new Date(currentformattedDate)) {
    let dropdown2 = document.getElementById("select1");
    let options2 = dropdown2.getElementsByTagName("option");
    options2[1].disabled = false;
    options2[0].disabled = true;
    options2[2].disabled = false;
    options2[3].disabled = false;
    options2[4].disabled = true;
  } 
  
  else if (new Date(popname.value) > new Date(currentformattedDate) && new Date(popage.value) > new Date(currentformattedDate)) {
    let dropdown2 = document.getElementById("select1");
    let options2 = dropdown2.getElementsByTagName("option");
    options2[1].disabled = false;
    options2[0].disabled = true;
    options2[2].disabled = false;
    options2[3].disabled = false;
    options2[4].disabled = true;
  }
}

popeid.addEventListener("blur", function () {
  popalert1.textContent = "";
  popeid.style.borderColor = "white";
  let str = popeid.value;
  if (str == "") {
    popalert1.textContent = "ID should not be empty";
    popeid.style.borderColor = "red";
    popalert1.style.color = "red";
  } else if (!isNaN(str)) {
    console.log("all nos");
    popalert1.textContent = "Only Alpha are allowed";
    popeid.style.borderColor = "red";
    popalert1.style.color = "red";
  }
});

function getSelect() {
  const select = document.getElementById("select").value;
  return select;
}

function getSelectPop() {
  const select1 = document.querySelector(".popselect").value;
  return select1;
}

function addDetail() {
  let eidd = document.getElementById("eid").value;
  let namee = document.getElementById("name").value;
  let agee = document.getElementById("age").value;
  let empObj = {};
  if (eidd == "" || namee == "" || agee == "" || getSelect() == "") {
    alert("Empty Fields are not allowed");
  } 
  else if (new Date(document.getElementById("name").value) > new Date(document.getElementById("age").value)) {
    alert("Due date should be maximun");
  } 
  else if (!isInvalidStart) {
    alert1.textContent = "Please correct";
    eid.style.borderColor = "red";
    alert1.style.color = "red";
    alert("Invalid Activity Name");
  } 
  else {
    empObj["eid"] = eidd;
    empObj["name"] = namee;
    empObj["age"] = agee;
    empObj["gender"] = getSelect();
    empObj["status"] = true;
    return createArray(empObj);
  }
}

function createArray(ds) {
  array.length == 0;
  array.push(ds);
  insertData(array);
}

function insertData(array) {
  tbody[0].innerHTML = "";
  console.log(tbody, "body");
  for (i = 0; i < array.length; i++) {
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(array[i].length);
    if (array[i].gender == "Completed") {
      cell1 = newRow.insertCell(0);
      cell1.innerHTML = "<img src='Eo_circle_green_checkmark.svg (1).png'>";
    } else if (array[i].gender == "Passed") {
      cell1 = newRow.insertCell(0);
      cell1.innerHTML =
        "<img src='dU1a5L-flag-x-mark-clip-art-computer-icons.png'>";
    } else {
      cell1 = newRow.insertCell(0);
      cell1.innerHTML = "";
    }

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = array[i].eid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = array[i].name;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = array[i].age;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = array[i].gender;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<button onClick="toggle(this);toggle1(this)" class="edit">Edit</button> <button onClick="delDetails(this)" class = "delete">Delete</button>`;
    document.getElementById("eid").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  }
}

function delDetails(data) {
  let row = data.parentElement.parentElement;
  console.log(row.rowIndex - 1);
  document.getElementById("storeList").deleteRow(row.rowIndex);
  array.splice(row.rowIndex, 1);
}
function toggle1(data) {
  let tarId = data.parentElement.parentElement;
  let upid = tarId.children[1].innerText;
  console.log(upid);
  editArray.push(upid);
  for (let i = 0; i < array.length; i++) {
    if (array[i].eid === upid) {
      console.log(upid);
      if (
        new Date(currentformattedDate) == new Date(array[i].age) ||
        new Date(currentformattedDate) > new Date(array[i].age)
      ) {
        console.log("sad");
        console.log(i);
        let emp = array[i];
        popeid.value = emp.eid;
        popname.value = emp.name;
        popage.value = emp.age;

        var dropdown = document.getElementById("select1");
        var options = dropdown.getElementsByTagName("option");
        options[1].disabled = true;
        options[0].disabled = true;
        options[2].disabled = true;
        // options[3].disabled = true;
      } else if (new Date(currentformattedDate) < new Date(array[i].age)) {
        var dropdown = document.getElementById("select1");
        var options = dropdown.getElementsByTagName("option");
        options[1].disabled = false;
        options[0].disabled = false;
        options[2].disabled = false;
        let emp = array[i];
        popeid.value = emp.eid;
        popname.value = emp.name;
        popage.value = emp.age;
      } else {
        console.log("sad");
        console.log(i);
        let emp = array[i];
        popeid.value = emp.eid;
        popname.value = emp.name;
        popage.value = emp.age;
        document.querySelector(".popselect").value =
          document.getElementById("select").value;
      }
    }
  }
}

function onEdit() {
  console.log("dfdgf");
  for (i = 0; i < array.length; i++) {
    if (editArray[editArray.length - 1] == array[i].eid) {
      console.log("tyf");
      console.log(array[i].eid);
      if (
        popeid.value == "" ||
        popname.value == "" ||
        popage.value == "" ||
        getSelectPop() == ""
      ) {
        console.log("tyf");
        alert("Empty Fields are not allowed");
      } else {
        if (new Date(popname.value) > new Date(popage.value)) {
          alert("asdrf");
        } else {
          console.log("tyf");
          console.log(popeid.value, popname.value, popage.value);
          array[i]["eid"] = popeid.value;
          array[i]["name"] = popname.value;
          array[i]["age"] = popage.value;
          array[i]["gender"] = getSelectPop();
          array[i]["status"] = true;
          insertData(array);
        }
      }
    }
  }
}

function toggle(data) {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

function sortArrayByDate() {
  let sortOrder = document.getElementById("dateAscDscId").value;

  if (sortOrder === "asc") {
    console.log("in");
    let sortedArray = array.sort(
      (r1, r2) => new Date(r1.age) - new Date(r2.age)
    );
    insertData(sortedArray);
    strikeThrough();
  } else {
    console.log("out");
    let sortedArray = array.sort(
      (r1, r2) => new Date(r2.age) - new Date(r1.age)
    );
    insertData(sortedArray);
    strikeThrough();
  }
}

search.addEventListener("input", function () {
  var keyword = this.value;
  keyword = keyword.toUpperCase();
  var table_1 = document.getElementById("storeList");
  var all_tr = table_1.getElementsByTagName("tr");
  for (var i = 0; i < all_tr.length; i++) {
    var name_column = all_tr[i].getElementsByTagName("td")[1];
    if (name_column) {
      var name_value = name_column.textContent;
      name_value = name_value.toUpperCase();
      if (name_value.indexOf(keyword) > -1) {
        all_tr[i].style.display = ""; // show
      } else {
        all_tr[i].style.display = "none"; // hide
      }
    }
  }
});

search1.addEventListener("keyup", function () {
  var keyword = this.value;
  var table_1 = document.getElementById("storeList");
  var all_tr = table_1.getElementsByTagName("tr");
  for (var i = 0; i < all_tr.length; i++) {
    var name_column = all_tr[i].getElementsByTagName("td")[3];
    if (name_column) {
      var name_value = name_column.textContent;
      if (name_value.indexOf(keyword) > -1) {
        all_tr[i].style.display = ""; // show
      } else {
        all_tr[i].style.display = "none"; // hide
      }
    }
  }
});

search2.addEventListener("input", function () {
  var keyword = this.value;
  keyword = keyword.toUpperCase();
  var table_1 = document.getElementById("storeList");
  var all_tr = table_1.getElementsByTagName("tr");
  for (var i = 0; i < all_tr.length; i++) {
    var name_column = all_tr[i].getElementsByTagName("td")[4];
    if (name_column) {
      var name_value = name_column.textContent;
      name_value = name_value.toUpperCase();
      if (name_value.indexOf(keyword) > -1) {
        all_tr[i].style.display = ""; // show
      } else {
        all_tr[i].style.display = "none"; // hide
      }
    }
  }
});

function strikeThrough() {
  console.log("stri");
  for (i = 0; i < array.length; i++) {
    if (new Date(currentformattedDate) > new Date(array[i].age) || array[i].gender == "Completed") {
      console.log("lahan");
      var table = document.getElementById("storeList");
      var rows = table.getElementsByTagName("tr");
      console.log(rows[i + 1]);
      console.log(rows[i + 1].getElementsByTagName("td")[5].children[0]);
      var the = rows[i + 1].getElementsByTagName("td")[5].children[0];
      the.style.display = "none";
      rows[i + 1].style.textDecoration = "line-through";
    }
  }
}

function strikeThrough1(data) {
  for (i = 0; i < array.length; i++) {
    if (new Date(currentformattedDate) > new Date(array[i].age) || array[i].gender == "Completed") {
      console.log("lahan");
      var table = document.getElementById("storeList");
      var rows = table.getElementsByTagName("tr");
      rows[i + 1].style.textDecoration = "line-through";
      console.log(rows[i + 1].getElementsByTagName("td")[5].children[0]);
      var the = rows[i + 1].getElementsByTagName("td")[5].children[0];
      the.style.display = "none";
    }
  }
}

let infobox = document.querySelector(".infobox");
let empPortal = document.getElementById("empPortal");
let select = document.getElementById("select");
let empRec = document.getElementById("empRec");
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let dates1 = document.getElementById("dates1");
let dates2 = document.getElementById("dates2");

function light() {
  document.body.style.backgroundImage =
    "url('sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg')";
  infobox.style.backgroundColor = "#F5F5ED";
  empPortal.style.color = "black";
  eid.style.backgroundColor = "#F5F5ED";
  name.style.backgroundColor = "#F5F5ED";
  age.style.backgroundColor = "#F5F5ED";
  select.style.backgroundColor = "#F5F5ED";
  eid.style.color = "black";
  name.style.color = "black";
  age.style.color = "black";
  select.style.color = "gray";
  empRec.style.color = "black";
  sun.style.display = "none";
  moon.style.display = "block";
  dates1.style.color = "black";
  dates2.style.color = "black";
}
function dark() {
  document.body.style.backgroundImage =
    "url('elliott-engelmann-DjlKxYFJlTc-unsplash.jpg')";
  infobox.style.backgroundColor = "black";
  empPortal.style.color = "white";
  eid.style.backgroundColor = "black";
  name.style.backgroundColor = "black";
  age.style.backgroundColor = "black";
  select.style.backgroundColor = "black";
  eid.style.color = "white";
  name.style.color = "white";
  age.style.color = "white";
  select.style.color = "gray";
  empRec.style.color = "white";
  moon.style.display = "none";
  sun.style.display = "block";
  dates1.style.color = "white";
  dates2.style.color = "white";
}
