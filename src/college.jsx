import { Student } from "./user";

const College = ({ college }) => {
    return (
        <div style={{
            backgroundColor: " #ccc",
            padding: "20px",
            borderBottom: "9px solid #black",
            margin: "20px",
            borderRadius: "5px",
            width: "30%"
        }}>
            <h2>Name: {college.Name}</h2>
            <ul>
                <li>
                    <h3>city: {college.city}</h3>
                </li>
                <li><h3>website: {college.site}</h3></li>

                <h3>Students</h3>
                {
                    college.Student.map((Student)=>(
                        <ul>
                            <li>student: {Student.name}</li>
                        </ul>

                    ))
                }
            </ul>
        </div>
    )
}

export default College;