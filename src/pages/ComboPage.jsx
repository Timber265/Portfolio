import { useState } from "react";
import SetProducts from "../components/SetProducts";
export default function ComboPage() {
  let [nameProd, setNameProd] = useState('')
  nameProd = 'dataCombo'
  return (
    <SetProducts parametr={nameProd} />
  )
}