import { useState } from 'react'

function Experience() {
    const [experience, setExperience] = useState({companyname:"", positiontitle:"", mainresponsibilities:"", datefromuntil:""});
    const [edit, setEdit] = useState(true);
    
    return(
        edit ? (
        <div className="experience-form">
            <label>
                Company Name:
                <input
                    type="text"
                    value={experience.companyname}
                    onChange={(e) => setExperience({...experience, companyname:e.target.value})}
                />
            </label>
            <label>
                Position Title:
                <input
                    type="text"
                    value={experience.positiontitle}
                    onChange={(e) => setExperience({...experience, positiontitle:e.target.value})}
                />
            </label>
            <label>
                Main Responsibilities:
                <input
                    type="text"
                    value={experience.mainresponsibilites}
                    onChange={(e) => setExperience({...experience, mainresponsibilities:e.target.value})}
                />
            </label>
            <label>
                Date From and Until when you worked for that Company:
                <input
                    type="text"
                    value={experience.datefromuntil}
                    onChange={(e) => setExperience({...experience, datefromuntil:e.target.value})}
                />
            </label>
            <button type="button" onClick ={() => setEdit(!edit)}>
                Submit
            </button>
        </div>
        ) : (
            <div className="experience-preview">
                <h3>Company Name: {experience.companyname}</h3>
                <h3>Position Title: {experience.positiontitle}</h3>
                <h3>Main Responsibilities: {experience.mainresponsibilities}</h3>
                <h3>Date From and Until when you worked for that Company: {experience.datefromuntil}</h3>
                <button type="button" onClick={() => setEdit(!edit)}>
                    Edit
                </button>
            </div>
        )
    )
}

export default Experience;