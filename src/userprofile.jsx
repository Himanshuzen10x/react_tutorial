import { useState } from "react";
import "./userprofile.css";
import styles from './userprofile.module.css'

function UserProfile() {

    const [cardStyle, setcardStyle] = useState({
        border: "2px solid black",
        padding: "10px",
        width: "200px",
        boxShadow: "2px 2px 2px 2px green"

    });

    const [textColor, settextColor] = useState('red');
    const [grid, setgrid] = useState(true);

    const updateTheme = (bgcolor, textcolor) => {
        setcardStyle({ ...cardStyle, backgroundColor: bgcolor })



    }

    return (
        <>
            <h1>Dynamic and Conditional Inline Style</h1>
            <button onClick={() => updateTheme('grey', 'blue')}>Gray Theme</button>
            <button onClick={() => updateTheme('white', 'black')}>Default theme</button>
            <button onClick={() => setgrid(!grid)}>Toggle Grid</button>


            <div style={{
                display: grid ? 'flex' : 'block', flexWrap: "wrap"
            }}>
                <div style={cardStyle
                }>

                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
                    <div style={{
                        textAlign: "center",
                        color: textColor

                    }}>
                        <h3>Himanshu khare</h3>
                        <p>Software Engineer</p>
                    </div>
                </div>

                <div style={cardStyle}>

                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
                    <div style={{
                        textAlign: "center",

                    }}>
                        <h3>Himanshu khare</h3>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cardStyle}>

                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
                    <div style={{
                        textAlign: "center",

                    }}>
                        <h3>Himanshu khare</h3>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cardStyle}>

                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
                    <div style={{
                        textAlign: "center",

                    }}>
                        <h3>Himanshu khare</h3>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cardStyle}>

                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
                    <div style={{
                        textAlign: "center",

                    }}>
                        <h3>Himanshu khare</h3>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cardStyle}>

                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
                    <div style={{
                        textAlign: "center",

                    }}>
                        <h3>Himanshu khare</h3>
                        <p>Software Engineer</p>
                    </div>
                </div>
            </div>
            {/* // Inline styling */}

            {/* external css */}
            <hr />
            <div className="heading">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
                <div>
                    <h3>Himanshu khare</h3>
                    <p>Software Engineer</p>
                </div>
            </div>


{/* CSS Modules */}
            <div className={styles.card}>
                <h2 className={styles.heading}>Himanshu</h2>
            </div>

        </>


    )
}

export default UserProfile;