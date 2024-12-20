import { useReactFlow } from '@xyflow/react'
import React from 'react';

const PAYMENT_PROVIDERS = [
    {code: "st", name: "Stripe"},
    {code: "Gp", name: "Google Pay"},
    {code:"AP", name: "Apple Pay"},
    {code:"Pp", name: "PayPal"},
    {code:"Ap", name: "Amazon Pay"},

]

const PaymentProviderSelect: React.FC = () => {
    
    const {setNodes} = useReactFlow()
    const onProviderClick = ({name, code}: {name:string, code: string}) =>{

        const location = Math.random()* 500;
    setNodes((prevNodes) => [
        ...prevNodes,
        {
            id: `${prevNodes.length + 1}`,
            data: { name, code },
            type: "paymentProvider",
            position: { x: location, y: location }
        }
    ])
    }
    return (
        <>
        <div className="flex justify-center items-center text-[20px] bg-slate-500  rounded-md border
        ">
        
    <select className='bg-white rounded-md text-[20px]' onChange={(e) => {
        const selectedProvider = PAYMENT_PROVIDERS.find(provider => provider.code === e.target.value);
        if (selectedProvider) {
            onProviderClick(selectedProvider);
        }
    }}>
        <option value="">Add Payment Provider</option>
        {PAYMENT_PROVIDERS.map(provider => (
            <option className='bg-white text-[20px]' key={provider.code} value={provider.code}>
                {provider.name}
            </option>
        ))}
    </select>
    </div>
          
        </>
      
    );
};

export default PaymentProviderSelect;