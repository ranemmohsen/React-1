import React, { useState } from 'react';
import './Contact.css'; // Optional: Add a CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        age: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Message sent!');
    };

    return (
        <div className="container w-50 mt-5 pt-5  ">
                      <h2 className='name fa-bold mt-5 ' >conatct section</h2>
            <div className='d-flex justify-content-center pb-4 '>
                <div className='line me-3' style={{ width: '100px', height: '4px', backgroundColor: '#2c3e50' }}></div>
                <span className='star translate-middle-y' style={{ fontSize: '24px', color: '#2c3e50' }}>★</span>
                <div className='line ms-3' style={{ width: '100px', height: '4px', backgroundColor: '#2c3e50' }}></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-5">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        placeholder="UserName" // Placeholder instead of label
                    />
                </div>
                <div className="form-group mt-5">
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        placeholder="Age" // Placeholder instead of label
                    />
                </div>
                <div className="form-group mt-5">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email" // Placeholder instead of label
                    />
                </div>
                <div className="form-group mt-5">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Password" // Placeholder instead of label
                    />
                </div>
                <button className= 'button  d-flex justify-content-center rounded-3 mb-5' type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;