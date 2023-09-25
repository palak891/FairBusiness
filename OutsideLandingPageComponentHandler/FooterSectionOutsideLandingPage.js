import React from 'react'
import './FooterSectionOutsideLandingPage'
function FooterSectionOutsideLandingPage() {
    const buttonStyle = {
        marginLeft: "100px",
        marginBottom: "40px",
        padding: "15px 25px",
        borderColor: "#041D52",
        color: "#041D52",
        // fontWeight:"10px"
        borderWidth: "3px"
    }
    return (
        <div className="container-Outside" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
            <h3 style={{ marginLeft: "100px", marginTop: "50px", color: "#7A5604" }}>LET'S TALK</h3>
            <h1 style={{ marginLeft: "100px", color: "#041D52" }}>We would love to <br></br>hear from you!</h1>
            <button style={buttonStyle}>Get in touch</button>

        </div>
    )
}
export default FooterSectionOutsideLandingPage;