import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

interface ImagesProps {
    setSelectedImage: (url: string | null) => void;
}

const Images: React.FC<ImagesProps> = ({setSelectedImage}) => {
    const {docs} = useFirestore('images');

    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                <motion.div
                    layout
                    whileHover={{opacity: 1, scale: 1.02}}
                    className='img-wrap'
                    key={doc.id}
                    onClick={() => setSelectedImage(doc.url)}
                >
                    <motion.img src={doc.url} alt='not loaded'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default Images;