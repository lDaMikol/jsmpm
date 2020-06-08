const employee = {
  firstName: 'John',
  lastName: 'Cooper',
  title: 'Senior Director',
  getTitle: function() {
    return console.log(this.title);
  }
};

employee.getTitle();
//review prototype
// const employee2 = Object.create(employee);
// employee2.name
//employee2.name = 'Peter';
//Object.setPrototypeOf(student, person);