import React, { useEffect, useState } from "react";
import Title from './components/Title'
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Board from './containers/Board'
import axios from "axios";
import './App.css'
import awsExports from "./aws-exports";
import { display } from "@mui/system";

Amplify.configure(awsExports);
const restEndpoint = "https://30hm1g62xi.execute-api.ap-northeast-1.amazonaws.com/kintone/kintone";
const endpoint2 = "https://9dxbyj8je0.execute-api.ap-northeast-1.amazonaws.com/slacktone2/kintone";


function getTitle(){
  const response = fetch(restEndpoint);
  return response.then(res => res.json());
}
function App2({ user })  {
  const [inputs, setInputs] = useState({
    email: user.attributes.email+'bingo',
    bing0:'',bing1:'',bing2:'',bing3:'',bing4:'',bing5:'',bing6:'',bing7:'',bing8:'',bing9:'',bing10:'',bing11:'',bing12:'',bing13:'',bing14:'',bing15:'',bing16:'',bing17:'',bing18:'',bing19:'',bing20:'',bing21:'',bing22:'',bing23:'',bing24:''
  });
  


  const { email,bing0,bing1,bing2,bing3,bing4,bing5,bing6,bing7,bing8,bing9,bing10,bing11,bing12,bing13,bing14,bing15,bing16,bing17,bing18,bing19,bing20,bing21,bing22, bing23,bing24 } = inputs; // 비구조화 할당을 통해 값 추출

  

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(restEndpoint)
        .then(response => {
          setData(response.data);
        });
}, []);
 
  const DbList = ({ data }) => {

    // function sortedPlayers() {
    //   return players
    //     .sort((p1, p2) => (p2.score - p1.score))
    // }
   

    const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
      const x = e.currentTarget.getAttribute("id");
      const element = document.getElementById(x);
      element.disabled = "true";           
      element.style.color = "hsl(210deg 11% 73%)"; 
      element.style.backgroundColor = "hsl(210, 25%, 25%)"; 
    };
  

    async function disCheck(){
      var dislist;
      
      try {
        dislist = await getTitle(); 
      }
      catch(error){
        console.log(error);
      }
  
      function isSelected(v)  {
        if(v.email.value === 'js.noh@mountain-info.co.jp')  {
          return true;
        }
      }
      const noh = dislist.find(isSelected);
      let disChk = [noh.num1.value,noh.num2.value,noh.num3.value,noh.num4.value,noh.num5.value]
  
      for(var i=0; i <25; i++){
        const event = document.getElementById('id'+i);

        if(disChk.includes(event.value)){
            event.disabled = "true";           
            event.style.color = "hsl(210deg 11% 73%)"; 
            event.style.backgroundColor = "hsl(210, 25%, 25%)"; 
        }

        
      } 
    }
    disCheck();

    return (
        <div>
        
            {data.map(data => {
              
              if(data.email.value==email){
                
                let bingos = data.bingo.value;
                const arr = bingos.split(",");
                
                
                return(
                  <div className="bingapp">
                   
                      {arr.map((item, index) => (
                      
                      <input id={'id'+index} type='button' value={item} style={{width: "20%", height:"3.1em"}} onClick={handleOnClick}/> 
                      ))}
                    
                    <style>
                      div#bingoWarp{"{display: none;}"}
                    </style>
                  </div>
                )

            }
              
            })}
        </div>
    );
};



  
    return (
      <div className="BingApp2">
        
        <DbList data={data}/>
        {/* {nameList} */}
        
      </div>
      
    )
  }

  export default withAuthenticator(App2);