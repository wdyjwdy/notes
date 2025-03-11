# React

### Passing Props

1. Pass props

   ```jsx
   function Parent() {
     return <Child age={18} />;
   }

   function Child({ age }) {
     return <h1>{age}</h1>;
   }
   ```

2. Pass JSX

   ```jsx
   function Parent() {
     return (
       <Child>
         <h1>Hello</h1>
       </Child>
     );
   }

   function Child({ children }) {
     return <section>{children}</section>;
   }
   ```

> [!NOTE]
> React component functions accept a single argument, a props object:
>
> ```jsx
> function Child(props) {
>   let { age } = props;
>   let { children } = props;
> }
> ```

### Conditional Rendering

1. if statement

   ```jsx
   function Text({ condition }) {
     let text;
     if (condition) {
       text = <p>A</p>;
     } else {
       text = <p>B</p>;
     }
     return <section>{text}</section>;
   }
   ```

2. ternary operator (if true, render A, otherwise B)

   ```jsx
   function Text({ condition }) {
     return <section>{condition ? <p>A</p> : <p>B</p>}</section>;
   }
   ```

3. AND operator (if true, render A, otherwise nothing)

   ```jsx
   function Text({ condition }) {
     return <section>{condition && <h1>A</h1>}</section>;
   }
   ```

> [!NOTE]
>
> 1. ternary operator
>
> ```js
> true ? A : B; // return A
> false ? A : B; // return B
> ```
>
> 2. AND operator
>
> ```js
> true && A; // return A
> false && A; // return false
> 0 && A; // return 0
> ```
