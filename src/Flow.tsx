import React, { useCallback } from "react";
import {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  NodeTypes,
  OnConnect,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { initialNodes, initialEdge } from "./Flow.constants";
import NewPaymentInit from "./NewPaymentInit";
import PaymentCountry from "./PaymentCountry";
import PaymentProvider from "./PaymentProvider";
import PaymentProviderSelect from "./PaymentProviderSelect";
import { CustomEdge } from "./CustomEdge";

// Defining new node types here
const nodeTypes  = {
  paymentInit: NewPaymentInit,
  paymentCountry: PaymentCountry,
  paymentProvider: PaymentProvider,
  paymentProviderSelect: PaymentProviderSelect
}

// definig new edge type here

// const edgeTypes = {
//   customEdge: CustomEdge
// }



function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdge);

  // code to connect edges.
  const onConnect: OnConnect = useCallback(
    (connection:  Connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `edge-${edges.length}+1`, 
        // type: 'customEdge'
      };
      // setEdges((prevEdges) => addEdge(edge, prevEdges));
      setEdges((eds) => eds.concat(edge));
    },
    [edges] 
  );

  return (
    <div className="h-[500px] w-[500px] bg-gray-700 rounded-2xl">
      <ReactFlow
        className="text-black"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        // edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
