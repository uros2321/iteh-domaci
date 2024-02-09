import React from 'react';
import useForm from "../custom-hook/useForm";

const Kontakt = () => {

    const [formData, handleInputChange] =  useForm({
        ime: '',
        email: '',
        poruka: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }


    return (
        <>
            <div className="kontakt">
                <form>
                    <h1>Kontaktirajte nas</h1>
                    <div className="form-group">
                        <label htmlFor="ime">Ime:</label>
                        <input onChange={handleInputChange} type="text" id="ime" name="ime" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleInputChange}  type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="poruka">Poruka:</label>
                        <textarea onChange={handleInputChange} id="poruka" name="poruka" required />
                    </div>
                    <button onClick={handleSubmit} type="submit">Pošalji</button>
                </form>
            </div>
        </>
    );
};

export default Kontakt;