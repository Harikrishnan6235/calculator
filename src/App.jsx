import React, { useState } from 'react'
import "./App.css"
import Button from './components/buttons/Button'


function App() {
  const [clickedvalue, setClickedvalue] = useState("")
  const [temp, setTemp] = useState("")
  const [method, setMethod] = useState("")
  const [fncn, setFncn] = useState("")
  const [result, setResult] = useState()

  function HandleClick(digit){
    if (method===""){
      setClickedvalue(clickedvalue+digit)
    }
    else {setTemp(temp+digit)}
  }

  function HandleResult(){
    if(method==="+"){
      setResult(parseFloat(clickedvalue)+parseFloat(temp))
    }
    else if(method==="-"){
      setResult(parseFloat(clickedvalue)-parseFloat(temp))
    }
    else if(method==="x"){
      setResult(parseFloat(clickedvalue)*parseFloat(temp))
    }
    else{setResult(parseFloat(clickedvalue)/ parseFloat(temp))}
  }

  return (
    <div className='main'>
      <div className="calc">
        <div className="display">
          {clickedvalue}{method}{temp}{fncn}{result}
        </div>
        <div className="functions">
          <div className="division">
            <div onClick={()=>setMethod("/")} className="dividebox">
              <h1 className="divide">/</h1>
            </div>
          </div>
          <div className="addsub">
            <div onClick={()=>setMethod("+")} className="addbox">
              <h1 className="add">+</h1>
            </div>
            <div onClick={()=>setMethod("-")} className="subbox">
              <h1 className="substract">-</h1>
            </div>
          </div>
          <div className="multiply">
            <div onClick={()=>setMethod("x")} className="multiplybox">
              <h1 className="x">x</h1>
            </div>
          </div>
        </div>
        <div className="equaldiv">
          <div onClick={()=>{setFncn("=");HandleResult()}} className="equalbox">
            <h1 className="equals">=</h1>
          </div>
        </div>
        <div className="comp">
          
          <Button onClick={()=> HandleClick("1")} num={"1"}/>
          <Button onClick={()=> HandleClick("2")} num={"2"}/>
          <Button onClick={()=> HandleClick("3")} num={"3"}/>
          <Button onClick={()=> HandleClick("4")} num={"4"}/>
          <Button onClick={()=> HandleClick("5")} num={"5"}/>
          <Button onClick={()=> HandleClick("6")} num={"6"}/>
          <Button onClick={()=> HandleClick("7")} num={"7"}/>
          <Button onClick={()=> HandleClick("8")} num={"8"}/>
          <Button onClick={()=> HandleClick("9")} num={"9"}/>
          <Button onClick={()=> {setClickedvalue("");setMethod("");setFncn("");setTemp("");setResult(null)}} num={"C"}/>
          <Button onClick={()=> HandleClick("0")} num={"0"}/>
          <Button onClick={()=> HandleClick(".")} num={"."}/>
        </div>

      </div>
    </div>
  )
}

export default App