import './App.css';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const [repuestos, setRepuestos] = useState([]);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handlePushRepuesto = () => {
    const obj = {
      opcion1: input1,
      opcion2: input2,
    }
    setRepuestos([...repuestos, obj]);
    setInput1("");
    setInput2("");
  }

  return (
    <div style={{paddingLeft: '20px'}}>
      <h1>Repuestos</h1>
      <div>
        <label for="principal">Input Principal: </label>
        <input name="principal" />
      </div>
      <button onClick={()=>setOpen(true)}>Click Me</button>
      <br/><br/>
      {
        open && 
        <section>
          <div>
            <label for="opcion1">Opcion 1: </label>
            <input name="opcion1" value={input1} onChange={(e)=>setInput1(e.target.value)}/>
          </div>
          <div>
            <label for="opcion2">Opcion 2: </label>
            <input name="opcion2" value={input2} onChange={(e)=>setInput2(e.target.value)}/>
          </div>
          <button onClick={()=>handlePushRepuesto()}>Click Me</button>
          <br/><br/>
          <table>
            <tr>
              <th>Opción 1</th>
              <th>Opción 2</th>
            </tr>
            {repuestos?.map((repuesto, index)=>
              <tr key={index}>
                <td>{repuesto.opcion1}</td>
                <td>{repuesto.opcion2}</td>
              </tr>
            )}
          </table>
        </section>
      }
    </div>
  );
}

export default App;
