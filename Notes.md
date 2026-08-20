# React Notes — Day 1 & Day 2

---

# Day 1 — Introduction to React

## 1. What is React?

React is a **JavaScript library for building user interfaces (UI)**.
It is mainly used to build interactive and dynamic web applications.
React allows us to divide a large UI into small, reusable pieces called **components**.

### In simple words

> React helps us build interactive user interfaces using reusable components.

---

# 2. Who Developed React?

React was originally developed at **Facebook** (now Meta).
React was first used internally at Facebook and was later open-sourced in **2013**.
Today, React is maintained by **Meta and the open-source community**.

---

# 3. Why Was React Created?

Before React, websites were commonly built using:
- HTML
- CSS
- JavaScript
For simple websites, this works very well.
However, as web applications became larger and more interactive, managing the UI became more difficult.
For example, consider an e-commerce application:

```text
E-commerce Application
│
├── Navbar
├── Search
├── Product List
│   ├── Product Card
│   ├── Product Card
│   └── Product Card
├── Cart
├── User Profile
├── Login
└── Footer
```

## 4. HTML vs CSS vs JavaScript vs React

- HTML defines the structure of a page.
- CSS defines the styling and appearance of a page.
- JavaScript defines the logic and behaviour of a page.
- React is a component-based library used to build dynamic user interfaces.

### Quick memory trick

- HTML = What is inside the page?
- CSS = How should the page look?
- JavaScript = How should the page behave?
- React = How to manage UI using components and state?

---

## 5. Can we build websites without React?

- Yes, websites can be built using HTML + CSS + JavaScript.
- For small applications, React is not mandatory.
- React becomes useful when the UI is large, dynamic, and repeated.
- Complex applications are easier to manage with React.

---

## 6. Why do we need components?

- Components help divide a UI into smaller parts.
- The same design can be reused multiple times.
- Code becomes cleaner and easier to maintain.
- Large applications become easier to manage with components.

---

## 7. What is a component?

- A component is a reusable UI block.
- A functional component is created using a JavaScript function.
- It returns JSX.
- The same component can be reused multiple times.

---

## 8. Functional Component

- A functional component is a normal JavaScript function.
- This function returns JSX.
- It is the most common component type in React applications.
- Component names usually begin with an uppercase letter.

---

## 9. Component Naming Convention

- Component names should start with an uppercase letter.
- Examples: Header, ProductCard, LoginForm.
- Lowercase names are treated as HTML elements by default.
- Proper naming helps React distinguish components from HTML tags.

---

## 10. JSX

- JSX stands for JavaScript XML.
- It allows HTML-like code to be written inside JavaScript.
- JSX makes UI development more readable and easier to build.
- JSX is not exactly the same as HTML; some syntax differs.

---

## 11. JavaScript inside JSX

- JavaScript expressions inside JSX are written inside curly braces {}.
- Variables, calculations, conditions, and values can be rendered.
- Data is displayed in the UI using these expressions.
- Example: {name}, {a + b}, {isLoggedIn ? "Yes" : "No"}

---

## 12. JSX vs HTML

- JSX looks similar to HTML, but it is not exactly the same.
- The class attribute is written as className in JSX.
- Self-closing tags are required in JSX, such as input / and img /.
- JSX supports JavaScript expressions.

---

## 13. Components in Separate Files

- In real applications, components are often stored in separate files.
- This improves organization and readability.
- Parent and child components are usually placed in different files.
- They are connected using import and export.

---

## 14. Export and Import

- A component must be exported to be reused elsewhere.
- It must be imported in another file to be used.
- export default is commonly used for the main component.
- Import paths must be correct to avoid errors.

---

## 15. Problem with Reusable Components

- If the same component is used multiple times, it may show the same data each time.
- But different cards or items often need different values.
- A way is needed to send different data to the same component.
- This problem is solved using props.

---

## 16. What are Props?

- Props means Properties.
- Props are used to pass data from a parent component to a child component.
- The flow is Parent → Child.
- The child can read the props, but should not directly modify them.
- Props make reusable components dynamic.

### Props in simple point form

- Passed from parent to child.
- Used to send data.
- Read-only for the child.
- Helps reuse the same component with different values.

---

## 17. Multiple Props

- A component can receive multiple props.
- Example: name, price, category, rating, isAvailable.
- Props can contain strings, numbers, booleans, objects, and arrays.
- A component can display multiple values together.

---

## 18. Props Destructuring

- Props can be accessed directly as props.name or props.price.
- Destructuring makes the code cleaner and shorter.
- Example: function ProductCard({ name, price }) {}
- This improves readability.

