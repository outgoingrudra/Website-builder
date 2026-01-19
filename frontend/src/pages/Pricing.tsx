import React from 'react'

interface Plan{
  id : string;
  name : string;
  price: string;
  credits : number;
  description : string;
  features: string[];
}

export default function Pricing() {
  return (
    <div>Pricing</div>
  )
}
