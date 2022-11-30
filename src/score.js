import React, { useEffect, useState } from "react";
import Title from './components/Title'
import Board from './containers/Board'
import axios from "axios";
import './App.css'


const restEndpoint = "https://30hm1g62xi.execute-api.ap-northeast-1.amazonaws.com/kintone/kintone";

function App2({ user })  {
  
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
    return (
        <div>
          
            {data.map(data => {
             
              if(data.$id.value==1){

                let board = [
                {id : 1, name : '이상욱', score : data.num1.value},
                {id : 2, name : '김요셉', score : data.num2.value},
                {id : 3, name : '신상훈', score : data.num3.value},
                {id : 4, name : '김선관', score : data.num4.value},
                {id : 5, name : '배수진', score : data.num5.value}
              ];
              board.sort(function(a, b) {
                return a.score - b.score;
              });
                return (
                  board.map((board) => {
                    return (
                      <Board key={board.id} name={board.name} score={board.score}/>
                    );
                  })

                  )
              }
                
            })}
        </div>
    );
};



  
    return (
      <div className="App2">
        
        <Title content="Scoreboard" />
        <DbList data={data}/>
        {/* {nameList} */}
        
      </div>
      
    )
  }

  export default App2