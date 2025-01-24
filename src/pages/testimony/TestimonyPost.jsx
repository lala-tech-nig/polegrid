import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestimonyPost = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    heading: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'testimony'), formData);
      toast.success('Testimonial Submitted Successfully!');
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          location: '',
          heading: '',
          message: ''
        });
      }, 2000); // 2-second delay before clearing the form
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error submitting testimonial. Please try again.');
    }
  };

  return (
    <section id="share_a_testimony">
      <div className="container">
        <div className="share_a_testimony">
          <form id="form" onSubmit={handleSubmit}>
            <ToastContainer />
            <p><i className="ri-star-s-fill star"></i>Required</p>
            {/* Name */}
            <div className="testimony_name testimony_general">
              <label htmlFor="name">Full Name(s)<i className="ri-star-s-fill star"></i></label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              <p><i>What is your full name?</i></p>
            </div>
            {/* Email */}
            <div className="testimony_email testimony_general">
              <label htmlFor="email">Email<i className="ri-star-s-fill star"></i></label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <p><i>What is your email address?</i></p>
            </div>
            {/* Location */}
            <div className="testimony_location testimony_general">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
              <p><i>What is your Address, Province, Parish, e.t.c...?</i></p>
            </div>
            {/* Heading */}
            <div className="testimony_heading testimony_general">
              <label htmlFor="heading">Heading</label>
              <input type="text" id="heading" name="heading" value={formData.heading} onChange={handleChange} />
            </div>
            {/* Special message */}
            <div className="testimony_special_message testimony_general">
              <label htmlFor="message">Share your Testimony/Special Message or Remark/Wishes/Prayer Request<i className="ri-star-s-fill star"></i></label>
              <textarea name="message" id="message" cols="10" rows="5" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" id="submitbtn" className="testimony_submit">Publish Your Testimony</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TestimonyPost;
