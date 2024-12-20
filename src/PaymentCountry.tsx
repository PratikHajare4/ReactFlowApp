import { Handle } from '@xyflow/react';
import { NodeProps, Position } from '@xyflow/system';
import { Node } from '@xyflow/react';
import React from 'react';

type CurrencyNode = Node<{currency: string},'currency'>
type CountryNode = Node<{country: string}, 'country'>
type CountryCodeNode = Node<{countryCode: string},'countryCode'>

type AppNode = CurrencyNode & CountryNode & CountryCodeNode

const PaymentCountry: React.FC< NodeProps<AppNode>> =({data} ) => {
  return (
    <div className="p-2 text-white bg-gray-800 rounded border border-white">
      <div className="font-bold">{data.country}</div>
      <div className="text-sm text-gray-400">Currency: {data.currency}</div>
      <Handle type='source' position={Position.Right} />
      <Handle type='target' position={Position.Left} />
    </div>
  );
}

export default PaymentCountry;
