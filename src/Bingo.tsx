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
  const [btdis, enableButton] = useState("");

  const [inputs, setInputs] = useState({
    email: user.attributes.email+'bingo',
    bing0:'',bing1:'',bing2:'',bing3:'',bing4:'',bing5:'',bing6:'',bing7:'',bing8:'',bing9:'',bing10:'',
    bing11:'',bing12:'',bing13:'',bing14:'',bing15:'',bing16:'',bing17:'',bing18:'',bing19:'',bing20:'',bing21:'',bing22:'',bing23:'',bing24:''
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

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get(restEndpoint)
//         .then(response => {
//           setData(response.data);
//         });
// }, []);
//   const DbList = ({ data }) => {

//     // function sortedPlayers() {
//     //   return players
//     //     .sort((p1, p2) => (p2.score - p1.score))
//     // }
//     return (
//         <div>
          
 
//         </div>
//     );
// };

	return (
		
		
			<div className="mini_gnb_content"> 
       
				<div className="mini_gnb_btn_wrap">
        <input type="number" name="bing0" min="1" max="25" size={0} onChange={onChange} value={bing0} />
        <input type="number" name="bing1" min="1" max="25" size={1} onChange={onChange} value={bing1} />
        <input type="number" name="bing2" min="1" max="25" size={3} onChange={onChange} value={bing2} />
        <input type="number" name="bing3" min="1" max="25" size={2} onChange={onChange} value={bing3} />
        <input type="number" name="bing4" min="1" max="25" size={2} onChange={onChange} value={bing4} />
        <br/>
        <input type="number" name="bing5" min="1" max="25" size={2} onChange={onChange} value={bing5} />
        <input type="number" name="bing6" min="1" max="25" size={2} onChange={onChange} value={bing6} />
        <input type="number" name="bing7" min="1" max="25" size={2} onChange={onChange} value={bing7} />
        <input type="number" name="bing8" min="1" max="25" size={2} onChange={onChange} value={bing8} />
        <input type="number" name="bing9" min="1" max="25" size={2} onChange={onChange} value={bing9} />
        <br/>
        <input type="number" name="bing10" min="1" max="25" size={2} onChange={onChange} value={bing10} />
        <input type="number" name="bing11" min="1" max="25" size={2} onChange={onChange} value={bing11} />
        <input type="number" name="bing12" min="1" max="25" size={2} onChange={onChange} value={bing12} />
        <input type="number" name="bing13" min="1" max="25" size={2} onChange={onChange} value={bing13} />
        <input type="number" name="bing14" min="1" max="25" size={2} onChange={onChange} value={bing14} />
        <br/>
        <input type="number" name="bing15" min="1" max="25" size={2} onChange={onChange} value={bing15} />
        <input type="number" name="bing16" min="1" max="25" size={2} onChange={onChange} value={bing16} />
        <input type="number" name="bing17" min="1" max="25" size={2} onChange={onChange} value={bing17} />
        <input type="number" name="bing18" min="1" max="25" size={2} onChange={onChange} value={bing18} />
        <input type="number" name="bing19" min="1" max="25" size={2} onChange={onChange} value={bing19} />
        <br/>
        <input type="number" name="bing20" min="1" max="25" size={2} onChange={onChange} value={bing20} />
        <input type="number" name="bing21" min="1" max="25" size={2} onChange={onChange} value={bing21} />
        <input type="number" name="bing22" min="1" max="25" size={2} onChange={onChange} value={bing22} />
        <input type="number" name="bing23" min="1" max="25" size={2} onChange={onChange} value={bing23} />
        <input type="number" name="bing24" min="1" max="25" size={4} onChange={onChange} value={bing24} />
        <br/><br/>
        <button onClick={onKintone}>빙고 등록</button><br/><br/>
                

				</div>
        
			</div>
	
	);
}

export default withAuthenticator(Profile);
