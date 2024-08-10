const submitFormData = async (formData) => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
  
    try {
      const response = await axios.post('http://localhost:5000/api/submit', formData, {
        headers: {
          Authorization: `Bearer ${token}`,  // Add the token in the Authorization header
          'Content-Type': 'application/json'
        }
      });
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
    }
  };
  