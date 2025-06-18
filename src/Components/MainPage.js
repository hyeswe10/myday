import { useEffect, useState } from "react";
import Quote from "./Quote";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Select from "./Select";


const MainPage = ({user,onLogout}) => {
    const TODO_KEY = "todo";
    const [todo,setTodo] = useState([]);
    const [popUp,setPopUp] = useState(false);
    const [task,setTask] = useState("");
    //처음에 localStorage에 저장된 todo값이 있으면 읽어와서 설정
    useEffect(()=>{
        const saved = localStorage.getItem(TODO_KEY); //문자열
        if(saved){
            setTodo(JSON.parse(saved)); //문자열을 객체로 만들어주는 것
        }
    },[])
    //todo가 변경되면 localStorage에 저장
    useEffect(()=>{
            const saved = JSON.stringify(todo); //객체를 문자열로 만들어주는 것
            localStorage.setItem(TODO_KEY,saved);
    },[todo])
    const addTodo = (text)=>{
        setTask(text);
        setPopUp(true);
    }
    //타입에 따라 다른곳에 생성
    const handleSelectType = (type)=>{
        const newTodo = {
            id: Date.now(),
            todo: task,
            done: false,
            type: type,
        };
        setTodo([...todo,newTodo]);
        setTask("");
        setPopUp(false);
    }
    const deleteTodo = (id)=>{
        const update = todo.filter((value)=>{
            return value.id !== id;
        });
        setTodo(update);
    }
    const toggleTodo = (id)=>{
        const update = todo.map((value)=>{
            return value.id === id ? {...value,done:!value.done} : value;
        });
        setTodo(update);
    }
    const basic = todo.filter((value)=>{
        return value.type === "basic"
    })
    const daily = todo.filter((value)=>{
        return value.type === "daily"
    })
    return (
        <div>
        <div className="main-page">
            
            <div className="id-button">
                <h2>{user}님 반가워요</h2>
                <button onClick={()=>{onLogout('')}}>로그아웃</button>
            </div>
            <Quote/>
            <TodoForm onAdd={addTodo}/>
            {popUp && <Select onSelect={handleSelectType} onPop={setPopUp}/>}
            <TodoList basic={basic} daily={daily} onDelete={deleteTodo} onToggle={toggleTodo}/>
        </div>
        </div>
    );
};

export default MainPage;