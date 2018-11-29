const loginform = function loginform(){
	 
	    let embededform="<div class=\"col-10 regform animated pulse \" ><br><form action=\"Profile.html\" method=\"Get\">"+
		             "<div class=\"col-11 formheader\"><center><h2>Login Form</h2></center></div>"+
                     "<div class=\"col-11\">Username:<br><input type=\"text\" class=\"col-12 inputform\"/></div>"+
                     "<div class=\"col-11\">Password: <br><input type=\"password\" class=\"col-12 inputform\"/></div>"+
                     "<div class=\"col-11\"><br> <input type=\"submit\" class=\"col-12 buttonform\"/></div>"+
                     "</form>"+
                     "<br>"+
                     "</div>";
	    
		 document.getElementById("imagewrapper").style.height="800px";
		 document.getElementById("imagewrapper").style.transition="1s";
	     document.getElementById("formreceiver").innerHTML=embededform;
	 };

const registerform=function registerform(){
	 
	    let embededform="<div class=\"col-10 regform animated pulse \">"+
                    "<br>"+
                    "<form action=\"Profile.html\" method=\"Get\">"+
					"<div class=\"col-11 formheader\"><center><h2>Signup Form</h2></center></div>"+
                    "<div class=\"col-11\">Name:<br><input type=\"text\" class=\"col-12 inputform\"/></div>"+
                    "<div class=\"col-11\">Address: <br><input type=\"password\" class=\"col-12 inputform\"/></div>"+
                    "<div class=\"col-11\">Email:<br><input type=\"text\" class=\"col-12 inputform\"/></div>"+
                    "<div class=\"col-11\">Telephone: <br><input type=\"password\" class=\"col-12 inputform\"/></div>"+
                    "<div class=\"col-11\">Username:<br><input type=\"text\" class=\"col-12 inputform\"/></div>"+
                    "<div class=\"col-11\">Password: <br><input type=\"password\" class=\"col-12 inputform\"/></div>"+
                    "<div class=\"col-11\"><br> <input type=\"submit\" class=\"col-12 buttonform\"/></div>"+
                    "</form>"+
                    "<br>"+
                    "</div>";
					
	     document.getElementById("imagewrapper").style.height="1000px";
		 document.getElementById("imagewrapper").style.transition="1s";
	     document.getElementById("formreceiver").innerHTML=embededform;
	 };