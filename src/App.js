import React, { useState } from 'react';
import './App.css';
import { BinaryTable, HammingTable, Form, HammingCode, Decode } from './components'
import { calculateM } from './utils';

function App() {
  const [state, setState] = useState({
    table: null,
    code: null,
  })

  const handleSubmit = (data) => {
    const { k4, k3, k2, k1 } = data

    setState(prevState => {
      const m1 = { m: 'm1', n1: k4, n2: k3, n3: k1, mResult: calculateM([k4,k3,k1])  }
      const m2 = { m: 'm2', n1: k4, n2: k2, n3: k1, mResult: calculateM([k4,k2,k1])  }
      const m3 = { m: 'm3', n1: k3, n2: k2, n3: k1, mResult: calculateM([k3,k2,k1])  }

      const code = {
        m1: m1.mResult,
        m2: m2.mResult,
        k4,
        m3: m3.mResult,
        k3,
        k2,
        k1
      }

      return {
        ...prevState,
        table: [m1, m2, m3],
        code
      }
    })
  }

  return (
    <div>
      <h1 className="title">Код Хэмминга при m = 3</h1>
      <div className="row">
        <div className="column">
          <BinaryTable />
          <h3>Проверочная таблица для кода Хэмминга</h3>
          <HammingTable />
        </div>
        <div className="column">
          <Form onSubmit={handleSubmit}/>
          {state.table && (
            <>
              <h2>Кодирование</h2>
              <HammingTable data={state.table} />
            </>
          )}
          {state.code && (
            <>
              <HammingCode code={state.code} title="Код Хэмминга" />
              <Decode code={state.code} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
