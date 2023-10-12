import { StatusbarTime } from ".";

export default {
  title: "Components/StatusbarTime",
  component: StatusbarTime,
  argTypes: {
    type: {
      options: ["orange", "blue", "green", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    darkMode: true,
    type: "orange",
    className: {},
    divClassName: {},
  },
};
