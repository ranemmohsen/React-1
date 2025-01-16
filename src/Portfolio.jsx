import React, { useState } from 'react';
import poert1 from './assets/images/poert1.png';
import port2 from './assets/images/port2.png';
import port3 from './assets/images/port3.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from 'react-modal';

const Portfolio = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage('');
    };

    return (
        <div className="page text-center align-content-center mt-5 pt-5">
            <h2 className='mt-5'>PORTFOLIO COMPONENT</h2>
            <div className='d-flex justify-content-center'>
                <div className='line me-3' style={{ width: '100px', height: '4px', backgroundColor: '#2c3e50' }}></div>
                <span className='star translate-middle-y' style={{ fontSize: '24px', color: '#2c3e50' }}>★</span>
                <div className='line ms-3' style={{ width: '100px', height: '4px', backgroundColor: '#2c3e50' }}></div>
            </div>
            <div className='container text-center'>
                <div className='row justify-content-center g-5'>
                    {[poert1, port2, port3, poert1, port2, port3].map((image, index) => (
                        <div className='col-4' key={index}>
                            <div className='imge12 position-relative bg-info overflow-hidden' onClick={() => openModal(image)}>
                                <div className='background-post position-absolute d-flex justify-content-center align-items-center'>
                                    <i className="icon fa-solid fa-plus"></i>
                                </div>
                                <img
                                    src={image}
                                    alt="Portfolio"
                                    style={{ width: '100%', height: 'auto', overflow: 'hidden', cursor: 'pointer' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Full-Screen Image */}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                content: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    background: 'none',
                    paddingTop: '75px',
                }
            }}>
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '75%', maxHeight: '75%', height: 'auto', width: 'auto' }} />
                <button onClick={closeModal} style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '24px',
                    cursor: 'pointer',
                }}>✖</button>
            </Modal>
        </div>
    );
};

export default Portfolio;