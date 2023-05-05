const Maps = ()=>{
    let students = ['John','Mary','Samuel','Susan'];
    return(
        <div>
            {students.map((student)=>{
                <h1>{student}</h1>
            })}
        </div>
    );
}

export default Maps;