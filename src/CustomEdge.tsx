import { BezierEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from "@xyflow/react";


export const CustomEdge: React.FC<EdgeProps> = (props) => {
    const {sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;

    const [edgePath, labelX, labelY, ] = getBezierPath({sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition })
    return (
       
        <>
        <BezierEdge{...props} />
        <EdgeLabelRenderer>
            <button className="text-red-700 bg-none " style={{ transform: `translate(${labelX}px, ${labelY}px), translate(-50%, -50%)` }}>x</button>
        </EdgeLabelRenderer>
        </>
    );
}
