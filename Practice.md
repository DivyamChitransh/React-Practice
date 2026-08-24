# React Practice Questions — Topic Wise

---

# 1. Practice — Counter

Create:
```text
0  [Increase]  [Decrease]  [Reset]
```
Requirements:

- Increase should increase the count.
- Decrease should decrease the count.
- Reset should set the count to 0.

---

# 2. Practice — Like Button

Create:

```text
❤️ 0  [Like]
```

Every click should increase the likes.

---

# 3. Practice — Toggle

Create:

```text
[Show / Hide]
```

Click the button to show or hide:

```text
Hello React
```

---

# 4. Practice — Student Cards

Create a `StudentCard` component.

Props:

```text
name
age
course
city
```

Render at least 3 students using the same component.

---

# 5. Practice — Product Cards

Create a `ProductCard` component.

Props:

```text
name
price
category
rating
```

Render at least 5 products.

---

# 6. Practice — Add to Cart

Create a ProductCard.

Before clicking:

```text
[Add to Cart]
```

After clicking:

```text
[Added ✓]
```

Use:

```jsx
useState()
```

---

# 7. Practice — Character Counter

Create:

```text
[Write something here...]  Characters: 0
```

The character count should update while typing.

---

# 8. Practice — Login Form

Create:

```text
Email: [____________]
Password: [____________]
[Login]
```

Use state to store:

```text
email
password
```

On submit, display the entered email.

---

# 9. Practice — Quantity Counter

Create:

```text
Product Name
Price: ₹500
[-] 0 [+]
Total: ₹0
```

Requirements:

- `+` increases quantity.
- `-` decreases quantity.
- Quantity should not go below 0.
- Total should be:

```text
price × quantity
```

---

# 10. Practice — Profile Form

Create a form with:

```text
Name
Age
City
Course
[Submit]
```

Store every field using state.

After submitting, display:

```text
Name: Rahul
Age: 21
City: Delhi
Course: React
```

---

# 11. Practice — Simple Calculator

Create a small calculator with:

```text
[1] [2] [3]
[4] [5] [6]
[7] [8] [9]
[0]
```

Use state to display the selected number and total.

---

# 12. Practice — Todo List

Create a todo input and add button.

Example:

```text
[Add task]
```

Requirements:

- Add tasks to a list.
- Show task count.
- Remove a task when clicked.

---

# 13. Practice — Search Filter

Create a list of items such as:

```text
Apple
Banana
Mango
Orange
Grapes
```

Add a search box.

Requirements:

- Type in the search box.
- Filter items dynamically.
- Display matching results only.

---

# 14. Practice — Theme Toggle

Create a button that toggles between:

```text
Light Theme
Dark Theme
```

Use state to switch theme styles.

---

# 15. Practice — Show/Hide Details

Create a product card with a button:

```text
[Show Details]
```

When clicked, display:

```text
Detailed description of the product
```

Use state to toggle the details.

---

# 16. Practice — Form Validation

Create a form with:

```text
Name
Email
Password
[Submit]
```

Requirements:

- If any field is empty, show an error message.
- If valid, show success message.

---

# 17. Practice — Increment by 5

Create a counter that starts from 0.

Buttons:

```text
[+5] [-5]
```

Requirements:

- +5 adds 5
- -5 subtracts 5
- Show the updated number

---

# 18. Practice — Greeting App

Create a form with:

```text
Name: [____________]
[Submit]
```

On submit, display:

```text
Hello Rahul!
```

---

# 19. Practice — Discount Calculator

Create a product price form.

Example:

```text
Price: ₹1000
Discount: 10%
Final Price: ₹900
```

Use state to update the price dynamically.

---

# 20. Practice — User Card List

Create a reusable component called `UserCard`.

Props:

```text
name
email
role
```

Render at least 4 users using the same component.

---

# 21. Practice — Quiz Option Selector

Create a multiple-choice question.

Example:

```text
Q: Capital of India?
A) Delhi
B) Mumbai
C) Kolkata
```

When selected, display the chosen answer.

---

# 22. Practice — Favourite Color

Create a set of buttons:

```text
[Red] [Blue] [Green]
```

When clicked, display the selected color.

---

# 23. Practice — Password Toggle

Create a password input with a button:

```text
[Show Password]
```

When clicked, the password should be visible.

---

# 24. Practice — Rating Button

Create a rating system:

```text
★ ★ ★ ★ ★
```

When a star is clicked, show the selected rating.

---

