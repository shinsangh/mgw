import React, { useState, useEffect } from 'react';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import './App.css'
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
const restEndpoint = "https://30hm1g62xi.execute-api.ap-northeast-1.amazonaws.com/kintone/kintone";
const endpoint2 = "https://9dxbyj8je0.execute-api.ap-northeast-1.amazonaws.com/slacktone2/kintone";

function getTitle(){
  const response = fetch(restEndpoint);
  return response.then(res => res.json());
}
function Profile({ signOut, user }) {
  const [msjbtdis, enablechkButton] = useState("");
  if(user.attributes.email=='js.noh@mountain-info.co.jp'){
  }
   
  const [inputs, setInputs] = useState({
    num1:'',
    num2:'',
    num3:'',
    num4:'',
    num5:'',
    email: user.attributes.email,
    title: '  ',
    detail: '  ',
    loto1:'',
    loto2:'',
    loto3:'',
    loto4:'',
    loto5:'',
    mySelected:'아직 없습니다',
 
  });
    


  const {email, title, detail,num1,num2,num3,num4, num5,loto1,loto2,loto3,loto4,loto5,mySelected } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
   
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        [name]: value // name 키를 가진 값을 value 로 설정
      });

    if(user.attributes.email=='js.noh@mountain-info.co.jp'){
      enablechkButton(e.target.value);
    }
    
  };

  async function check(){
    var check;
    let bae=0;
    let kim=0;
    let shin=0;
    let kim2=0;
    let lee=0;
    try {
      check = await getTitle(); 
    }
    catch(error){
      console.log(error);
    }
    let members = ['sj.bae@mountain-info.co.jp','ys.kim@mountain-info.co.jp','sh.shin@mountain-info.co.jp','sk.kim@mountain-info.co.jp','sw.lee@mountain-info.co.jp'];
    for(var i=0; i<check.length; i++){ 
      
      for(var m=0; m <5; m++){
      if(check[i].email.value===members[m]){
        let number = [check[i].num1.value,check[i].num2.value,check[i].num3.value,check[i].num4.value,check[i].num5.value];
        let chk = [loto1,loto2,loto3,loto4,loto5];
        
          switch ( check[i].email.value ) {
            case "sj.bae@mountain-info.co.jp":
              for(var j=0; j < 6; j++){
                for(var k=0; k <5; k++){
                    if(number[j] == chk[k]){
                      bae++;
                    }
                  }
                }
              break;
            case "ys.kim@mountain-info.co.jp":
              for(var j=0; j < 6; j++){
                for(var k=0; k <5; k++){
                    if(number[j] == chk[k]){
                      kim++;
                    }
                  }
                }
              break;
            case "sh.shin@mountain-info.co.jp":
              for(var j=0; j < 6; j++){
                for(var k=0; k <5; k++){
                    if(number[j] == chk[k]){
                      shin++;
                    }
                  }
                }
              break;
            case "sk.kim@mountain-info.co.jp":
              for(var j=0; j < 6; j++){
                for(var k=0; k <5; k++){
                    if(number[j] == chk[k]){
                      kim2++;
                    }
                  }
                }
              break;
            case "sw.lee@mountain-info.co.jp":
              for(var j=0; j < 6; j++){
                for(var k=0; k <5; k++){
                    if(number[j] == chk[k]){
                      lee++;
                    }
                  }
                }
              break;
             
          }
      
          let board = [
            {name : '이상욱: ', score : lee},
            {name : '김요셉: ', score : kim},
            {name : '신상훈: ', score : shin},
            {name : '김선관: ', score : kim2},
            {name : '배수진: ', score : bae}
          ];
          board.sort(function(a, b) {
            return b.score-a.score ;
          });

        const content = document.getElementById('lotochk');
        content.innerHTML = board[0].name+board[0].score+"개, "+board[1].name+board[1].score+"개, "+board[2].name+board[2].score+"개, "+board[3].name+board[3].score+"개, "+board[4].name+board[4].score+"개";
        content.style.color = "yellow";
        content.style.backgroundColor = "black";
        
      
      }
    }
    }
 
  };

  
	return (
    
		
			<div className="mini_gnb_content"> 
       
       <div id="bingoWarp">
        <div id='bingTitle'><br />
          <span style={{
              color: "yellow", 
              backgroundColor: "black"
            }}>빙고 번호를 선택해 주세요 1~25까지 (중복안되도록 체크하세요)
          </span>
        </div>
            <input type="number" name="loto1" min="1" max="20" onChange={onChange} value={loto1} />
            <input type="number" name="loto2" min="1" max="20" onChange={onChange} value={loto2} />
            <input type="number" name="loto3" min="1" max="20" onChange={onChange} value={loto3} />
            <input type="number" name="loto4" min="1" max="20" onChange={onChange} value={loto4} />
            <input type="number" name="loto5" min="1" max="20" onChange={onChange} value={loto5} />
            <button onClick={check} disabled={!msjbtdis}>당첨 확인(사장님 전용)</button><br/> 
            <div id='lotochk'/>
                      
              
        </div>
      </div>
	
	);
}

export default withAuthenticator(Profile);
