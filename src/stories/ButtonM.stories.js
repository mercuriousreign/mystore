import React from "react";
import Button from "../components/Button";

// import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// storiesOf("ButtonCalendar", module).add("Base", () => (
//   <Button onClick={action("SetState")} disabled={false} children={""} />
// ));
export default {
  title: "Exampleee/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: "pie",
    backgroundColor: { control: "color" },
  },
  onClick: Function.prototype,
};

export const Primary = {
  render: () => <Button onClick={action()} label="mew" />,
};
