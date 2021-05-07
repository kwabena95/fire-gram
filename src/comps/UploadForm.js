import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    // acceptable file types to upload
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = e => {
        e.preventDefault();

        // allow you to select one file
        let selected = e.target.files[0];
        // check if the selected file matches the file types.
        // if matches, then use setFile to pass the file to file
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            // once correct file type has been selected, clear error message
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg) type.')
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>

            <div className="output">
                {/* if there is an error, display the error message */}
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm
