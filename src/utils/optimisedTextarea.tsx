import React, { useState } from 'react';

const OptimisedTextarea = ({ value, setValue, onSubmit }) => {
    const [height, setHeight] = useState('auto');

    const MAX_HEIGHT = 128;
    const INITIAL_HEIGHT = 48;

    const handleChange = (event) => {
        setValue(event.target.value);
        setHeight('auto');
        if (event.target.scrollHeight <= MAX_HEIGHT) {
            setHeight(`${event.target.scrollHeight}px`);
        } else {
            setHeight(`${MAX_HEIGHT}px`);
        }
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            if (event.shiftKey === true) {
                if (event.target.scrollHeight <= MAX_HEIGHT) {
                    setHeight(`${event.target.scrollHeight}px`);
                }
            } else{
                onSubmit();
                setValue('')
                setHeight(`${INITIAL_HEIGHT}px`);
            }
        }
    };

    return (
        <input
            // rows={1}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            // style={{ height: height, resize: 'none' }}
            className="w-full bg-slate-100 rounded-xl px-2 py-3 overflow-auto focus:outline-none"
        />
    );
};

export default OptimisedTextarea;
