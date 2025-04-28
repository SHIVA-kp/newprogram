let departmentName = [
    { departmentName: "Computer Science", location: "Building A", students: [21, 22, 20, 23, 22] },
    { departmentName: "Mechanical", location: "Building B", students: [24, 25, 24, 23] },
    { departmentName: "Civil", location: "Building C", students: [22, 22] }
  ];

  function TotalStudent(departments) {
    let totals = {};
    department.forEach(dept => {
        totals[dept.departmentName] = dept.students.length;
    });

    console.log(totals);
  }

  function MaxDepartment(departments) {
    let maxDept = departments[0];
    for(let dept of departments){
        if(dept.students.length > maxDept.students.length){
            maxDept = dept;
        }
    }
    return {name: maxDept.departmentName, count: maxDept.students.length };
  }

  function DepartmentsWithLessThan30(departments){
    return departments
    .filter(dept => dept.students.length<30)
    .map(dept => dept.departmentName);
  }

  const totals = TotalStudent(departments);
  console.log("Total students:");
  for(count [name, count] of Object.entries(totals)) {
    console.log(`${name}: ${count}`);
  }
  const maxDept = MaxDepartment(departments);
  console.log('/nDepartment with max student: "${masDept.name}"(${maxDept.count} student');

  const smallDepartment = DepartmentsWithLessThan30(departments);
  console.log("/nDepartments with less than 30 students: ", smallDepartment)