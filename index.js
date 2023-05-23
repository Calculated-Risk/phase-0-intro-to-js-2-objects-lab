// Write your solution in this file!
const employee = {
    name: 'Edwin Soto',
    streetAddress: '123 Palisade Ave'
}

// this function should take in three arguments: 
// an employee Object, a key and a value. 
///This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!

function updateEmployeeWithKeyAndValue(obj, key, value){
   let newEmployee = {...employee};
   newEmployee[key] = value
   return newEmployee
}
// work the same as above but mutate the employee object
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]= value;
    return obj
}

// should take in employee obj and key. Should delete the property with that key and not mutate original
function deleteFromEmployeeByKey(obj, key){
    let arrayNew = {...obj};
    delete arrayNew[key]
    return arrayNew
}
// this function should work the same as above but mutate original 
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}