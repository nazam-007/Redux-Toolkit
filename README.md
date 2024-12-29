# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# why we use redux
Redux is a state management library commonly used in JavaScript applications, particularly with libraries like React. It provides a  centralized way to manage the state of your application. Here's why Redux is often used:

 ## 1. Centralized State Management
Redux stores the entire application state in a single place called the store, making it easier to:
Share state between components.
Debug the application since all state updates are centralized and predictable.

## 2.Efficient State Sharing
Redux simplifies sharing state across deeply nested components without prop drilling (passing props through many levels of components).

## 3.Consistency Across the Application
With Redux:

Components access state in a consistent way using selectors.
The logic for updating state (reducers) is kept separate from the UI.

## 4. Middleware for Side Effects
Redux allows handling asynchronous operations (e.g., API calls) using middleware like:

redux-thunk
redux-saga
Middleware sits between dispatching an action and the reducer, enabling complex workflows.

# When to Use Redux
Complex State Logic: When your app has many interdependent pieces of state.
Global State: When you need to share state across multiple components.
State Persistence: When you want to persist state (e.g., saving user preferences to local storage).
Predictable Behavior: When debugging and testing state transitions is critical.





# Features
Increment: Increase the counter by 1.
Decrement: Decrease the counter by 1.
Reset: Reset the counter to 0.
Increment by Amount: Increment the counter by a user-defined value.

# State Management:

useSelector: Reads the counter value from the Redux store.
useDispatch: Dispatches actions to update the state.

# Actions:

increment: Increases the counter by 1.
decrement: Decreases the counter by 1.
reset: Resets the counter to 0.
incrementByAmount: Increases the counter by the user-specified amount.

# Input Handling:

The amount state is managed locally using React's useState.
The input value is passed to the incrementByAmount action after converting it to a number

# Functionality
Click + to increase the counter.
Click - to decrease the counter.
Enter a number in the input field and click Increase by Amount to update the counter.
