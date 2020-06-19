import { addDecorator, configure } from "@storybook/html";
import { createRoot } from "solid-js";

addDecorator(story => {
  return createRoot(() => story());
});