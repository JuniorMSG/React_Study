# 리스트와 Key (Lists and Keys)



## Key
Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다.   
key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.
```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것입니다. 대부분의 경우 데이터의 ID를 key로 사용합니다.

```jsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```
렌더링 한 항목에 대한 안정적인 ID가 없다면 최후의 수단으로 항목의 인덱스를 key로 사용할 수 있습니다.
```jsx
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);

```

### 고유성 
Key는 형제 사이에서 고유해야 하지만 전체 범위에서 고유할 필요는 없습니다. 여러 리스트에서 동일한 key를 사용할 수 있습니다.

### Default Key
만약 key를 지정하지 않으면 React는 기본적으로 배열의 인덱스를 key로 사용합니다. 그러나 이것은 추천되지 않습니다.  
배열이 재정렬되면 React는 모든 항목을 다시 렌더링하고 상태를 잃어버릴 수 있습니다.

### map
map() 함수는 배열 내의 모든 요소에 대해 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

### Key props
Key는 props로 넘어가지 않는다. 

```jsx

## Docs
[리스트와 Key](https://ko.legacy.reactjs.org/docs/lists-and-keys.html)
