let names = ["Klara", "Andrea", "Emil", "Sarah", "Alicia", "Victor", "Thomas", "Robert"];
let grades = ["A", "B", "C", "A", "D", "C", "E", "E"];
      
      function getGrade() {
        let name = document.getElementById("name").value;
        let index = names.indexOf(name);
        if (index !== -1) {
          let grade = grades[index];
          document.getElementById("result1").innerHTML = name + " has the grade " + grade;
        } else {
          document.getElementById("result1").innerHTML = "There is no student with that name";
        }
      }

      function getNames() {
        let grade = document.getElementById("grade").value;
        let matchingNames = [];
        for (let i = 0; i < grades.length; i++) {
          if (grades[i] === grade) {
            matchingNames.push(names[i]);
          }
        }
        if (matchingNames.length > 0) {
          let namesString = matchingNames.join(", ");
          document.getElementById("result2").innerHTML = "Students with grade " + grade + ": " + namesString;
        } else {
          document.getElementById("result2").innerHTML = "No students has the grade " + grade;
        }
      }