import { Node } from "@xyflow/react";

 export const initialEdge = [
     {id: '1-2', source: '1', target: '2', animated: true },
]; 

export const initialNodes: Node[] = [{
    id: '1',
    data: { amount: 10 },
    position: {x:100, y:100},
    type: "paymentInit",
},
{
    id: '2',
    data: { currency: "$", country: "United Stated", countryCode: "US" },
    position: {x:300, y:20},
    type: "paymentCountry",
},
{
    id: '3',
    data: { currency: "£", country: "England", countryCode: "GB" },
    position: {x:300, y:200},
    type: "paymentCountry",
},
{
    id: '4',
    data: { name:"Google Pay", code:"Gp" },
    position: {x:550, y:-50},
    type: "paymentProvider",
},
{
    id: '5',
    data: { name:"Stripe", code:"St" },
    position: {x:550, y:125},
    type: "paymentProvider",
},
{
    id: '6',
    data: { name:"Apple Pay", code:"Ap" },
    position: {x:550, y:325},
    type: "paymentProvider",
},
{
    id: '7',
    data: {},
    position: {x:300, y:-100},
    type: "paymentProviderSelect",
}
];