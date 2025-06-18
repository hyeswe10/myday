import { useEffect, useState } from 'react';
import './App.scss';
import LoginForm from './Components/LoginForm';
import Time from "./Components/Time";
import MainPage from './Components/MainPage';
import Weather from './Components/Weather';
import Theme from './Components/Theme';
// import Quote from './Components/Quote';



const App = () => {
  const USER_KEY = "user_name";
  const THEME = "theme";
  const [name,setName] = useState('');
  const [theme,setTheme] = useState("app");
  useEffect(()=>{
    const saved = localStorage.getItem(THEME);
    if(saved){
      setTheme(saved);
    }
  },[])
  const handleTheme = (theme)=>{
    const $app = document.querySelector("#root > div");
    if(theme === "blue-bg"){
      $app.classList.remove("red-bg","app");
      $app.classList.add(theme);
      setTheme(theme);
    } else if(theme === "red-bg"){
      $app.classList.remove("app","blue-bg");
      $app.classList.add(theme);
      setTheme(theme);
    } else {
      $app.classList.remove("red-bg","blue-bg");
      $app.classList.add(theme);
      setTheme(theme);
    }
    if(theme){
      localStorage.setItem(THEME,theme);
    }
  }
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
    } else {
      localStorage.removeItem(USER_KEY)
    }
    setName(data);
  }
  return (
    <div className={theme}>
      <img src={`${process.env.PUBLIC_URL}/img/${theme}.jpg`}/>
      <Weather/>
      <Time/>
      {/* {!name && <LoginForm onLogin={handleName}/>}
      {name && <MainPage user={name} onLogout={handleName}/>} */}
      <div className='page'>
      {
        name ? <MainPage user={name} onLogout={handleName}/> : <LoginForm onLogin={handleName}/>
      }
      </div>
      <Theme onTheme={handleTheme}/>
    </div>
  );
};

export default App;