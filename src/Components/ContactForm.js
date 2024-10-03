import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import './ContactForm.css';  // Estilos del formulario

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [modalVisible, setModalVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="p-field">
                    <label htmlFor="name">Name</label>
                    <InputText
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="p-field">
                    <label htmlFor="email">Email</label>
                    <InputText
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="p-field">
                    <label htmlFor="message">Message</label>
                    <InputText
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <Button label="Submit" icon="pi pi-check" className="p-mt-2" />
            </form>

            <Dialog header="Form Data" visible={modalVisible} onHide={hideModal}>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Message:</strong> {formData.message}</p>
                <Button label="Close" icon="pi pi-times" onClick={hideModal} />
            </Dialog>
        </div>
    );
};

export default ContactForm;
