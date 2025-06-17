import { useEffect, useState } from 'react';
import './App.scss';
import LoginForm from './Components/LoginForm';
import Time from "./Components/Time";
import MainPage from './Components/MainPage';



const App = () => {
  const USER_KEY = "user_name";
  const [name,setName] = useState('');
  //처음에 시작하자 마자 user_name을 읽어와야함
  useEffect(()=>{
    const saved = localStorage.getItem(USER_KEY);
    if(saved){
      setName(saved);
    }
  },[])
  const handleName = (data)=>{
    if(data){
      localStorage.setItem(USER_KEY,data)
      setName(data);
    } else {
      localStorage.removeItem(USER_KEY)
      setName(data);
    }
  }
  return (
    <div className="app">
      <Time/>
      {!name && <LoginForm onLogin={handleName}/>}
      {name && <MainPage user={name} onLogout={handleName}/>}
    </div>
  );
};

export default App;