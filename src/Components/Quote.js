import { useEffect, useState } from "react";

const quotes = [
    "인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라 - 마야 안젤루",
    "사랑은 내게 질문하지 않으며, 다만 끝없는 지지를 준다 - 윌리엄 셰익스피어",
    "인생에서 최고의 행복은 사랑받고 있다는 확신을 갖고 있을 때이다 - 빅터 휴고",
    "늘 명심하라. 그 무엇보다 성공하겠다는 결의가 중요하다 - 에이브러햄 링컨",
    "성공한 사람이 되려고 애쓰지 말고, 가치 있는 사람이 되려 애써라 - 아인슈타인",
    "더 나은 것을 위해 좋은 것을 포기하는 걸 두려워 하지 마라 - 존 록펠러",
    "독특한 사람이 되려 하지 말아라. 좋은 사람이 되도록 해라 - 폴 랜드",
    "무언가를 시작하고 실패하는 것보다 더 나쁜 것은 아무것도 시작하지 않는 것이다 - 세스 고딘",
    "무언가를 정말 하고 싶다면, 당신은 방법을 찾을 것이다. 그렇지 않다면, 변명을 찾을 것이다 - 짐 론",
    "성공을 꿈꾸는 사람들도 있지만, 매일 아침에 일어나 꿈을 실현시키는 사람들도 있다 - 웨인 후이젠가"
]

const Quote = () => {
    const [quote,setQuote] = useState('');
    //랜덤하게 명언 추출
    //Math.random(); //0~1 : 0~quote.length
    useEffect(()=>{
        const random = Math.floor(Math.random()*quotes.length)
        setQuote(quotes[random]);
    },[])
    return (
        <div className="quote">
            오늘의 명언 : "{quote}"
        </div>
    );
};

export default Quote;