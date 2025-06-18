
const Theme = ({onTheme}) => {
    return (
        <div className="theme">
            <div className="blue" onClick={()=>{onTheme("blue")}}></div>
            <div className="pink" onClick={()=>{onTheme("app")}}></div>
            <div className="red" onClick={()=>{onTheme("red")}}></div>
        </div>
    );
};

export default Theme;