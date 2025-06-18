
const TodoList = ({basic,daily,onDelete,onToggle}) => {
    return (
        <div className="todo-list">
            <ul className="all-list">
                <h2>Todo List</h2>
                {
                    basic.map((value)=>{
                        return (
                            <li key={value.id}>
                                <div className="check">
                                <input 
                                    type="checkbox" 
                                    onChange={()=>{onToggle(value.id)}}
                                    checked={value.done}
                                />
                                <span style={{textDecoration: value.done ? "line-through" : "none"}}>{value.todo}</span>
                                </div>
                                <button onClick={()=>{onDelete(value.id)}}>삭제</button>
                            </li>
                        );
                    })
                }
            </ul>
            <ul className="week-list">
                <h2>Daily Todo List</h2>
                {
                    daily.map((value)=>{
                        return (
                            <li key={value.id}>
                                <div className="check">
                                <input 
                                    type="checkbox" 
                                    onChange={()=>{onToggle(value.id)}}
                                    checked={value.done}
                                />
                                <span style={{textDecoration: value.done ? "line-through" : "none"}}>{value.todo}</span>
                                </div>
                                <button onClick={()=>{onDelete(value.id)}}>삭제</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default TodoList;