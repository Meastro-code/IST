const Maps = ()=>{
    let students = ['John','Mary','Samuel','Susan'];
    let studentList = students.map((student)=>(<h3 key={student}>{student}</h3>))
    return(
        <div>
            {students.map((student)=>(
            <h1>{student}</h1>
            ))}
            {studentList}
        </div>
    );
}

export default Maps;