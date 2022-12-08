// Write your solution in this file!
const employee = { name: "esra", streetAddress: "yıldız" };
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee = { ...employee };
  employee[key] = value;
  return employee;
};
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};
const deleteFromEmployeeByKey = (employee, key) => {
  employee = { ...employee };
  employee[key] = undefined;
  return employee;
};
const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  employee[key] = undefined;
  return employee;
};
