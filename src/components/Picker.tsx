// import { HexColorPicker } from "react-colorful";
// import { useSnapshot } from "valtio";
// import { state } from "./State";

// export function Picker(): JSX.Element {
//     const snap = useSnapshot(state);
//     const current: string[] | null = snap.current;

//     // Check if current is not null before using it as an index
//     return (
//         <div style={{ display: current ? "block" : "none" }}>
//             {current && (
//                 <>
//                     <HexColorPicker
//                         className="picker"
//                         color={snap.items[current]}
//                         onChange={(color: string) => (state.items[current] = color)}
//                     />
//                     <h1>{current}</h1>
//                 </>
//             )}
//         </div>
//     );
// }