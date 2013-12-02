var serviceURL = "http://127.0.0.1:3000/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'empleados', function(data) {
		$('#employeeList li').remove();
		employees = data;
		console.log(data);
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee._id + '">' +
					'<img src="pics/' + employee.img + '"/>' +
					'<h4>' + employee.nombre + ' ' + employee.apellidos + '</h4>' +
					'<p>' + employee.titulo + '</p>' + '<p>' + employee.email + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}