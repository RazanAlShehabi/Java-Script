function addStudent(students, id, name) {
  try {
      const existingStudent = students.find(student => student.id === id);
      if (existingStudent) {
          throw new Error("معرف الطالب موجود بالفعل في القائمة");
}
      students.push({ id: id, name: name, status: "مسجل" });
      console.log(`تم إضافة الطالب ${name} بنجاح.`);
} catch (error) {
      console.error("خطأ: " + error.message);
}
}
function removeStudent(students, id) {
  try {
      const index = students.findIndex(student => student.id === id);
      if (index === -1) {
          throw new Error("لا يمكن العثور على الطالب في القائمة");
}
      const removedStudent = students.splice(index, 1);
      console.log(`تم حذف الطالب ${removedStudent[0].name} بنجاح.`);
} catch (error) {
      console.error("خطأ: " + error.message);
}
}
function printStudents(students) {
  console.log("قائمة الطلاب:");
  students.forEach(student => {
      console.log(`المعرف: ${student.id}, الاسم: ${student.name}, الحالة: ${student.status}`);
  });
}
let students = [
  { id: 1, name: "أميرة", status: "مسجل" },
  { id: 2, name: "سدرة", status: "غير مسجل" }
];
addStudent(students, 3, "جنى");
addStudent(students, 1, "نور"); 
printStudents(students);
removeStudent(students, 2); 
removeStudent(students, 4);
printStudents(students);