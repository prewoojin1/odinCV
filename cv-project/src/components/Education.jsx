import { useState } from 'react'

function Education() {
    const [education, setEducation] = useState({schoolName:"", titleOfStudy:"", dateOfStudy:""})
    const [edit, setEdit] = useState(true);

    return(
        edit ? 
            (
                <div className="education-form">
                    <label>
                        School Name:
                        <input
                            type="text"
                            value={education.schoolName}
                            onChange={(e) => setEducation({...education, schoolName: e.target.value})}
                        />
                    </label>
                    <label>
                        Title of Study:
                        <input
                            type="text"
                            value={education.titleOfStudy}
                            onChange={(e) => setEducation({...education, titleOfStudy: e.target.value})}
                        />
                    </label>
                    <label>
                        Date of Study
                        <input
                            type="text"
                            value={education.dateOfStudy}
                            onChange={(e) => setEducation({...education, dateOfStudy:e.target.value})}
                        />
                    </label>
                    <button type="button" onClick={() => setEdit(!edit)}>
                        Submit
                    </button>
                </div>
            )
            :
            (
                <div className="education-preview">
                    <h3>School Name: {education.schoolName}</h3>
                    <h3>Title of Study: {education.titleOfStudy}</h3>
                    <h3>Date of Study: {education.dateOfStudy}</h3>
                    <button type="button" onClick={() => setEdit(!edit)}>
                        Edit
                    </button>
                </div>
            )
    )
}

export default Education;