import React, { useState, useEffect } from 'react';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useLocation } from 'react-router-dom';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
const restEndpoint = "https://30hm1g62xi.execute-api.ap-northeast-1.amazonaws.com/kintone/kintone";
const endpoint2 = "https://9dxbyj8je0.execute-api.ap-northeast-1.amazonaws.com/slacktone2/kintone";

function getTitle(){
  const response = fetch(restEndpoint);
  return response.then(res => res.json());
}
  
function Profile({ signOut, user }) {
  const [btdis, enableButton] = useState("");

  const [inputs, setInputs] = useState({
    num1:'',
    num2:'',
    num3:'',
    num4:'',
    num5:'',
    email: user.attributes.email,
    title: '  ',
    detail: '  '

    
  });

  const { email, title, detail,num1,num2,num3,num4, num5 } = inputs; // 비구조화 할당을 통해 값 추출

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
      if(text[i].email.value=email){
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
  


	return (
		
		
			<div className="mini_gnb_content"> 
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
              (당첨 번호는 사장님께서 발표..)
            </p>
				<div className="mini_gnb_btn_wrap">
        <input type="number" name="num1" min="1" max="20" onChange={onChange} value={num1} />
        <input type="number" name="num2" min="1" max="20" onChange={onChange} value={num2} />
        <input type="number" name="num3" min="1" max="20" onChange={onChange} value={num3} />
        <input type="number" name="num4" min="1" max="20" onChange={onChange} value={num4} />
        <input type="number" name="num5" min="1" max="20" onChange={onChange} value={num5} />
   
        <button onClick={onKintone} disabled={!btdis}>전송</button>
					

				</div>
        <button onClick={signOut}>로그아웃</button>
			</div>
	
	);
}

export default withAuthenticator(Profile);


