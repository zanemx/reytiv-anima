/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StatusbarTime } from "../StatusbarTime";
import "./style.css";

export const StatusbarIphone = ({
  darkMode,
  type,
  className,
  notch = "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/notch@2x.png",
  statusbarTimeDivClassName,
  battery = "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/battery@2x.png",
  wifi = "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/wifi.svg",
  iconMobileSignal = "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/icon---mobile-signal.svg",
}) => {
  return (
    <div className={`statusbar-iphone ${className}`}>
      <img className="notch" alt="Notch" src={notch} />
      {type === "share-play" && (
        <img
          className="left-side"
          alt="Left side"
          src={
            darkMode
              ? "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/left-side-1@2x.png"
              : "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/left-side@2x.png"
          }
        />
      )}

      <div className={`left-side-2 type-0-${type}`}>
        {["default", "navigation-blue", "phone-green", "recording-orange", "video-active"].includes(type) && (
          <StatusbarTime
            className={`${["default", "video-active"].includes(type) && "statusbar-time-instance"}`}
            darkMode={darkMode ? true : undefined}
            divClassName={statusbarTimeDivClassName}
            type={
              type === "phone-green"
                ? "green"
                : type === "navigation-blue"
                ? "blue"
                : type === "recording-orange"
                ? "orange"
                : "default"
            }
          />
        )}

        {["mic-active", "share-play"].includes(type) && (
          <>
            <img
              className="battery"
              alt="Battery"
              src={
                darkMode
                  ? "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/battery-7@2x.png"
                  : type === "share-play" && !darkMode
                  ? battery
                  : "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/battery@2x.png"
              }
            />
            <img
              className="wifi"
              alt="Wifi"
              src={
                darkMode
                  ? "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/wifi-7.svg"
                  : type === "share-play" && !darkMode
                  ? wifi
                  : "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/wifi.svg"
              }
            />
            <img
              className="icon-mobile-signal"
              alt="Icon mobile signal"
              src={
                darkMode
                  ? "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/icon---mobile-signal-7.svg"
                  : type === "share-play" && !darkMode
                  ? iconMobileSignal
                  : "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/icon---mobile-signal.svg"
              }
            />
          </>
        )}

        {type === "mic-active" && <div className="recording-indicator" />}
      </div>
      {["default", "mic-active", "navigation-blue", "phone-green", "recording-orange", "video-active"].includes(
        type
      ) && (
        <div className={`right-side type-4-${type}`}>
          {["default", "navigation-blue", "phone-green", "recording-orange", "video-active"].includes(type) && (
            <>
              <img
                className="img"
                alt="Battery"
                src={
                  type === "video-active" && !darkMode
                    ? "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/battery@2x.png"
                    : darkMode
                    ? "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/battery-7@2x.png"
                    : battery
                }
              />
              <img
                className="wifi-2"
                alt="Wifi"
                src={
                  darkMode
                    ? "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/wifi-7.svg"
                    : type === "video-active" && !darkMode
                    ? "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/wifi.svg"
                    : wifi
                }
              />
              <img
                className="icon-mobile-signal-2"
                alt="Icon mobile signal"
                src={
                  darkMode
                    ? "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/icon---mobile-signal-7.svg"
                    : type === "video-active" && !darkMode
                    ? "https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/icon---mobile-signal.svg"
                    : iconMobileSignal
                }
              />
            </>
          )}

          {type === "mic-active" && (
            <StatusbarTime
              className="statusbar-time-instance"
              darkMode={darkMode ? true : undefined}
              divClassName={`${darkMode ? "class" : "class-2"}`}
              type="default"
            />
          )}

          {type === "video-active" && <div className="recording-indicator-2" />}
        </div>
      )}
    </div>
  );
};

StatusbarIphone.propTypes = {
  darkMode: PropTypes.bool,
  type: PropTypes.oneOf([
    "navigation-blue",
    "mic-active",
    "default",
    "recording-orange",
    "video-active",
    "phone-green",
    "share-play",
  ]),
  notch: PropTypes.string,
  battery: PropTypes.string,
  wifi: PropTypes.string,
  iconMobileSignal: PropTypes.string,
};
