import React from 'react';
import { useState, useCallback } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';


function App() {

  const [img, setImg] = useState(null)
  const [avatar, setAvatar] = useState(null)

  // console.log('AVATAR',avatar)
  const inputChange = (event) => {
    setImg(event.target.files[0])

    console.log(event.target.files);
  }


  const sendFile = useCallback(
    async () => {
      try {
        const data = new FormData();
        data.append('avatar', img);

        await axios.post('/api/upload', data, {
          headers: {
            'content-type': 'multipart/form-data '
          }
        })
          .then(res => setAvatar(res.data.path))
      } catch (error) {
        console.log(' Ошибка в sendFile', error)
      }
    }, [img]);



  return (
    <div className="App">
      <header className="App-header">
        {
          avatar
            ? < img src={`${avatar}`} className="App-logo" alt="avatar" />
            : < img src={`${logo}`} className="App-logo" alt="avatar" />
        }

        <div className="conteiner">
          < input type="file" accept='image/*, .png, .jpg, .jpeg' className="file" onChange={inputChange} />
          <button className="btn" onClick={sendFile} >Заменить аватар</button>
        </div>
      </header>
    </div>
  );
}

export default App;
