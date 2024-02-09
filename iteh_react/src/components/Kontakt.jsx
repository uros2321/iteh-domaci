import React, {useState} from 'react';
import useForm from "../custom-hook/useForm";

const Kontakt = () => {

    const [formData, handleInputChange] =  useForm({
        ime: '',
        email: '',
        poruka: ''
    });

    const [poruka, setPoruka] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = formData.email;
        let ime = formData.ime;
        let poruka = formData.poruka;

        if(email === '' || ime === '' || poruka === ''){
            setPoruka('Molimo Vas da popunite sva polja');
            return;
        }

        if (poruka.length < 10){
            setPoruka('Poruka mora imati najmanje 10 karaktera');
            return;
        }

        setPoruka('Poruka je uspešno poslata. Neko od administratora ce poslati odgovor na email ' + email);
    }


    return (
        <>
            <div className="kontakt">
                <form>
                    <h1>Kontaktirajte nas</h1>
                    <div className="form-group">
                        <label htmlFor="ime">Ime:</label>
                        <input onChange={handleInputChange} type="text" id="ime" name="ime" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleInputChange} type="email" id="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="poruka">Poruka:</label>
                        <textarea onChange={handleInputChange} id="poruka" name="poruka" required/>
                    </div>
                    <button onClick={handleSubmit} type="submit">Pošalji</button>
                    <p>{poruka}</p>
                </form>

            </div>
        </>
    );
};

export default Kontakt;