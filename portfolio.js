var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function openTab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-links")
    }
    for(tablecontent of tabcontents)
    {
        tablecontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu=document.getElementById("sidemenu");
function openMenu()
{
 sidemenu.style.right="0";   
}
function closeMenu()
{
    
        sidemenu.style.right="-200px";   
    
}

// contact form

function validateForm(){
let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let message=document.getElementById("message").value.trim();
let feedback = document.getElementById("feedback");

if (name === "" || email === "" || message === "") {
  feedback.innerHTML = "All fields are required!";
  feedback.className = "error";
} else {
  feedback.innerHTML = "Form submitted successfully!";
  feedback.className = "success";


}
}










