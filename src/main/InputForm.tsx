import React, { useState } from 'react';


function InputForm() {
  const [inputs, setInputs] = useState({
    title: '',
    detail: ''
  });

  const { title, detail } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onKintone = () => {
    let endpoint = 'https://9dxbyj8je0.execute-api.ap-northeast-1.amazonaws.com/slacktone2/kintone';
    let goKin = '?title='+title+'&detail='+detail;
    
    
    const url = endpoint+goKin;
    fetch(url);
    alert("킨톤 등록 완료")
    setInputs({
      title: '',
      detail: '',
    })
  };
  
  
  function randomNum(){
    var Arrays = [];

    for(var i = 0; i < 5; i++) {
      Arrays.push(parseInt(Math.random()*20)+1);
      for(var j = 0; j < i; j++ ){
        if(Arrays[i] == Arrays[j]){
            i = i - 1;
            break;
        }
      }
    }
    
     console.log("[" + Arrays.toString() + "]");
  }

  return (
    <div>
            <p className="md-5">
              킨톤으로 데이터 넣기
              <br />
              <br />
              리엑트에서 람다호출 그리고 킨톤으로 전송하기
            </p>
      <input name="title" placeholder="타이틀" onChange={onChange} value={title} />
      <input name="detail" placeholder="내용" onChange={onChange} value={detail}/>
      <button onClick={onKintone}>전송</button>
      {/* <button onClick={randomNum}>생성</button> */}
    </div>
  );
}
export default InputForm;