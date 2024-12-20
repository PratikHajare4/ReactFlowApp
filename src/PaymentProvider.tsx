import { Node ,Handle, NodeProps, Position, useReactFlow } from '@xyflow/react'
import React from 'react'

 
type NameNode = Node<{ name: string }, 'name'>;
type CodeNode = Node<{ code: string }, 'code'>;
 
type AppNode = NameNode & CodeNode;

const PaymentProvider : React.FC<NodeProps<AppNode >> =({data,id}) => {
const {setNodes} = useReactFlow();

  return (
    <div className=' flex w-[150px] justify-between items-center bg-white rounded-2xl p-2 border border-purple-700'>
        <div className="">{data.name}</div>
      
      
      <button
      onClick={()=> setNodes(prevNodes => prevNodes.filter(node=> node.id!==id))}
       className='p-1 outline-none active:bg-red-200 ml-2 text-red-600 bg-white'>X</button>
      <Handle type='target' position={Position.Left} />
    </div>
  )
}

export default PaymentProvider




