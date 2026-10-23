import { useState } from 'react'

function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({name:"", email:"", phone:""});
    const [edit, setEdit] = useState(true);

    return (
        (edit ? (
        <div className="generalInfo-form">
            <label>
                Name:
                <input
                    type="text"
                    value={generalInfo.name}
                    onChange={(e) => setGeneralInfo({...generalInfo, name:e.target.value})}
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    value={generalInfo.email}
                    onChange={(e) => setGeneralInfo({...generalInfo, email:e.target.value})}
                />
            </label>
            <label>
                Phone Number:
                <input
                    type="text"
                    value={generalInfo.phone}
                    onChange={(e) => setGeneralInfo({...generalInfo, phone:e.target.value})}
                />
            </label>
            <button type="button" onClick={() => setEdit(!edit)}>
                {edit ? "Submit" : "Edit"}    
            </button>
        
        </div>
        )
        :(
        <div className="generalInfo-preview">
            <h3>Name: {generalInfo.name}</h3>
            <h3>Email: {generalInfo.email}</h3>
            <h3>Phone Number: {generalInfo.phone}</h3>
            <button type="button" onClick={() => setEdit(!edit)}>
                {edit ? "Submit" : "Edit"}
            </button>
        </div>
        )
    ))
}

export default GeneralInfo;