# 25. Practice — Attendance Marking

Create a list of students and a button for each.

When clicked, mark them as:

```text
Present / Absent
```

Use state to toggle attendance.

---

# 26. Practice — Menu Toggle

Create a menu button:

```text
[Menu]
```

When clicked, show or hide the menu items.

---

# 27. Practice — Image Slider

Create a slider with previous/next buttons.

Use state to move through a list of images.

---

# 28. Practice — FAQ Accordion

Create a list of FAQs.

When clicked, show or hide the answer for each item.

---

# 29. Practice — Tab Switching

Create tabs:

```text
Home   About   Contact
```

Clicking a tab should show the corresponding content.

---

# 30. Practice — Pagination

Create a list of 20 items.

Show only 5 items per page.

Add next and previous buttons.

---

# 31. Practice — Array Map Rendering

Create an array of fruits and render them using `.map()`.

Example:

```text
Apple
Banana
Orange
Mango
```

---

# 32. Practice — Dynamic List Rendering

Create a list of products from an array.

Render each item using a component.

---

# 33. Practice — Random Number Generator

Create a button:

```text
[Generate Random Number]
```

Display a random number between 1 and 100.

---

# 34. Practice — Temperature Converter

Create a temperature input.

Convert:

```text
Celsius to Fahrenheit
```

Display the converted value.

---

# Practice Questions for useEffect

# 35. Practice — Counter + useEffect

Create a counter:

```text
Count: 0 [Increase]
```

Use:

- useState
- useEffect

Whenever the count changes, print:

```text
Count changed
```

in the console.

---

# 36. Practice — Fetch Users

Use this API:

```text
https://jsonplaceholder.typicode.com/users
```

Fetch the users using `fetch()`.

Display:

```text
Users
Leanne Graham
Ervin Howell
Clementine Bauch
...
```

---

# 37. Practice — User Details

Using the same API, display:

```text
Name
Email
City
```

Example:

```text
Name: Leanne Graham
Email: Sincere@april.biz
City: Gwenborough
```

---

# 38. Practice — Loading State

Modify the Users API project.

While the API request is running, display:

```text
Loading...
```

After the data is received, display the users.

---

# 39. Practice — Error Handling

Add an error state.

If the API request fails, display:

```text
Something went wrong
```

Try changing the API URL to an incorrect URL and test your error handling.

---

# 40. Practice — Axios

Install Axios:

```bash
npm install axios
```

Use Axios to fetch:

```text
https://jsonplaceholder.typicode.com/users
```

Display:

```text
Name
Email
City
```

---

# 41. Practice — Posts API

Use:

```text
https://jsonplaceholder.typicode.com/posts
```

Display:

```text
Post Title
Post Body
```

Use:

- useEffect
- useState
- Axios or Fetch
- map()
- key

---

# 42. Practice — User List

Create a component that displays all users in cards.

Each card should contain:

```text
-------------------------
Name
Email
Phone
Website
-------------------------
```

API:

```text
https://jsonplaceholder.typicode.com/users
```

---

# 43. Practice — Product API

Use this API:

```text
https://fakestoreapi.com/products
```

Display:

```text
Product Title
Price
Category
Image
```

Create a separate component:

```text
ProductCard
```

Pass product information using props.

---

# 44. Practice — Loading + Error + Products

Using the Fake Store API:

```text
https://fakestoreapi.com/products
```

Implement:

- Loading state
- Error state
- API data
- Product cards
- map()
- key

Expected flow:

```text
Loading...
	↓
API Request
	↓
Success
	↓
Products
```

If API fails:

```text
Something went wrong
```

---

# 45. Challenge — Search Users

Fetch users from:

```text
https://jsonplaceholder.typicode.com/users
```

Create:

```text
Search User [________________]
```

Display users based on the search text.

Example:

```text
Search: Leanne
Leanne Graham
```

Use:

- useState
- useEffect
- API
- map()
- input
- filter()

---

# 46. Challenge — Product Page

Create a simple product page using:

```text
https://fakestoreapi.com/products
```

Display all products as cards.

Each card should contain:

```text
Image
Title
Price
Category
[View Product]
```

---

# 47. Final Challenge

Create a small Product App.

Requirements:

### API

Use:

```text
https://fakestoreapi.com/products
```

### Features

- Fetch products
- Display products
- Loading message
- Error message
- Product cards
- Search products
- Add to Cart button
- Conditional rendering for Add / Added

### Expected UI

