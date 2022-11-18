const { KintoneRestAPIClient } = require('@kintone/rest-api-client');
// クライアントの作成
const client = new KintoneRestAPIClient({
  baseUrl: 'https://2g8bjeellouf.cybozu.com',
  auth: {
    apiToken : "r0Jz3iaR7oQC40GA3KcMArDhDITbZOzUCal4fYUp"
   }
});

client.record
    .getRecords ( { app: "3"  } ) 
    .then (( resp )  =>  { 
        console .log ( resp.records ); 
    } ) 
    . catch (( err )  =>  { 
        console .log ( err ); 
    } );
