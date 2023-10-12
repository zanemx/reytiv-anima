import { StatusbarIphone } from ".";

export default {
  title: "Components/StatusbarIphone",
  component: StatusbarIphone,
  argTypes: {
    type: {
      options: [
        "navigation-blue",
        "mic-active",
        "default",
        "recording-orange",
        "video-active",
        "phone-green",
        "share-play",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    darkMode: true,
    type: "navigation-blue",
    className: {},
    notch:
      "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/notch@2x.png",
    statusbarTimeDivClassName: {},
    battery:
      "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/battery@2x.png",
    wifi: "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/wifi.svg",
    iconMobileSignal:
      "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/icon---mobile-signal.svg",
  },
};