```text
--------------------------------------------
Product Store
Search: [________________________]
--------------------------------------------
Product 1
Image
Title
Price
[Add to Cart]

Product 2
Image
Title
Price
[Added ✓]

Product 3
Image
Title
Price
[Add to Cart]
--------------------------------------------
```

---

# 48. Practice — Small To-Do App

Create a mini to-do app with:

- input field
- add button
- list of tasks
- delete button

---

# 49. Practice — Signup Form

Create a signup form with:

```text
Name
Email
Password
Confirm Password
[Submit]
```

Validate whether both passwords match.

---

# 50. Practice — Age Calculator

Create a form where user enters birth year.

Display the calculated age.

---

# 51. Practice — Currency Converter

Convert one currency to another.

Example:

```text
₹1000 to USD
```

Display the converted value.

---

# 52. Practice — Color Picker

Create color buttons and show the selected color preview.

---

# 53. Practice — Notification Banner

Create a button that shows a notification message like:

```text
Saved successfully!
```

Use a state variable to display or hide it.

---

# 54. Practice — Review Form

Create a review form with:

```text
Name
Review
Rating
[Submit]
```

Show submitted review in a card format.

---

# 55. Practice — Bookmarks App

Create a bookmark button for a website.

When clicked, show:

```text
Bookmarked
```

---

# 56. Practice — Time Tracker

Create a button to start and stop a timer.

Display elapsed time in seconds.

---

# 57. Practice — Live Search Box

Create a list of names and a search field.

As the user types, results update instantly.

---

# 58. Practice — Questions Bank

Create a set of 5 questions.

Each question should have answer options and a submit button.

Display the final score.

---

# 59. Practice — Basic Routes

Create a React Router application with these pages:

```text
/
/about
/contact
```

Display a different heading on each page.

Use:

- `BrowserRouter`
- `Routes`
- `Route`

---

# 60. Practice — Navbar Navigation

Create a navbar with links for:

```text
Home | About | Products | Contact
```

Requirements:

- Use `Link` for navigation.
- Do not reload the browser page while changing routes.
- Show the active page content below the navbar.

---

# 61. Practice — Navigate after Login

Create a login page with:

```text
Email: [____________]
Password: [____________]
[Login]
```

After clicking Login, navigate to `/dashboard` using `useNavigate`.

---

# 62. Practice — Product Details with useParams

Create product routes using this pattern:

```text
/products/:id
```

Display the product ID from the URL using `useParams`.

Example:

```text
/products/12  →  Product ID: 12
```

---

# 63. Practice — Product List to Details

Create a product list with at least 4 products.

Requirements:

- Each product should have a `View Details` link.
- The link should open `/products/:id`.
- Use `useParams` to display the selected product.

---

# 64. Practice — 404 Not Found Page

Create a Not Found page for an unknown route.

Requirements:

- Use the wildcard route `*`.
- Display:

```text
404 - Page Not Found
```

- Add a link to return to the Home page.

---

# 65. Practice — Loading State

Fetch users from:

```text
https://jsonplaceholder.typicode.com/users
```

Requirements:

- Show `Loading users...` while the request is running.
- Show the users after a successful response.
- Use `useState` and `useEffect`.

---

# 66. Practice — Error State

Create an API component that handles a failed request.

Requirements:

- Store the error message in an `error` state.
- Check `response.ok` before reading the response.
- Display:

```text
Something went wrong
```

when the request fails.

---

# 67. Practice — Loading, Error, and Success UI

Create a user list with these three states:

```text
Loading users...
Something went wrong [Retry]
Users list
```

Requirements:

- Use `loading`, `error`, and `users` state.
- Use `try/catch/finally`.
- The Retry button should call the API again.

---

# 68. Practice — Save Theme in localStorage

Create a Light/Dark theme toggle.

Requirements:

- Save the selected theme in `localStorage`.
- Read the saved theme when the application loads.
- Keep the selected theme after refreshing the page.

---

# 69. Practice — Save User Object in Storage

Create a small profile form with:

```text
Name
City
[Save]
```

Requirements:

- Save the user object using `JSON.stringify()`.
- Read it using `JSON.parse()`.
- Display the saved profile after refreshing the page.

---

# 70. Practice — Conditional Login Route

Create these routes:

```text
/login
/dashboard
```

Requirements:

- Show Login when the user is logged out.
- Show Dashboard when the user is logged in.
- Use `Navigate` to redirect an unauthenticated user to `/login`.

---

# 71. Practice — Protected Profile Route

