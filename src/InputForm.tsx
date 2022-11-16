import React, { useState } from 'react';


function InputForm() {
  const [inputs, setInputs] = useState({
    num1:'',
    num2:'',
    num3:'',
    num4:'',
    num5:'',
    
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
      num1:'',
      num2:'',
      num3:'',
      num4:'',
      num5:'',
      title: '',
      detail: '',
    })
  };
  
  
  function randomNum(){
    var Arrays = [] as  any;
    
    for(var i = 0; i < 5; i++) {
      let random = Math.floor(Math.random() * 20+1)
      if (Arrays.indexOf(random) === -1) {
        Arrays.push(random)
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
    <div>
      <p className="md-4" style={{
              color: "yellow", 
              backgroundColor: "black"
            }}><button onClick={randomNum}>번호생성</button></p>
      
            <p className="md-5" style={{
              color: "yellow", 
              backgroundColor: "black"
            }}>
              킨톤으로 데이터 넣기
              <br />
              리엑트에서 람다호출 그리고 킨톤으로 전송하기
            </p>
      <input type="number" name="num1" min="1" max="20" />
      <input type="number" name="num2" min="1" max="20" />
      <input type="number" name="num3" min="1" max="20" />
      <input type="number" name="num4" min="1" max="20" />
      <input type="number" name="num5" min="1" max="20" />
      <input name="title" placeholder="타이틀" onChange={onChange} value={title} />
      <input name="detail" placeholder="내용" onChange={onChange} value={detail}/>
      <button onClick={onKintone}>전송</button>
    </div>
  );
}
export default InputForm;