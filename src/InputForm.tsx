import React, { useState, useEffect } from 'react';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useLocation } from 'react-router-dom';
import Bingo from "./Bingo2.tsx";
import axios from "axios";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
const restEndpoint = "https://30hm1g62xi.execute-api.ap-northeast-1.amazonaws.com/kintone/kintone";
const endpoint2 = "https://9dxbyj8je0.execute-api.ap-northeast-1.amazonaws.com/slacktone2/kintone";

function getTitle(){
  const response = fetch(restEndpoint);
  return response.then(res => res.json());
}
  
function Profile({ signOut, user }) {
  let bingchk = true;

  const [btdis, enableButton] = useState("");

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



    if(inputs.title!=='' && inputs.detail!==''&& inputs.num1!==''&& inputs.num2!==''&& inputs.num3!==''&& inputs.num4!==''&& inputs.num5!==''){enableButton(e.target.value);}

    
  };

  async function onKintone (){
    let endpoint = endpoint2;
    let goKin = '?title='+title+'&detail='+detail+'&email='+email+'&num1='+num1+'&num2='+num2+'&num3='+num3+'&num4='+num4+'&num5='+num5;
    var text;
    try {
      text = await getTitle(); 
    }
    catch(error){
      console.log(error);
    }
    
    for(var i=0; i<text.length; i++){ 
      if(text[i].email.value===email){
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
  
  function randomNum(){
    var Arrays = [] as  any;
    
    for(var i = 0; i < 5; i++) {
      let random = Math.floor(Math.random() * 20+1)
      if (Arrays.indexOf(' '+random) === -1) {
        Arrays.push(' '+random)
      } else {
        i--
      }
    }
    const lotto = document.querySelector('.md-4');
    const li = document.createElement("li");
    li.innerText = Arrays.toString();
    lotto.appendChild(li);             
    
  }


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

  async function myNum(){
    var mynum;
    try {
      mynum = await getTitle(); 
    }
    catch(error){
      console.log(error);
    }
    for(var i=0; i<mynum.length; i++){ 
      if(mynum[i].email.value===email){
        let number = [mynum[i].num1.value,mynum[i].num2.value,mynum[i].num3.value,mynum[i].num4.value,mynum[i].num5.value];
        const element = document.getElementById('my_div');
        element.innerHTML = '내 선택번호: ' +number;
        element.style.color = "yellow";
        element.style.backgroundColor = "black";
      }
      
    };
  }
  myNum();


	return (
		
		
			<div className="mini_gnb_content"> 
        <div id='my_div'>
          <span style={{
              color: "yellow", 
              backgroundColor: "black"
            }}>내 선택번호: 아직 없습니다.
          </span>
        </div>
        <Bingo/>
        <div id='bingTitle'><br />
          <span style={{
              color: "yellow", 
              backgroundColor: "black"
            }}>빙고 번호를 선택해 주세요 1~25까지
          </span>
        </div>
        <p className="md-4" style={{
              color: "yellow", 
              backgroundColor: "black"
            }}><button onClick={randomNum}>번호생성(sample)</button></p>
        <p className="md-5" style={{
              color: "yellow", 
              backgroundColor: "black"
            }}>
              송년회 이벤트
              <br />
              마운틴 로또 1~20까지 5개 선택하세요<br />
              (당첨 번호는 사장님께서 현장에서 당일 발표..) <br />당첨번호 5개 + 보너스 번호 2개 우선순위는 당첨번호 순서이며 동률의 순위가 나오는 경우는 보너스 번호가 많이 맞은 순서로 순위를 결정합니다.<br /><br />
              스코어 룰 설명<br />
              게임 순위에 따라 포인트가 주어집니다.<br />
              예를 들면 로또 게임에서 1등을 한 경우 1점 획득 2등은 2점..<br />
              통합 합산하여 포인트를 가장 적게 획득한 사람이 1등이 됩니다.<br />
              순위가 동률인 경우(공동 1등, 공동 2등이 발생하는 경우) 해당 인원들은 동일한 포인트를 받게 됩니다.
            </p>
				<div className="mini_gnb_btn_wrap">
        <input type="number" name="num1" min="1" max="20" onChange={onChange} value={num1} />
        <input type="number" name="num2" min="1" max="20" onChange={onChange} value={num2} />
        <input type="number" name="num3" min="1" max="20" onChange={onChange} value={num3} />
        <input type="number" name="num4" min="1" max="20" onChange={onChange} value={num4} />
        <input type="number" name="num5" min="1" max="20" onChange={onChange} value={num5} />
   
        <button onClick={onKintone} disabled={!btdis}>전송</button><br/><br/>
					

        <input type="number" name="loto1" min="1" max="20" onChange={onChange} value={loto1} />
        <input type="number" name="loto2" min="1" max="20" onChange={onChange} value={loto2} />
        <input type="number" name="loto3" min="1" max="20" onChange={onChange} value={loto3} />
        <input type="number" name="loto4" min="1" max="20" onChange={onChange} value={loto4} />
        <input type="number" name="loto5" min="1" max="20" onChange={onChange} value={loto5} />
        <button onClick={check} disabled>당첨 확인</button><br/> 
        <div id='lotochk'/>
          
        

				</div><br/>
        <button onClick={signOut}>로그아웃</button>
			</div>
	
	);
}

export default withAuthenticator(Profile);


