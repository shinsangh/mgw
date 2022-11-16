import React from 'react';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import "../css/App.css";
import awsExports from "../aws-exports";
import Namecard from "../main/name";

import Notice from "../main/MainTable.tsx";

Amplify.configure(awsExports);



function Main() {
  
  return (
    <main className="main" style={{flexDirection: 'row'}}>
      <view style={{flexDirection: 'column', display:'flex', width: '20vw', minWidth: '300px'}}>
      <Namecard />
      </view>
      <view style={{flexDirection: 'column', display:'flex', width: '60vw'}}>

        <Notice />
      </view>

    </main>
  );
}

export default withAuthenticator(Main);