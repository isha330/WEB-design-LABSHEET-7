let students = [];

function addStudent() {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const course = document.getElementById("course").value.trim();

    if (!name || !age || !course) {
        alert("Please fill all fields");
        return;
    }

    const student = { name, age, course };
    students.push(student);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";

    displayStudents();
}

function displayStudents() {
    const tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;

        tbody.appendChild(row);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}