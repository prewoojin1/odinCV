import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
    return(
        <div className="App">
            <h1>CV Application</h1>

            <GeneralInfo />
            <Education />
            <Experience />
        </div>
    )
}

export default App;