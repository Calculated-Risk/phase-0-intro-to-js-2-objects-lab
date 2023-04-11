// Write your solution in this file!
const employee = {
    name: 'Edwin',
    streetAddress: "123 Main Street"
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value){
        const newEmployee = {
            ...employee};

             newEmployee[key] = value;
           return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
        employee[key] = value;
        return employee;
}

function deleteFromEmployeeByKey(employee, key){
      const newDeleted = {
        ...employee}
        delete newDeleted[key];
        return newDeleted;
    

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}