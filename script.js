$(function() {
	var roll_no = $('input[name = roll_no]');
	var name = $('input[name = name]');
	var DOB = $("input[type = date]");
	var dept = $('#dept_id');
	var year_id = $('#year');

	var student;

	$('#add').click(function() {
		student = {
			roll_no : roll_no.val(),
			name : name.val(),
			DOB : DOB.val(),
			dept_id : parseInt(dept.val()),
			year_id : parseInt(year_id.val())
		};
		console.log(student);
		$.ajax({
			url: '/addstudent',
			method: 'POST',
			contentType : 'application/json',
			data : JSON.stringify(student),
			success : function (response) {
				console.log(response);
			},
			error : function (e, ts, et) {
				console.log("some error" + ts + et);
			}
		});
		
	});
});