---

## 19. Different Types of Props

- String props: name="iPhone"
- Number props: price={70000}
- Boolean props: isAvailable={true}
- Object props: product={product}
- Array props: products={products}
- Props can hold any valid JavaScript data type.

---

## 20. Props are Read-Only

- The child component receives props, but it should not modify them.
- Props belong to the parent.
- If the child needs to update the value, state is used instead.
- Therefore, props should be treated as immutable.

---

## 21. What is State?

- State is local data that belongs to a component.
- Its value can change over time.
- When the state changes, React re-renders the component.
- State is updated based on user interaction.

### State in simple point form

- Managed inside the component.
- Used for changing data.
- Can be updated using a setter function.
- The UI automatically refreshes when state changes.

---

## 22. Why do we need State?

- State is used when data changes during the application lifecycle.
- Examples include counters, input fields, cart counts, login status, and modal open/close states.
- A normal variable may change, but React will not automatically know that the UI needs to update.
- State helps React refresh the UI when data changes.

---

## 23. useState

- useState is a React hook.
- It is used to create state in a functional component.
- Syntax: const [state, setState] = useState(initialValue)
- state stores the current value.
- setState updates the value.

---

## 24. Counter Example Concept

- A count state is defined.
- Clicking the Increase button updates the count by +1.
- Clicking the Decrease button updates the count by -1.
- Reset sets the state back to its initial value.
- The UI automatically shows the updated count.

---

## 25. How State Updates the UI

- When setCount(value) is called, React updates the state.
- The component re-renders.
- The updated value is reflected in the UI.
- This is the core concept behind interactive React applications.

---

## 26. Props vs State

- Props = Data passed from parent to child.
- State = Local data inside a component.
- Props are read-only.
- State can be updated.
- Props are mainly used for displaying data.
- State is used for dynamic behaviour.

### Easy comparison

- Props: Parent → Child, fixed data, read-only
- State: Component itself, changing data, editable

---

## 27. Events

- Events represent user actions.
- Common events include click, change, submit, mouse enter, and key down.
- React uses handler functions for events.
- Typical handlers include onClick, onChange, and onSubmit.

---

## 28. onClick

- The onClick event handles a user click.
- A function should be passed by reference, not called directly.
- Correct: onClick={handleClick}
- Wrong: onClick={handleClick()}
- If the function should run immediately, an arrow function is used.

---

## 29. Arrow Function as Event Handler

- An arrow function can be used as an event handler.
- This is useful for inline logic.
- Example: onClick={() => console.log("Clicked")}
- A direct function reference is also valid in many cases.

---

## 30. Input with State

- The value of an input field is stored in state.
- The onChange event updates the state.
- As the user types, the UI shows the new value.
- This is the basic pattern of a controlled input.

---

## 31. Event Object

- When an event is triggered, React provides an event object.
- This object gives access to values such as target value and target name.
- For inputs, e.target.value is commonly used.
- This helps read the current typed value.

---

## 32. Form Example Concept

- When a form is submitted, the onSubmit event is triggered.
- Form data is usually handled using state.
- e.preventDefault() stops the browser's default refresh behaviour.
- This pattern is commonly used in React form handling.

---

## 33. Real Application State Example

- Clicking Add to Cart updates the item-added state.
- Clicking Like increases the likes count.
- A Show/Hide toggle uses a boolean state.
- Modal open/close is also managed using state.

---

## 34. Show / Hide Example Concept

- A boolean state is toggled between true and false.
- show ? UI display : UI hide
- This pattern is common for modals, dropdowns, and menus.
- React re-renders the UI whenever state changes.

---

## 35. Character Counter Example Concept

- The textarea value is stored in state.
- onChange updates the current text.
- text.length is used to calculate the character count.
- The live count is displayed in the UI.

---

## 36. Important Concept — Re-render

- When state changes, the component re-renders.
- React runs the component again.
- The updated UI is shown to the user.
- This is the central idea behind React's reactive behaviour.


---

# 37. What is useEffect?

`useEffect` is a React Hook used to perform side effects in a component.

### Simple Definition

> useEffect allows us to perform some work after the component renders.

### Common Uses

useEffect can be used for:

- API calls
- Timers
- Event listeners
- Updating document title
- Working with browser APIs
- LocalStorage operations


---

# 38. Why do we need useEffect?

Suppose we want to call an API when our component loads.
We don't want to call the API manually every time.
We want:

Component loads
↓
API call automatically
For this type of work, we can use `useEffect`.

---

# 39. Import useEffect

```jsx
import { useEffect } from "react";
```
---

