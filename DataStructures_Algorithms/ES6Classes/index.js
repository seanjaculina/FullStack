class Student {
  //default grade arg
  constructor (fname, lname, grade = 10) {
    this.fname = fname;
    this.lname = lname;
    this.grade = grade;
  }

  getName () {
    return this.fname + ' ' + this.lname;
  }

  getGrade () {
    return `${this.fname} is in grade ${this.grade}`;
  }
}

//must use new to instantiate a new class: just like Java
let st = new Student ('Tanner', 'Barcelos');
console.log (st.getName ());
console.log (st.getGrade ());
