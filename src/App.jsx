import React, {useState} from 'react';
import './styles/App.css';

import ModalWindow from './components/UI/ModalWindow/ModalWindow';
import FormRegistration from './components/UI/FormRegistration/FormRegistration';
import Button from './components/UI/Button/Button';



function App() {

  const [modalIsVisible, openModalWindow] = useState(false);
  const [isLogin, login] = useState(false);


  return (
    <div className="App">
      <ModalWindow visible={modalIsVisible} setVisible={openModalWindow}>
        <FormRegistration 
        visible={modalIsVisible}
        setVisible={openModalWindow}
        login={login}
        />
      </ModalWindow>

      <Button
        disabled = {isLogin}
        islogin={isLogin}
        onClick={() => openModalWindow(true)}>
        Регистрация
      </Button>

    </div>
  );
}

export default App;
