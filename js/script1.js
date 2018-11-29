function initMap() {
              let map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: -1.9706, lng: 30.1044},
               zoom: 8
              });
           }

function viewdata(a){
	    var b=a;
		
		
		var result="<table class=\"resulttable\" style=\"background:#ffffff;\">"
		
		    for(x in userjason.username.Orders[b]){
			    result=result+"<tr><td>"+x+"</td><td>"+userjason.username.Orders[b][x]+"</td></tr>";
			}
		
		result=result+"</table>"
	    document.getElementById("result").innerHTML=result;
	}

function cancelorder(a){
	    var b=a;
		
		
		var result="<table class=\"resulttable\" style=\"background:#ffffff;\">"
		
		    for(x in userjason.username.Orders[b]){
			    result=result+"<tr><td>"+x+"</td><td>"+userjason.username.Orders[b][x]+"</td></tr>";
			}
		
		result=result+"</table>";
		result=result+"<br><span>Are you sure to cancel the order?</span><br><form><button class=\"buttcancelconfirm\">Yes, Proceed</button></form>";
		
	    document.getElementById("result").innerHTML=result;
	}
	
	function changedestination(a){
		
		var result=
		"<center><div class=\"col-10\">"+
		"<form class=\"leftcentclass\">"+
		"<span>Parcel Description</span><br><textarea placeholder=\"\" class=\"inputform1\" disabled>"+userjason.username.Orders[a]["Info"]+"</textarea><br>"+
		"<span>Parcel Weight</span><br><input type=\"number\" placeholder=\""+userjason.username.Orders[a]["Weight"]+"\" class=\"inputform1\" disabled/><br>"+
		"<span>Receiver Name</span><br><input type=\"text\" placeholder=\""+userjason.username.Orders[a]["Receiver"]+"\"class=\"inputform1\" disabled/><br>"+
		"<span>Receiver Number</span><br><input type=\"text\" placeholder=\""+userjason.username.Orders[a]["Phone"]+"\" class=\"inputform1\" disabled/><br>"+
		"<span>Departure</span><br><input type=\"text\" placeholder=\""+userjason.username.Orders[a]["Departure"]+"\" class=\"inputform1\" disabled/><br>"+
        "<span>Destination</span><br><input type=\"text\" placeholder=\""+userjason.username.Orders[a]["Destination"]+"\" class=\"inputform1\"/><br>"+		
		"<br>"+
		"<div id=\"map\"></div>"+
		"<Span> Details on pricing</span><br><br>"+
		"<input type=\"submit\" value=\"Update Destination\" class=\"buttonform inputform1\"></form></div></center>";
		
		document.getElementById("result").innerHTML=result;
	}