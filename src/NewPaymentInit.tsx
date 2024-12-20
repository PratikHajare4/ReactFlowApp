import { Handle, Node, NodeProps, Position } from '@xyflow/react'

type AmountNode = Node<{amount: number}, 'amount'>


const NewPaymentInit: React.FC<NodeProps<AmountNode>> =({ data }) => {
    return (
      <div className='bg-white border border-1 rounded-lg border-black  '>
        <div className="p-1 bg-purple-400 rounded-lg">
          <p>Payment Initialized</p>
        </div>
        <div className="p-2">
          <p className='text-2xl'>${data.amount}</p>
        </div>
        <Handle type='source' position={Position.Right} />
      </div>
    );
  }

export default NewPaymentInit
