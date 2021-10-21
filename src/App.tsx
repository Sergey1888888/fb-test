import React, {useState} from 'react';
import Title from './Components/Title';
import UploadForm from './Components/UploadForm';
import Images from './Components/Images';
import Modal from "./Components/Modal";

function App() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    return (
        <div className='App'>
            <Title/>
            <UploadForm/>
            <Images setSelectedImage={setSelectedImage}/>
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
        </div>
    );
}

export default App;
