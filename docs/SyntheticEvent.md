<!-- TOC -->
  * [Event (SyntheticEvent)](#event-syntheticevent)
  * [Docs](#docs)
<!-- TOC -->

## Event (SyntheticEvent)
합성 이벤트는 인터페이스는 같지만 직접 대응되지 않는다.

### 기본 이벤트를 막는 방법
```.jsx
function Form() {
  function handleSubmit(e) {
    // 여기서 e는 리액트 합성 이벤트를 의미합니다.
    // return false 대응
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 캡처링, 버블링
Capture >> target >> Bubble
캡처링 후에 버블링이 일어난다.
* 버블링 - 부모로 이벤트를 전달하는  
* 캡처링 - 자식들중 누가 클릭된 이벤트인치 체크
* 
![image](https://github.com/JuniorMSG/React_Study/assets/22822369/622eb966-5196-4d25-bd1e-fdd9a2931579)

```.jsx
import React from 'react';

function Event() {

    const handleButtonClick = () => {
        console.log('Hello World => 호출순서 3');
    }
    const handleClickCapture = () => {
        console.log('Hello World Capture1');
    }

    const handleClickCapture2 = () => {
        console.log('Hello World Capture2');
    }
    const handleClickBubble = () => {
        console.log('Hello World Bubble');
    }
    return (
        <div onClickCapture={handleClickCapture}>
            <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
                <button onClick={handleButtonClick}>Hello World</button>
            </div>
        </div>
    )
}

export default Event;
```

## Docs
[이벤트 처리하기](https://ko.legacy.reactjs.org/docs/handling-events.html)    
[이벤트 핸들링](https://ko.reactjs.org/docs/handling-events.html)  
[합성 이벤트](https://ko.legacy.reactjs.org/docs/events.html)  

