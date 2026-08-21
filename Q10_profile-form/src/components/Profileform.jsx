import { useState } from "react";

function Profile(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [city,setCity] = useState("");
    const [course,setCourse] = useState("");
    const [submitted,setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

  return (
    <div>
        <h2>Profile Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Age:</label>
                <input type="age" value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div>
                <label>City:</label>
                <input type="city" value={city} onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div>
                <label>Course:</label>
                <input type="course" value={course} onChange={(e) => setCourse(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
        {submitted && (
            <div>
                <p>Candidates name is {name} and the age is {age} of city {city} is pursuing course {course}</p>
            </div>
        )}
    </div>
  )
}

export default Profile