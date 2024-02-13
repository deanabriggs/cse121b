// object literal to represent a course
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    // add a sections property to the object (an array)
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A",
        },
    ],

    // Adds a method to the object that will allow us to add a student to a section
    enrollStudent: function (sectionNum) {
        // find the right section
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },

    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex > 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },

    changeEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.section.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (setionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections);
        }
    }
};

// Function - Sets the name and number of the course in HTML. 
function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

// Function - outputs the sections into the table identified by #sections
// Note - "th" = table header, "tr" = table row, "td" = table data(cell)
function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});

// Pass the course object into the function.
setCourseInfo(aCourse);
renderSections(aCourse.sections);