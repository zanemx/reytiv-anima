import React from "react";
import { HomeIndicator } from "../../components/HomeIndicator";
import { StatusbarIphone } from "../../components/StatusbarIphone";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-2">
        <HomeIndicator
          className="home-indicator-instance"
          darkMode={false}
          homeIndicatorClassName="design-component-instance-node"
        />
        <div className="frame">
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-2" />
        </div>
        <div className="text-wrapper-2">Loading</div>
        <div className="text-wrapper-3">Version 1.0</div>
        <img
          className="frame-2"
          alt="Frame"
          src="https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/frame-1000004822.svg"
        />
        <StatusbarIphone
          battery="https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/battery-7@2x.png"
          className="statusbar-iphone-13"
          darkMode={false}
          iconMobileSignal="https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/icon---mobile-signal-7.svg"
          notch="https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65282f4dcf98306813fe78ba/img/notch-14@2x.png"
          statusbarTimeDivClassName="statusbar-iphone-instance"
          type="default"
          wifi="https://cdn.animaapp.com/projects/6528292cafe76e5af1199a35/releases/65283c53afe76e5af1199a67/img/wifi-14.svg"
        />
      </div>
    </div>
  );
};
