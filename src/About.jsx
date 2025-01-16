import React from 'react';
import photo from './assets/images/photo.png';

const About = () => {
    return (
        <div className="page1 text-center align-content-center">
            <div className='background-image  position-relative  rounded-circle m-auto mb-5 '>
                <div className='imge-about col-12 position-absolute  pb-5'>
                    <img
                        src={photo}
                        alt="Portfolio Image"
                        style={{ width: '170px', height: 'auto ' }}
                    />
                </div>
            </div>
            <div>
                <h1>ABOUT COMPONENT</h1>
            </div>


            <div className=' d-flex justify-content-center '>
                <div className='line me-3 ' style={{ width: '100px', height: '4px', backgroundColor: 'white' }}></div>
                <span className='star translate-middle-y' style={{ fontSize: '24px', color: 'white' }}>★</span>
                <div className='line ms-3' style={{ width: '100px', height: '4px', backgroundColor: 'white' }}></div>
            </div>
            <div className='d-flex justify-content-center '>
                <div className='row container '>
                    <div className='col-6'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>

                    </div>
                    <div className='col-6'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;