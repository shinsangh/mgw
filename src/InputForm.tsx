import React, { useState, useEffect } from 'react';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useLocation } from 'react-router-dom';
import Bingo from "./Bingo.tsx";
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
  const [msjbtdis, enablechkButton] = useState("");
 
   
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
    if(user.attributes.email=='js.noh@mountain-info.co.jp'){
      enablechkButton(e.target.value);
    }
    
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

    if(email=='js.noh@mountain-info.co.jp'){
      alert("당첨번호 입력 완료")
    }else{
      alert("이벤트 참여 완료")
    }
    


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

  check();
 
  
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

    function isApple(v)  {
      if(v.email.value === 'js.noh@mountain-info.co.jp')  {
        return true;
      }
    }
    const noh = check.find(isApple);

    let members = ['js.noh@mountain-info.co.jp','sj.bae@mountain-info.co.jp','ys.kim@mountain-info.co.jp','sh.shin@mountain-info.co.jp','sk.kim@mountain-info.co.jp','sw.lee@mountain-info.co.jp'];
   

      let chk = [noh.num1.value,noh.num2.value,noh.num3.value,noh.num4.value,noh.num5.value];

    for(var i=0; i<check.length; i++){ 
  
      for(var m=0; m <5; m++){
      if(check[i].email.value===members[m]){
        let number = [check[i].num1.value,check[i].num2.value,check[i].num3.value,check[i].num4.value,check[i].num5.value];
        
        
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
     <button onClick={signOut} style={{
              float: "right"
            }}>로그아웃</button>
        <div id='my_div'>
                  
          <span style={{
              color: "yellow", 
              backgroundColor: "black"
            }}>내 선택번호: 아직 없습니다.
          </span>
          
        </div>
        
        <Bingo/>

        <p className="md-4" style={{
              color: "yellow", 
              backgroundColor: "black"
            }}><button onClick={randomNum}>번호생성(sample)</button></p>

<div className="mini_gnb_btn_wrap">
        <input type="number" name="num1" min="1" max="20" onChange={onChange} value={num1} />
        <input type="number" name="num2" min="1" max="20" onChange={onChange} value={num2} />
        <input type="number" name="num3" min="1" max="20" onChange={onChange} value={num3} />
        <input type="number" name="num4" min="1" max="20" onChange={onChange} value={num4} />
        <input type="number" name="num5" min="1" max="20" onChange={onChange} value={num5} />
   
        <button onClick={onKintone} disabled={!btdis}>로또번호 전송</button><span style={{
              color: "yellow", 
              backgroundColor: "black"
            }}>←입력칸</span><br/><br/>

        <div id='lotochk'/>
          
        </div>

        <p className="md-5" style={{
              color: "yellow", 
              backgroundColor: "black"
            }}>
              송년회 이벤트<br />
              <br />
              마운틴 로또룰<br />
              1~20까지 5개 선택 후 전송하시고 상단에 내 선택번호를 확인 하세요<br />
              (당첨 번호는 사장님께서 현장에서 당일 발표..) <br />
              당첨번호 5개 + 보너스 번호 2개 우선순위는 당첨번호 순서이며<br />
              동률의 순위가 나오는 경우는 보너스 번호가 많이 맞은 순서로 순위를 결정합니다.<br /><br />

              <br />
              마운틴 빙고<br />
              1~25까지 원하는 위치에 중복되지 않도록 배치합니다.(개인별 설정)<br />
              로또게임에서 나온 7자리 숫자(당첨번호 5개 + 보너스 번호 2개)는 디폴트 값으로 빙고값에 입력합니다.<br/>
              이후 플레이어끼리 번호를 하나씩 불러가며 빙고를 3줄 먼저 맞춘사람 순서로 순위를 결정 <br />
              번호를 부르는 순서는 로또게임 결과의 역순으로 진행한다.(꼴지부터 시작)<br /><br />


              스코어 룰 설명<br />
              게임 순위에 따라 포인트가 주어집니다.<br />
              예를 들면 로또 게임에서 1등을 한 경우 1점 획득 2등은 2점..<br />
              통합 합산하여 포인트를 가장 적게 획득한 사람이 1등이 됩니다.<br />
              순위가 동률인 경우(공동 1등, 공동 2등이 발생하는 경우) 해당 인원들은 동일한 포인트를 받게 됩니다.
            </p>
				
			</div>
	
	);
}

export default withAuthenticator(Profile);


