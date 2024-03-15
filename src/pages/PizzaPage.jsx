import { useState } from "react";
import SetProducts from "../components/SetProducts";
export default function PizzaPage() {
  let [nameProd, setNameProd] = useState('')
  nameProd = 'dataPizza'
  return (
    <SetProducts parametr={nameProd}/>
  )
}