
const Theme = ({onTheme}) => {
    return (
        <div className="theme">
            <div className="blue" onClick={()=>{onTheme("blue-bg")}}><span>BLUE</span></div>
            <div className="pink" onClick={()=>{onTheme("app")}}><span>PINK</span></div>
            <div className="red" onClick={()=>{onTheme("red-bg")}}><span>RED</span></div>
        </div>
    );
};

export default Theme;