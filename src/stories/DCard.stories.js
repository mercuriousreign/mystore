import React from "react";
import DCard from "../components/DCard";

// import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { string } from "prop-types";

// storiesOf("ButtonCalendar", module).add("Base", () => (
//   <Button onClick={action("SetState")} disabled={false} children={""} />
// ));

export default {
  title: "Exampleee/DCard",
  component: DCard,
  tags: ["autodocs"],
  arg: {
    title: { control: { type: "string" } },
    description: "pie",
    backgroundColor: { control: "color" },
  },
  onClick: Function.prototype,
};

// export const Primary: Story<DCard> = (args) => <Button {...args} />;

// export const Primary = (args) => ({
//   render: () => <DCard {...args} />,
// });

// Primary.args = {
//   title: "Primary Button",
//   description: "Something else",
// };

export const CustomFooter = {
  render: (args) => <DCard {...args}></DCard>,
  args: {
    head: "Primary Button",
    description: "Something else",
    footer: "Built with Storybook",
  },
};

// export const Primary = {
//   render: () => <DCard description="weee" />,
// };
