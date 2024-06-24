import './profileInfo.styles.css'

export const Header = () => {
    return (
        <div className="top">               
        <div className="column-one">
            <h1>Hi, I am Natasa,<br/> Creative technologist</h1>
            <p className="top-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.
            </p>
        </div>    
        <div className="column-two">
            <img className="profile-photo" src="https://thumbs.dreamstime.com/b/beautiful-smiling-woman-portait-beauty-face-115726247.jpg" alt="profile photo" />
        </div>
    </div>  
    )
}