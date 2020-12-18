
	function validateForm(){
	var field = document.forms["form-1"]["name-1"].value;
	if (field == null || field == ""){
		alert("فیلد نام نباید خالی باشد");
		return false;
	  }
	}

