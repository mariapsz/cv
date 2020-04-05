import React from "react";
import {Header} from "./Header";

export const AppContainer = (props: any) => {
  return <div>
      <Header/>
      <div>
          {props.children}
      </div>
  </div>
};