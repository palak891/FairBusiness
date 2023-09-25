import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    time: "",
    date: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const completeContainer = {
    backgroundColor: "#DFDDD9",
    marginTop: "0"
  }


  const containerStyle = {
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: "#DFDDD9",
    // marginTop:"20px"
  };

  const textContainerStyle = {
    flex: "1",
    marginRight: "20px",
    width: "500px",
    marginLeft: "90px",
    fontFamily: "Rufina",
    letterSpacing: "1.5px",
    fontWeight: "5px"
  };

  const nameContainerStyle = {
    display: "flex",
    marginRight: "50px",
    marginLeft: "50px",
    marginBottom: "20px",
    width: "79%",
    backgroundColor: "#DFDDD9",
    marginTop: "30px"
  };

  const nameInputStyle = {
    marginRight: "10px",
    backgroundColor: "#DFDDD9",
  };

  const emailInputStyle = {
    width: "84%",
    marginLeft: "50px",
    height: "40px",
    marginBottom: "20px",
    backgroundColor: "#DFDDD9",
    padding: "7px",
    border: "1px solid black",
    borderRadius: "3px"
  };
  const phonenoInputStyle = {
    width: "84%",
    marginLeft: "50px",
    height: "40px",
    marginBottom: "20px",
    backgroundColor: "#DFDDD9",
    padding: "7px",
    border: "1px solid black",
    borderRadius: "3px"
  };
  const messageInputStyle = {
    width: "83.4%",
    marginLeft: "50px",
    height: "37px",
    marginBottom: "20px",
    backgroundColor: "#DFDDD9",
  }
  const submitStyle = {
    width: "86.8%",
    marginLeft: "50px",
    height: "40px",
    cursor: "pointer",
    transition: " background-color 0.3s ease",
    color: "#fff",
    border: "none",
    borderRadius: "18px",
    padding: "10px 20px",
    backgroundColor: "#7A5604",
    marginBottom: "80px"


  }

  return (
    <div>
      <div style={completeContainer}>
        {/* <h2 style={headingStyle}>CONTACT US</h2> */}
        <div style={containerStyle}>
          <div style={textContainerStyle}>
            <h4 style={{ color: "#7A5604" }}>CONTACT US</h4>
            <h1 style={{ color: "#041D52" }}>Embark on Your Path to Success with Fair Business Growth</h1>
            <p style={{ color: "#424B5F" }}><b>
              At Fair Business Growth, we go beyond mere services. We stand
              beside you as collaborative partners, propelling you towards your
              business dreams. Our blend of expertise, value-centric strategies,
              and vast global connections is geared to manifest your business
              vision. Ready to elevate your vision? Connect with us and set the
              foundation for your remarkable success story.</b>
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div style={nameContainerStyle}>
                <div style={nameInputStyle}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={emailInputStyle}
                />
              </div>

              <div>
                <input
                  type="number"
                  name="phoneno"
                  placeholder="Phone no"
                  value={formData.phoneno}
                  onChange={handleChange}
                  style={phonenoInputStyle}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  style={messageInputStyle}
                />
              </div>
              <div style={{ marginLeft: "50px" }}>
                <p>I allow this website to store my submission so they can respond to my inquiry.</p>
              </div>

              <div>
                <input style={submitStyle} type="submit" name="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
