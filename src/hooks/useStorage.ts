import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';
import firebase from 'firebase/compat';

const useStorage = (file: File) => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<firebase.storage.FirebaseStorageError | null>(null);
    const [url, setUrl] = useState<string | null>(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        storageRef.put(file).on('state_changed', (snapshot: firebase.storage.UploadTaskSnapshot) => {
            let percentage: number = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err: firebase.storage.FirebaseStorageError) => {
            setError(err);
        }, async () => {
            const url: string = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt })
            setUrl(url);
        })
    }, [file])
    return {progress, url, error};
};

export default useStorage;