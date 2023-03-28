import React from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { useReducer } from 'react';
import { initialState } from './reducers';
import reducer from './reducers';
import { ADD_ONE, applyNumber, APPLY_NUMBER, changeOper, CLEAR_DISPLAY, MEMORY_RESET, MEMORY_TOTAL, STORE_MEMORY } from './actions';
function App() {
  const [state , dispatch] = useReducer(reducer , initialState)
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick = {()=>dispatch({type : STORE_MEMORY})}  />
              <CalcButton value={"MR"} onClick = {()=>dispatch({type : MEMORY_TOTAL})} />
              <CalcButton value={"MC"} onClick = {()=>dispatch({type : MEMORY_RESET})}  />
            </div>

            <div className="row">
              <CalcButton 
              onClick = {()=>dispatch({type : ADD_ONE})} 
              value={1} 
              />
              <CalcButton 
              onClick ={()=>dispatch(applyNumber(2))}
              value={2}
              />
              <CalcButton
              onClick ={()=>dispatch(applyNumber(3))}
               value={3} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick ={()=>dispatch(applyNumber(4))} />
              <CalcButton value={5} onClick ={()=>dispatch(applyNumber(5))}/>
              <CalcButton value={6} onClick ={()=>dispatch(applyNumber(6))}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick ={()=>dispatch(applyNumber(7))}/>
              <CalcButton value={8} onClick ={()=>dispatch(applyNumber(8))}/>
              <CalcButton value={9} onClick ={()=>dispatch(applyNumber(9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick ={(e)=>dispatch(changeOper(e.target.value))} />
              <CalcButton value={"*"} onClick ={(e)=>dispatch(changeOper(e.target.value))}/>
              <CalcButton value={"-"} onClick ={(e)=>dispatch(changeOper(e.target.value))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = {()=>dispatch({type : CLEAR_DISPLAY})} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
