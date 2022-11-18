import React from 'react';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import "../css/App.css";
import awsExports from "../aws-exports";
import Namecard from "../main/name";

import Notice from "../main/MainTable.tsx";

Amplify.configure(awsExports);

var DOMAIN = '2g8bjeellouf.cybozu.com'; //kintone環境のドメイン
var APP_ID = 3;   //シンプルToDoアプリのアプリID
var BASE_URL = "https://" + DOMAIN + '/k/v1/';
var APITOKEN =  "r0Jz3iaR7oQC40GA3KcMArDhDITbZOzUCal4fYUp";
var headers = {'X-Cybozu-API-Token': APITOKEN};

// const { KintoneRestAPIClient } = require('@kintone/rest-api-client');
// // クライアントの作成
// const params = {
//   baseUrl: BASE_URL,
//   headers: headers,
//   auth: {
//     /** APIトークン認証 */
//     apiToken: APITOKEN, // APIトークン
//   }
// }

// const client = new KintoneRestAPIClient(params)
var httpRequest = new XMLHttpRequest();


httpRequest.onreadystatechange = function(){
  // Process the server response here.
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      alert(httpRequest.responseText);
    } else {
      alert('There was a problem with the request.');
    }
  }
}


const Main = async () => {

  // const resp = await client.record.getRecord({
  //   app: APP_ID, // アプリID
  // });
  // console.log(resp);
  
  return (
    
    <main className="main" style={{flexDirection: 'row'}}>
      <view style={{flexDirection: 'column', display:'flex', width: '20vw', minWidth: '300px'}}>
      <Namecard />
      </view>
      <view style={{flexDirection: 'column', display:'flex', width: '60vw'}}>
      </view>
  
    </main>
  );
}

export default withAuthenticator(Main);