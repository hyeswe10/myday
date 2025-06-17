import { useEffect, useState } from "react";

const Time = () => {
    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setTime(new Date());
        },1000);
        const closeEffect = ()=>{
            clearInterval(intervalID);
        }
        return closeEffect;
    },[])
    return (
        <div className="time">
            {/* 우리나라 표기는 ko-KR / 미국은 en-US */}
            {time.toLocaleTimeString('ko-KR',{
                // 시를 2자리 수
                hour: '2-digit',
                // 분을 2자리 수
                minute: '2-digit',
                // 24시간 기준으로 바꾸기
                hour12: false,
                second: '2-digit'
            })}
        </div>
    );
};

export default Time;