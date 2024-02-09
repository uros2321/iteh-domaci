import React, {useState} from 'react';

const UseForm = (initialState) => {

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return [formData, handleInputChange];
};

export default UseForm;