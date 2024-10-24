import React from 'react';
import { toPng } from 'html-to-image';

const DownloadButton = () => {
    const handleDownload = () => {
        const tshirtElement = document.querySelector('.tshirt-container');
        toPng(tshirtElement)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'tshirt-preview.png';
                link.click();
            })
            .catch((error) => {
                console.error('Error generating image:', error);
            });
    };

    return <button onClick={handleDownload}>Download Preview</button>;
};

export default DownloadButton;
