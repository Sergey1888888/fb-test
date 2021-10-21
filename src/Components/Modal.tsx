import React from 'react';
import {motion} from 'framer-motion';

interface ModalProps {
    selectedImage: string | null;
    setSelectedImage: (url: string | null) => void;
}

const Modal: React.FC<ModalProps> = ({selectedImage, setSelectedImage}) => {
    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as Element).classList.contains('backdrop')) {
            setSelectedImage(null);
        }
    }

    return (
        <motion.div className='backdrop' onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {selectedImage && <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} src={selectedImage} alt="large pic"/>}
        </motion.div>
    );
};

export default Modal;