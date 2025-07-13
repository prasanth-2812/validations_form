document.getElementById("submit").addEventListener("click", myfunction);


function myfunction()
        {
        document.querySelectorAll(".warning").forEach(p => p.remove());
        function ErrorMsg(element, message) {
        element.style.border = "1px solid red";
        var warning = document.createElement("p");
        warning.style.color = "red";
        warning.className = "warning";
        warning.innerText = message;
        element.insertAdjacentElement('afterend',warning);
    }
    
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var dob = document.getElementById("dob");
    var gender = document.getElementsByName("gender");
    var email = document.getElementById("email");
    var email2 = document.getElementById("alt_email");
    var phone = document.getElementById("phone");
    var phone2 = document.getElementById("alt_phone");
    var presentAddress = document.getElementById("present_address");
    var permanentAddress = document.getElementById("permanent_address");
    var qualification = document.getElementById("qualification");
    var marks = document.getElementById("marks");
    var course = document.getElementById("course");
    var photo = document.getElementById("photo");
    var sign = document.getElementById("sign");
    var markssheet = document.getElementById("marksheet");
    var IdProof = document.getElementById("id_proof");
    var checkbox = document.getElementById("checkbox");
    var pincode = document.getElementById("pincode");
    var pincode2 = document.getElementById("pincode2");
    var Terms = document.getElementById("Terms");

    if (fname.value==="") {
     ErrorMsg(fname,"Please Enter Your first Name!")
    }
    else if(!/^[a-zA-Z\s]{3,}$/.test(fname.value)){
            ErrorMsg(fname,"Please Enter valid first Name!")
        }
      
    if (lname.value===""){
     ErrorMsg(lname,"Please Enter Valid last name!")
        }
     else if(!/^[a-zA-Z\s]{3,}$/.test(lname.value)){
            ErrorMsg(lname,"Please Enter valid Last Name!")
        }
    
    if (dob.value===""){
     ErrorMsg(dob,"please Enter Your DOB In Valid formate")
    }

   var selected = false;
   for(var i=0; i<gender.length; i++){
    if(gender[i].checked){
        selected = true;
        break;
    }
   }
   if(!selected){
        ErrorMsg(document.querySelector('.gender'), "please select your gender");
    }


    if (email.value==="") {
     ErrorMsg(email,"Please Enter Valid email...!")
        }
       else if(!/^\S+@\S+\.\S+$/.test(email.value)){
            ErrorMsg(email,"Please Enter Valid email...!")
        }
    
    if (email2.value !=="" ) {
       if(!/^\S+@\S+\.\S+$/.test(email2.value)){
       ErrorMsg(email2,"Please Enter Valid Alternate email...!")
    }
    }
    
   
    if (phone.value==="") {
     ErrorMsg(phone,"Please Enter Your Mobile Number!")
        }
    else if(!/^\d{10}$/.test(phone.value)){
        ErrorMsg(phone,"Please Enter 10 Digit Mobile Number!")
    }
    if (phone2.value !=="") {
       if(!/^\d{10}$/.test(phone2.value)){
        ErrorMsg(phone2,"Please Enter 10 Digit Mobile Number!")
    }
    }
    else 
    if (presentAddress.value===""){
     ErrorMsg(presentAddress,"Please Enter Your Present Address!")
    }
    else if(!/^[a-zA-Z0-9\s,.\-\/]+$/.test(presentAddress.value)){
        ErrorMsg(presentAddress,"Please Enter Your Address In Valid Formate!")
    }
     if (pincode.value==="") {
        ErrorMsg(pincode,"Please Enter Valid Pincode!")
    }
    else if(!/^\d{6}$/.test(pincode.value)){
        ErrorMsg(pincode,"Please Enter Valid Pincode!")
    }
    
    if(permanentAddress.value==="" || !/^[a-zA-Z0-9\s,.\-\/]+$/.test(permanentAddress.value)){
     ErrorMsg(permanentAddress,"Please Enter Your Permanent Address!")
    }
    if (pincode2.value !=="") {
        if(!/^\d{6}$/.test(pincode2.value)){
        ErrorMsg(pincode2,"Please Enter Valid Pincode!")
        }
    }
    if (qualification.value===""){
        ErrorMsg(qualification,"please Enter Your Qualification")
    }
    if (marks.value==="") {
        ErrorMsg(marks,"please Enter Your marks/percentage")
    }
    else if(!/^\d{}$/.test(marks.value)){
        ErrorMsg(marks,"Enter marks/percentage in Valid Formate...!")
    }
    if(course.value===""){
        ErrorMsg(course,"Please Choose The Course!")
    }
    if(photo.value==="")
    {
        ErrorMsg(photo,"Please Upload Your Photograph")
    }
     if(sign.value==="")
    {
        ErrorMsg(sign,"please Upload Your Signature")
    }
    if(markssheet.value===""){
        ErrorMsg(markssheet,"Please Upload Your Marksheet")
    }
    if(IdProof.value===""){
        ErrorMsg(IdProof,"Please Upload Your ID Proof")
    }


var allowedTypes = ["image/jpeg", "image/png"];
var maxImageSize = 2 * 1024 * 1024;
var allowedPdfType = "application/pdf";
var maxPdfSize = 5 * 1024 * 1024; 


if (photo.files.length > 0) {
    var photoFile = photo.files[0];
    if (allowedTypes !== (photoFile.type)) {
        ErrorMsg(photo, "Only JPEG and PNG images are allowed");
    }
   else if (photoFile.size > maxImageSize) {
        ErrorMsg(photo, "File size must be less than 2MB");
    }
}


if (sign.files.length > 0) {
    var signFile = sign.files[0];
    if (!allowedTypes !== (signFile.type)) {
        ErrorMsg(sign, "Only JPEG and PNG images are allowed");
    }
    else if (signFile.size > maxImageSize) {
        ErrorMsg(sign, "File size must be less than 2MB");
    }
}


if (markssheet.files.length > 0) {
    var marksheetFile = markssheet.files[0];
    if (marksheetFile.type !== allowedPdfType) {
        ErrorMsg(markssheet, "Only PDF files are allowed");
    }
   else if (marksheetFile.size > maxPdfSize) {
        ErrorMsg(markssheet, "File size must be less than 5MB");
    }
}


    if (IdProof.files.length > 0) {
        var idProofFile = IdProof.files[0];
    if (idProofFile.type !== allowedPdfType) {
        ErrorMsg(IdProof, "Only PDF files are allowed");
    }
   else if (idProofFile.size > maxPdfSize) {
        ErrorMsg(IdProof, "File size must be less than 5MB");
    }
}
    if(!checkbox.checked){
        ErrorMsg(Terms,"Please Accept Terms & Conditions")
    }
   
        }
