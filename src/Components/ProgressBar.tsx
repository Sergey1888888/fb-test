import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

interface ProgressProps {
    file: File;
    setFile: (file: File | null) => void;
}

const ProgressBar: React.FC<ProgressProps> = ({file, setFile}) => {
    const {progress, url} = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <motion.div className='progress-bar'
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        ></motion.div>
    );
};

export default ProgressBar;