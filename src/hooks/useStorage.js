import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = file => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storegeRef = projectStorage.ref(file.name);
        storegeRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.byteTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storegeRef.getDownloadURL();
            setUrl(url);
        })
    }, [file]);

    return { progress, error, url };
}

export default useStorage;