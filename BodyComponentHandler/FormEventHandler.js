import React, { useState } from 'react';
import './FormEventHandler.css';

function FormEventHandler() {
  const [formData, setFormData] = useState({
    time: '',
    date: '',
    firstName: '',
    lastName: '',
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
  const handleInputBlur = (e) => {
    if (!e.target.value.trim()) {
      e.target.classList.add('red-border');
    } else {
      e.target.classList.remove('red-border');
    }
  };
  return (
    <div className="appointment-container">

      <form onSubmit={handleSubmit}>
        <div className="form-input-group">
          <div className="form-input">
            <label>Appointment Time</label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              onBlur={handleInputBlur}
              className="time"
            />
          </div>
          <div className="form-input">
            <label>Appointment Date</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="date"
            />
          </div>
        </div>
        <div className="form-input-group">
          <div className="form-input">
            <input
              type="text"
              name="firstName"
              placeholder='First  Name'
              value={formData.firstName}
              onChange={handleChange}
              className="firstName"
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              name="lastName"
              placeholder='Last  Name'
              value={formData.lastName}
              onChange={handleChange}
              className="lastName"
            />
          </div>
        </div>
        <div className="form-input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="email"
          />
        </div>
        <div className="form-input">
          <input
            type="number"
            name="phoneno"
            placeholder="Phone no"
            value={formData.phoneno}
            onChange={handleChange}
            className="Phoneno"
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="Message"
          />
        </div>
        <div className="form-input">
          <p>I allow this website to store my submission so they can respond to my inquiry.</p>
        </div>

        < div className="form-input">
          <input
            type="submit"
            name="submit"
            value="Submit"

            className="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default FormEventHandler;