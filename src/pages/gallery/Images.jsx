import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/Firebase';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './gallery.css';

const Images = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'images'));
      const imageList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setImages(imageList);
    };

    fetchData();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const handleNavigation = (direction) => {
    const currentIndex = images.findIndex((img) => img === selectedImage);
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <div>
      <section id="gallery" className="gallery">
        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {images.map((image) => (
              <div
                key={image.id}
                className="col-xl-3 col-lg-4 col-md-6"
                onClick={() => openModal(image)}
              >
                <div className="gallery-item h-100">
                  <img src={image.imageUrl} alt={`Image ${image.id}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal show={modalIsOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Daytopia Image Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <div>
              <img
                src={selectedImage.imageUrl}
                alt={`Selected Image`}
                className="img-fluid"
              />
              {/* Display the image description below the image */}
              <p>{selectedImage.description}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className='image-button1' onClick={() => handleNavigation('prev')}>
            Previous
          </Button>
          <Button className='image-button2' onClick={() => handleNavigation('next')}>
            Next
          </Button>
          {/* <Button className='image-button3' onClick={closeModal}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Images;
