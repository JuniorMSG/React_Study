<!-- TOC -->
<!-- TOC -->

## Form 다루기
<img width="1256" alt="image" src="https://github.com/JuniorMSG/React_Study/assets/22822369/d807d15e-994c-4848-90df-b73bc3a11232">


```jsx
const handleChange = (event) => {
    // 기본 이벤트 실행하지 않도록 막음
    event.preventDefault();
    
    // 이벤트 타겟을 콘솔로 출력
    console.dir(event.target);
    const firstName = event.target.elements.fname.value;
    const lastName = event.target.elements.lname.value;
    const country = event.target.elements.country.value;
    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nCountry: ${country}`);
}
const App = () => {
    return <>
        <div>
            <form onSubmit={handleChange}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname"
                       placeholder="Your last name.."/>

                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    </>
}
ReactDOM.render(<App/>, document.getElementById('root'));
```