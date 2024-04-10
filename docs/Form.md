<!-- TOC -->
* [Form](#form)
  * [Docs](#docs)
<!-- TOC -->

# Form
HTML 폼 엘리먼트는 폼 엘리먼트 자체가 내부 상태를 가지기 때문에, React의 다른 DOM 엘리먼트와 다르게 동작합니다. 예를 들어, 순수한 HTML에서 이 폼은 name을 입력받습니다.  


## Controlled Components
input의 value를 state로 관리함.
![image](https://github.com/JuniorMSG/React_Study/assets/22822369/ff3f9e03-af0d-44a2-9490-d7df8d3bf4f5)
![image](https://github.com/JuniorMSG/React_Study/assets/22822369/ff3f9e03-af0d-44a2-9490-d7df8d3bf4f5)
```jsx
import React, { useState } from 'react';

function ControlledComponent(props) {

  const [name, setName] = useState('')
  const [essay, setEssay] = useState('Please write an essay about your favorite DOM element.')
  const [flavor, setFlavor] = useState('lime')

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(event) {
    alert(`Name: ${name} \nEssay: ${essay} \nFlavor: ${flavor}`);

    event.preventDefault();
  }

  function handleEssayChange(event) {
    setEssay(event.target.value)
  }

  function handleFlavorChange(event) {
    setFlavor(event.target.value)
  }

  return (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
            <br/>
            <br/>
            <label>
              Essay:
              <textarea value={essay} onChange={handleEssayChange}/>
            </label>

            <br/>
            <br/>

            <label>
              Pick your favorite flavor:
              <select value={flavor} onChange={handleFlavorChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
          </form>
  );
}

export default ControlledComponent;
```


## Uncontrolled Components
form element 자체의 내부 상태 활용

![image](https://github.com/JuniorMSG/React_Study/assets/22822369/b9ea65ec-feca-4994-b077-846f90866cec)
```jsx
import React, {useRef, useState} from 'react';

function UnControlledComponent(props) {
    const fileInputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Selected file - ${fileInputRef.current.files[0].name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload file:
                <input type="file" ref={fileInputRef} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UnControlledComponent;
```


## Docs
[Form](https://ko.legacy.reactjs.org/docs/forms.html)