# 40. Basic useEffect Syntax

```jsx
useEffect(() => {
	// code
});
```

Example:
```jsx
import { useEffect } from "react";
function App() {
	useEffect(() => {
		console.log("Component rendered");
	});
	return <h1>Hello React</h1>;
}
export default App;
```

---

# 41. Dependency Array

The second argument of `useEffect` is called the dependency array.
```jsx
useEffect(() => {
	// code
}, []);
```
Example:
```jsx
useEffect(() => {
	console.log("Component loaded");
}, []);
```
An empty dependency array means the effect runs after the initial render.

---

# 42. useEffect with State

We can use state values as dependencies.
```jsx
import { useEffect, useState } from "react";
function App() {
	const [count, setCount] = useState(0);
	useEffect(() => {console.log("Count changed")}, [count]);
	return (
		<div>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>
				Increase
			</button>
		</div>
	);
}
export default App;
```

Here:
```jsx
[count]
```
means the effect runs when `count` changes.

---

# 43. Different useEffect Examples

### Without dependency array
```jsx
useEffect(() => {
	console.log("Runs after render");
});
```
### Empty dependency array
```jsx
useEffect(() => {
	console.log("Runs after initial render");
}, []);
```
### With dependency
```jsx
useEffect(() => {
	console.log("Runs when count changes");
}, [count]);
```
---
# 44. What is an API?

API stands for:
> Application Programming Interface
In simple terms:
> API allows different applications to communicate with each other.

For example:

```text
React Application
				↓
			 API
				↓
			Server
				↓
		Database
```

The server sends data back to React.

---
# 45. Request and Response

When React asks the server for data:
```text
React
	↓ Request
Server
	↓ Response
React
```

Example:
```text
GET /users
```
---

# 46. What is Fetch?

Fetch is a built-in JavaScript API used to make HTTP requests.
Fetch returns a Promise.

---

# 47. Fetch inside useEffect

If we want to call the API when the component loads:

```jsx
import { useEffect } from "react";
function App() {
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}, []);
	return <h1>Users</h1>;
}

export default App;
```
The flow is:

```text
Component loads
	↓
useEffect runs
	↓
fetch()
	↓
API request
	↓
Response
	↓
Data
```

---

# 48. Store API Data in State
We normally store API data in state.

```jsx
import { useEffect, useState } from "react";
function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);
	return <h1>Users</h1>;
}

export default App;
```
Initially:
```jsx
users = []
```
After API response:
```jsx
setUsers(data);
```

Now the state contains the API data.

---

# 49. Display API Data using map()

Suppose we have:
```jsx
const users = [
{
		id: 1,
		name: "Rahul"
	},
	{
		id: 2,
		name: "Aman"
	}
];
```

We can display users using `map()`.

```jsx
{users.map((user) => (
	<div key={user.id}>
		<h2>{user.name}</h2>
	</div>
))}
```
`map()` creates UI for every item in the array.

---

# 50. Why do we use key?

When rendering a list in React, every item should have a unique `key`.
Usually we use the unique `id` from the data.
```jsx
key={user.id}
```
The key helps React identify list items.

---

# 51. Loading State

API response can take some time.
We can show a loading message.

```jsx
const [loading, setLoading] = useState(true);
```
After API response:

```jsx
setLoading(false);
```
---

# 52. Error Handling

We can maintain an error state.
```jsx
const [error, setError] = useState("");
```
---

# 53. What is Axios?

Axios is a JavaScript library used to make HTTP requests.
We need to install it.

```bash
npm install axios
```

Import:
```jsx
import axios from "axios";
```

---

# 54. Axios GET Request

```jsx
axios
	.get("https://jsonplaceholder.typicode.com/users")
	.then((response) => {
		console.log(response.data);
	});
```
With Axios, the response data is available through:

```jsx
response.data
```

---

# 55. Axios with useEffect

```jsx
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				setUsers(response.data);
			});
	}, []);

	return (
		<div>
			<h1>Users</h1>
			{users.map((user) => (
				<div key={user.id}>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
				</div>
			))}
		</div>
	);
}

export default App;
```

---

# 56. Difference Between Fetch and Axios

| Difference | Fetch | Axios |
|---|---|---|
| Type | Built into the browser | External library |
| Installation | No installation required | Requires installation using `npm install axios` |
| GET request | `fetch(url)` | `axios.get(url)` |
| Convert response | Need `response.json()` | Data is available in `response.data` |
| Error handling | HTTP errors need to be checked manually | HTTP errors are automatically rejected |
| Syntax | Uses Promise-based syntax | Uses Promise-based syntax |

---