var employees = []

function Person(name,jobTitle,salary,status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    // this.print = function(){
    //     console.log(this.name)
    //     console.log("---------")
    //     console.log(this.jobTitle)
    //     console.log(this.salary)
    //     console.log(this.status)
    //     console.log("==========")
    // }
}

// function printEmployeeForm(){
//     // console.log(this.name)
//     console.log(jobTitle)
// }

Person.prototype.print = function(){
    console.log(this.name + " " + this.jobTitle + " " + this.salary + " " + this.status)
}

var bob = new Person("Bob","Cool Guy", "$100,000", "Full Time")
var jill = new Person("Jill", "Cool Gal", "$100,000", "Full Time")
var zildana = new Person("Zildana", "Cool Kid", "$100,000", "Contract")

bob.print()
jill.print()
zildana.print()

employees.push(bob,jill,zildana)

console.log(employees)