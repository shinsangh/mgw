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

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        [name]: value // name 키를 가진 값을 value 로 설정
      });
      
           
  
  };
  async function onKintone (){
    
    let endpoint = endpoint2;
    let goKin = '?email='+email+'&bingo='+bing0+','+bing1+','+bing2+','+bing3+','+bing4+','+bing5+','+bing6+','+bing7+','+bing8+','+bing9+','+bing10+','+bing11+','+bing12+','+bing13+','+bing14+','+bing15+','+bing16+','+bing17+','+bing18+','+bing19+','+bing20+','+bing21+','+bing22+','+bing23+','+bing24;
    console.log(goKin);
    var text;
    try {
      text = await getTitle(); 
    }
    catch(error){
      console.log(error);
    }
    
    for(var i=0; i<text.length; i++){ 
      console.log(text[i].email.value);
      console.log(email);
      if(email==text[i].email.value){
        alert("이벤트 참가는 한번만 가능합니다. 수정 원할시 별도 요청필요");
        // eslint-disable-next-line no-restricted-globals
        location.reload();
        return;
        
      }
    }
    const url = endpoint+goKin;
    fetch(url);
    alert("이벤트 참여 완료")
    // eslint-disable-next-line no-restricted-globals
    location.reload();
 
  };

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
    function handleOnClick(){

    }

    
    return (
        <div>
        
            {data.map(data => {
              
              if(data.email.value==email){
                
                let bingos = data.bingo.value;
                const arr = bingos.split(",");
                

                return(
                  <div className="bingapp">
                    
                      {arr.map(v => (
                      
                      <input type='button' value={v} style={{width: "20%", height:"3.1em"}} onClick={handleOnClick}/> 
                      
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