
const Select = ({onSelect,onPop}) => {
    return (
        <div className="select">
            <div className="whole-wrap">
                <h2>어느 쪽에 추가하시겠습니까?</h2>
                <div className="btn-wrap">
                    <button onClick={()=>{onSelect("basic")}}>Todo</button>
                    <button onClick={()=>{onSelect("daily")}}>Daily Todo</button>
                    <button onClick={()=>{onPop(false)}}>취소</button>
                </div>
                
            </div>
        </div>
    );
};

export default Select;