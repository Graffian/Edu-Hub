import "./Profile.css"
import Edit from "../../assets/edit.svg"
function Profile(){
    return(
        <nav className="entire-nav">
        <nav className="profile-nav">
        <p className="profile-title">PROFILE</p>
        <span className="img-span"><img src="https://placehold.co/180x180"/><img className="edit-icon" src={Edit}/></span>
            <div className="profile-details-left">

                <label htmlFor="name" className="name-label">NAME</label>
                <input className="name-input" id="name"/>
                <label htmlFor="college" className="college-label">COLLEGE/SCHOOL</label>
                <input id="college" className="college-input"/>
                <label htmlFor="college" className="college-label">CITY</label>
                <input id="college" className="college-input"/>
            </div>
            <div className="profile-details-right">
                <label htmlFor="name" className="name-label">AGE</label>
                <input className="name-input" id="name"/>
                <label htmlFor="college" className="college-label">GRADUATION/PASSOUT YEAR</label>
                <input id="college" className="college-input"/>
                <label htmlFor="college" className="college-label">COMPETITIVE EXAMS</label>
                <input id="college" className="college-input"/>
            </div>
        </nav>
        <nav className="info-nav">
            <div className="course-info">
                <p className="course-text">COURSES TAKEN</p>
                <p className="course-evaluation">30</p>
            </div>
            <div className="course-info">
                <p className="course-text">LECTURES ATTENDED</p>
                <p className="course-evaluation">30</p>
            </div>
            <div className="course-info">
                <p className="course-text">PROGRESS</p>
                <p className="course-evaluation">100%</p>
            </div>
        </nav>
        <div className="button-div">
            <button className="save-button">SAVE</button>
            <button className="save-button">CANCEL</button>
        </div>
        </nav>
    )
}
export default Profile