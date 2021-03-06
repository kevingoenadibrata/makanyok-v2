import React, {useState} from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import CSVReader from 'react-csv-reader';

const Admin = (props) => {
  const [file, setFile] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [author, setAuthor] = useState("");
  const {addToast} = useToasts();

  const handleLoad = (data, fileInfo) => {
    setFile(data);
  }

  const handleClick = async () =>{
    console.log(file);
    console.log(city, country, author);

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({city:city, country:country, author:author, data:file})
    }
    const response = await fetch('http://206.189.67.117/api/city', options);
    const resp_data = await response.json();
    if(resp_data.status === 'OK'){
      addToast('POST Successful',{
        appearance: 'success',
        autoDismiss: true
      })
    }
  }

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true
  };

  return (
    <div className="Admin">
      <h1>Admin Page</h1>
        <input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
        <input placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}/>
        <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <CSVReader
          cssClass="react-csv-input"
          onFileLoaded={handleLoad}
          parserOptions={papaparseOptions}
        />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Admin;
