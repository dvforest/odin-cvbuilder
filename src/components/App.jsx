import CV from './Cv.jsx';
import Editor from './Editor.jsx';
import '../styles/app.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    desiredPosition: '',
  });

  function handleUpdateField(key, value) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [key]: value,
      };
    });
  }

  return (
    <div className="app">
      <Editor
        formData={formData}
        onInputChange={handleUpdateField}
      />
      <CV data={formData} />
    </div>
  );
}

export default App;
