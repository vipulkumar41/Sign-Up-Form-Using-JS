var selectedRow = null

function onFormSubmit() {
      if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
           insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
     }
}
let formData = new Array();
var pin;
function tan() {
   document.getElementById("tablerows").innerHTML = "";
   if (localStorage.formdata) {
      formData = JSON.parse(localStorage.formdata);
      for (var i = 0; i < formData.length; i++) {
         insertnewdata(i, formData[i].firstName, formData[i].lastName, formData[i].emailId, formData[i].mobile);
      }
   }
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["emailId"] = document.getElementById("emailId").value;
    formData["mobile"] = document.getElementById("mobile").value;
    localStorage.formdata = JSON.stringify(formData);
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("SignUpData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.emailId;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.mobile;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

   function resetForm() {
       document.getElementById("firstName").value = "";
       document.getElementById("lastName").value = "";
       document.getElementById("emailId").value = "";
       document.getElementById("mobile").value = "";
       document.getElementById("password").value = "";
       document.getElementById("cpassword").value = "";


       selectedRow = null;
   }

   function onEdit(td) {
       selectedRow = td.parentElement.parentElement;
       document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
       document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
       document.getElementById("emailId").value = selectedRow.cells[2].innerHTML;
       document.getElementById("mobile").value = selectedRow.cells[3].innerHTML;

   }
   function updateRecord(formData) {
       selectedRow.cells[0].innerHTML = formData.firstName;
       selectedRow.cells[1].innerHTML = formData.lastName;
       selectedRow.cells[2].innerHTML = formData.emailId;
       selectedRow.cells[3].innerHTML = formData.mobile;
       return formData;

    }

   function onDelete(td) {
       if (confirm('Are you sure to delete this record ?')) {
           row = td.parentElement.parentElement;
           document.getElementById("SignUpData").deleteRow(row.rowIndex);
       }
       formData.splice(index, 1);
   localStorage.formData = JSON.stringify(formData);
   tan();
   }
   

    function validate() {

    var name =  document.getElementById("firstName").value;

    
        if (name==null || name==""){  
            alert("Name can't be blank");  
            return false;  
        } 
      
        var emailId = document.getElementById("emailId").value;

        var atposition=emailId.indexOf("@");  
        var dotposition=emailId.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=emailId.length){  
        alert("Please enter a valid e-mail address");  
        return false;  
        }
 
        var mobile = document.getElementById("mobile").value;
        if(mobile.length != 10) {
           alert("InValid Mobile Number");
           return false;
        }

        //password validation
        var password = document.getElementById("password").value;
        var conpassword = document.getElementById("cpassword").value;

        if(password.length <5){
            alert("password length is too short!");  
            return false;
        }

        if(password==conpassword){  
            return true;  
        }  
        else{  
            alert("password must be same!");  
            return false;  
        }  
        
     
 
     
    }