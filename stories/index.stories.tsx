
import { createState, onCleanup } from "solid-js";

export default {
  title: "Demo"
};

export const heading = () => <h1>Hello World</h1>;

export const button = () => {
  return <button onClick={e => console.log(e)}>Hello Button</button>;
};

function Counter() {
  const [state, setState] = createState({ count: 0 });

  const timer = setInterval(() => {
    setState({ count: state.count + 1 });
  }, 1000);

  onCleanup(() => {
    clearInterval(timer);
  });

  return <div>{state.count}</div>;
}

export const counter = () => {
  return <Counter />;
};


