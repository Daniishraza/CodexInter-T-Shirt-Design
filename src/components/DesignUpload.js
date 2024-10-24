import React from 'react';

const DesignUpload = ({ onImageUpload }) => {
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => onImageUpload(e.target.result);
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
    );
};

export default DesignUpload;
