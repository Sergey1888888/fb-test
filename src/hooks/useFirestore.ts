import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase/config';
import firebase from 'firebase/compat';

type DocsType = firebase.firestore.DocumentData[] | [];

const useFirestore = (collection: string) => {
    const [docs, setDocs] = useState<DocsType>([])

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
                let documents: DocsType = [];
                snapshot.forEach(doc => {
                    // @ts-ignore
                    documents.push({...doc.data(), id: doc.id})
                })
                setDocs(documents);
            })
        return () => unsub();
    }, [collection])

    return {docs};
};

export default useFirestore;