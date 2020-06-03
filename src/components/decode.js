import React, { useState, useMemo } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import HammingCode from './hamming-code';
import HammingTable from './hamming-table'
import { calculateM } from './../utils';

export default function FormControlLabelPlacement({code}) {
  const [mistake, setMistake] = useState('k4')
  const [mistakeIndex, setMistakeIndex] = useState(null)

  const mistakeCode = useMemo(() => {
    if (!code) return null
    return {
      ...code,
      [mistake]: code[mistake] === '0' ? '1' : '0'
    }
  }, [code, mistake])

  const table = useMemo(() => {
    const { k1, k2, k3, k4, m1, m2, m3 } = mistakeCode
    const M1 = { m: 'm1', n1: k4, n2: k3, n3: k1, mResult: m1, result: calculateM([k4,k3,k1,m1]) }
    const M2 = { m: 'm2', n1: k4, n2: k2, n3: k1, mResult: m2, result: calculateM([k4,k2,k1,m2]) }
    const M3 = { m: 'm3', n1: k3, n2: k2, n3: k1, mResult: m3, result: calculateM([k3,k2,k1,m3]) }

    const binary = `${M3.result}${M2.result}${M1.result}`
    setMistakeIndex({
      binary,
      digit: parseInt(binary, 2) 
    })

    return [M1, M2, M3]
  }, [mistakeCode])

  const handleChange = (event) => setMistake(event.target.value)

  return (
    <>
      <h2>Декодирование</h2>
      <FormControl component="fieldset">
        <FormLabel component="legend">Выберите где допустить ошибку</FormLabel>
        <RadioGroup row aria-label="position" name="position" value={mistake} onChange={handleChange}>
          <FormControlLabel
            value="m1"
            control={<Radio color="secondary" />}
            label="m1"
            labelPlacement="top"
          />
          <FormControlLabel
            value="m2"
            control={<Radio color="secondary" />}
            label="m2"
            labelPlacement="top"
          />
          <FormControlLabel
            value="k4"
            control={<Radio color="secondary" />}
            label="k4"
            labelPlacement="top"
          />
          <FormControlLabel
            value="m3"
            control={<Radio color="secondary" />}
            label="m3"
            labelPlacement="top"
          />
          <FormControlLabel
            value="k3"
            control={<Radio color="secondary" />}
            label="k3"
            labelPlacement="top"
          />
          <FormControlLabel
            value="k2"
            control={<Radio color="secondary" />}
            label="k2"
            labelPlacement="top"
          />
          <FormControlLabel
            value="k1"
            control={<Radio color="secondary" />}
            label="k1"
            labelPlacement="top"
          />
        </RadioGroup>
      </FormControl>

      <HammingCode code={mistakeCode} title="Код Хэмминга с ошибкой" mistake={mistake} />
      <HammingTable data={table} />
      {mistakeIndex && (
        <>
          <h2>{mistakeIndex.binary} = {mistakeIndex.digit}</h2>
          <h2>Ошибка в {mistakeIndex.digit} индексе</h2>
        </>
      )}
    </>
  );
}
