// import React, { useState, useEffect } from 'react'

// export default function UseEffectDemo(props) {

//     const [number, setNumber] = useState(1);

//     // hook thay thees cho lifecycle ComponentDidMount
//     useEffect(() => { // tự động kích hoạt và chạy lần đầu tiên
//         // callapi
//         // sửu dụng carousel, thư việc khác
//         console.log("componentDidMount")
//         return () => {
//             // hàm này sẽ thực thi trước khi component mất khỏi giao diện
//         }
//     }, []);  // Hàm có tham số


//     useEffect(() => {
//         // gọi sau mỗi lần render kể cả lần đầu tiên
//         console.log("thay thế 2 lifecycle componentDidMount và componentDidUpdate")
//         // hạn chế setState
//     }) // Hàm ko có tham số

//     useEffect(() => {
//         // gọi sau mỗi lần render kể cả lần đầu tiên
//         console.log("componentDidUpdate bởi 1 state nào đó ở đây là number")
//         // hạn chế setState
//     }), [number] // Hàm có tham số



//     return (
//         <div>
//             useEffect
//             <h1>{number}</h1>
//             <button className="btn btn-danger" onClick={() => {
//                 setNumber(number + 1);
//             }}>+</button>
//         </div>
//     )
// }