Create a protected `/profile` route.

Requirements:

- Store a demo login token in `localStorage`.
- Allow the profile page only when the token exists.
- Remove the token on Logout.
- Redirect to `/login` after logout.

---

# 72. Practice — Authentication and Authorization

Create a login flow for two users:

```text
Aman  → user
Rahul → admin
```

Create these routes:

```text
/dashboard
/admin
```

Requirements:

- Both logged-in users can open `/dashboard`.
- Only the admin can open `/admin`.
- Redirect a logged-out user to `/login`.
- Redirect a normal user to `/forbidden`.

---

# 73. Practice — Complete Auth Router

Build a small application with:

```text
/login
/dashboard
/products/:id
/admin
/forbidden
```

Requirements:

- Use `Link` for navbar navigation.
- Use `useNavigate` after login and logout.
- Use `useParams` for product details.
- Use loading and error states while fetching products.
- Persist login state in storage.
- Protect dashboard and product routes.
- Allow only admins to open the admin route.
- Add a logout button and a wildcard 404 route.

---

# 74. Practice — Shared Counter State

Create a parent component with two child components:

```text
Counter Display
Counter Buttons
```

Requirements:

- Store the count in the parent component.
- Pass the count to `CounterDisplay` using props.
- Pass the update function to `CounterButtons`.
- Both children should use the same count.

---

# 75. Practice — Shared Input State

Create a form with an input component and a preview component.

Requirements:

- Keep the input value in the common parent.
- Pass the value to the preview component.
- Display the typed text immediately in the preview.
- Use a callback prop to update the parent state.

---

# 76. Practice — Temperature Calculator

Create Celsius and Fahrenheit input components.

Requirements:

- Keep the temperature state in the parent component.
- Lift the shared state up from the input components.
- Update the converted value when either input changes.
- Do not maintain duplicate independent state in both inputs.

---

# 77. Practice — Sibling Components Communication

Create two sibling components:

```text
Product List
Cart Summary
```

Requirements:

- Store the cart items in their common parent.
- Product List should add products to the cart.
- Cart Summary should display the cart count.
- Pass data and handler functions through props.

---

# 78. Practice — Batching Multiple Updates

Create a button that updates these states together:

```text
Name
Age
City
```

Requirements:

- Update all three states inside one event handler.
- Observe the result after the click.
- Understand that React batches the updates into one re-render.

---

# 79. Practice — Counter with Functional Updates

Create a button named:

```text
Increase by 3
```

Requirements:

- The button should call the count setter three times.
- Use functional updates based on the previous count.
- The count should increase by exactly 3 on every click.

---

# 80. Practice — Batching with Async Updates

Create a button that updates a message and a loading state inside a Promise or
`setTimeout`.

Requirements:

- Set loading to `true` before the async work.
- Set the message after the async work completes.
- Set loading to `false` at the end.
- Observe how modern React batches these updates.

---

# 81. Practice — Controlled Text Input

Create a controlled input:

```text
Name: [____________]
Typed value: ________
```

Requirements:

- Store the input value in state.
- Use `value` and `onChange`.
- Display the value while typing.
- Add a Clear button.

---

# 82. Practice — Controlled Login Form

Create a controlled login form with:

```text
Email
Password
[Login]
```

Requirements:

- Store both fields in state.
- Prevent the default form submission.
- Show an error if either field is empty.
- Display the submitted email after valid submission.

---

# 83. Practice — Controlled Form Validation

Create a registration form with:

```text
Name
Email
Age
```

Requirements:

- Use controlled inputs.
- Show validation messages while typing or after submit.
- Name and email should be required.
- Age should be greater than 18.

---

# 84. Practice — Uncontrolled Form with useRef

Create a form with:

```text
Name
City
[Submit]
```

Requirements:

- Do not store input values in state.
- Use `useRef` to read the values on submit.
- Prevent the default form submission.
- Display the submitted values below the form.

---

# 85. Practice — Controlled vs Uncontrolled Form

Create two small forms on the same page:

```text
Controlled Form
Uncontrolled Form
```

Requirements:

- Use state, `value`, and `onChange` in the controlled form.
- Use `useRef` and `defaultValue` in the uncontrolled form.
- Submit both forms and display their values.
- Write a short note explaining which form is easier to validate and why.

---

# Final Note

These practice questions are designed to help students revise React topics with real implementation using components, props, events, forms, state, routing, API states, storage, authentication, state lifting, batching, and controlled and uncontrolled components.
