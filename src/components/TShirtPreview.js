import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const TShirtPreview = ({ design, tshirtColor }) => {
    return (
        <div className="tshirt-container" style={{ backgroundColor: tshirtColor }}>
            {/* T-shirt image */}
            <img
                src={process.env.PUBLIC_URL + '/t-shirt.png'}
                alt="T-shirt"
                className="tshirt-image"
            />
            {design && (
                <Draggable>
                    <div className="design-overlay">
                        {/* Resizable box for uploaded design */}
                        <ResizableBox
                            width={150}
                            height={150}
                            minConstraints={[50, 50]}
                            maxConstraints={[200, 200]}
                        >
                            <img
                                src={design}
                                alt="Design"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                        </ResizableBox>
                    </div>
                </Draggable>
            )}
        </div>
    );
};

export default TShirtPreview;
