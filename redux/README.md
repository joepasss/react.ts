### REDUX

&nbsp;

#### What is Redux?

---

redux is a state management library. it is used togeter with react or other view library.
it helps keep state of the whole app in a single place.

#### State

---

"state" as the data that is used to render the app any given time. We keep this data in Javascript object.

For example, in a simple app which renders a list of foods, the state look like this:

```
let state = {
  foods: [
    {name: "pizza"}
    {name: "hamburger"}
  ],
};
```

#### How to Modify the State?

to modify the state from within a component we dispatch an action:

```
// SomeComponent.js
dispatch({
  type: "foods/add",
  payload: {
    food: {name: "lasagna"}
  }
});

```

Dispatching actions is the only way to change the state.
An action is represented by an object with the "type" property is the action's name.

how a basic reducer looks like:

```
let initialState = {
  foods: [
    {name: "pizza"}
    {name: "hamburger"}
  ],
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case "foods/add":
      let { food } = action.payload;
      return {
        ...state,
        foods: [...state.foods, food],
      };

    default:
      return state;
  }
}
```

&nbsp;

The reducer copies the previous state object instead of mutating it. The rule is that state must be immutable (read-only). The reducer should copy any object that it would like to change before changing it. This includes the root object and any nested objects.

Reducer function must be pure. Given the same input it should always produce the same output without causing any side effects. A side affect is something that reads or changes the environment around the function.
