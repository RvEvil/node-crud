const getStudents = "SELECT * FROM students"
const getStudentById = "SELECT * FROM students where id= $1"
const checkEmailExists = "SELECT st from students st where st.email=$1"
const addStudent =
	"insert into students(name,email,age,dob) values($1,$2,$3,$4)"
const removeStudent = "DELETE FROM students WHERE id=$1"
const updateStudent = "UPDATE students SET name =$1 where id = $2"

module.exports = {
	getStudents,
	getStudentById,
	checkEmailExists,
	addStudent,
	removeStudent,
	updateStudent,
}
