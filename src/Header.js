import { Image, useTheme } from "@aws-amplify/ui-react";
import React from 'react';
import logo from "./img/mt1.png";
import logo2 from "./img/mt2.png";

export function Header() {
  const { tokens } = useTheme();

  return (
    <div class="App-logos">

    <Image
      className="App-logo"
      alt="logo"
      src={logo}
      padding={tokens.space.medium}
      background={logo2}
    />
      </div>
  );
}
