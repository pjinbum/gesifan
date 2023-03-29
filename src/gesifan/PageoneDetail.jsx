// import React from 'react'
// import { useState , useEffect } from 'react'

// const PageoneDetail = () => {
//     const [gesipanpan, setProductList]  = useState([]);


//     const gesipan = async () => {

//         const [gesipanpan, setProductList]  = useState([]);
//         const [inputName, setInputName] = useState("");
//         const [inputContext, setInputContext] = useState("");
//         const [inputDay, setInputDay] = useState("");

    
//         let url = "  http://localhost:1111/id"
//         // url fetch 해줘라
//         let response = await fetch(url);
//         // response에서 json을 뽑아와라
//         let data = await response.json();
//         console.log(data)
    
//         // State 변경 함수에 date값 할당
//         setProductList(data)
//       }
    
//       useEffect(() => {
//         gesipan()
//       }, []);

      
//       const addGesipan = async (event) => {
//         event.preventDefault();
      
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ name: inputName, context: inputContext, day: inputDay })
//         };
      
//         const response = await fetch('http://localhost:1111/id', requestOptions);
//         const data = await response.json();
      
//         setProductList(data);
//         setInputName("");
//         setInputContext("");
//         setInputDay("");
//       }

//   return (
//     <div>
//         {
             
//              gesipanpan.map((menu, i) => {
//                   return (
//                     <div key={i}>
//                         <div style={{display : 'flex' ,width : '500px' , backgroundColor : 'gray'  } }>
//                             <div>
//                             <h1 className='context' style={{width : '300px' , textAlign : 'center'}}>{menu.context}</h1>
//                             </div>
//                             <div>
//                             <h1 className='name' style={{width : '100px'}}>{menu.name}</h1>
//                             </div>
//                             <div>
//                             <h1 className='day' style={{width : '100px'}}>{menu.day}</h1>
//                             </div>
//                         </div>
                        
                        
                        
                        

                        
//                     </div>
//                   )
                 
//                 })
        
//         }
//         <form action="">
//             <tr>
//                 <td>
//                    내용
//                 </td>
//                 <td>
//                    이름
//                 </td>
//                 <td>
//                    날짜
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                 <input style={{width : '300px'}} type="text" />
//                 </td>
//                 <td>
//                 <input style={{width : '100px'}} type="text" />
//                 </td>
//                 <td>
//                 <input style={{width : '100px'}} type="text" />
//                 </td>
//             </tr>

          
          
          
//             <button type="submit" onClick={addGesipan}><h2>등록 하기</h2></button>
//         </form>
        
     
//     </div>
//   )
// }

// export default PageoneDetail
// -------------------------------------------------------------
// import React, { useState, useEffect } from 'react';

// const PageoneDetail = () => {
//   const [gesipanpan, setGesipanpan] = useState([]);

//   const fetchGesipanpan = async () => {
//     const response = await fetch('http://localhost:1111/id');
//     const data = await response.json();
//     setGesipanpan(data);
//   };

//   useEffect(() => {
//     fetchGesipanpan();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const newGesipan = {
//       context: event.target.context.value,
//       name: event.target.name.value,
//       day: event.target.day.value,
//     };

//     const response = await fetch('http://localhost:1111/id', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newGesipan),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setGesipanpan([...gesipanpan, data]);
//       event.target.reset();
//     } else {
//       console.error('Error adding new gesipan');
//     }
//   };

//   return (
//     <div>
//       {gesipanpan.map((gesipan, index) => (
//         <div key={index}>
//           <div style={{ display: 'flex', width: '500px', backgroundColor: 'gray' }}>
//             <div>
//               <h1 style={{ width: '300px', textAlign: 'center' }}>{gesipan.context}</h1>
//             </div>
//             <div>
//               <h1 style={{ width: '100px' }}>{gesipan.name}</h1>
//             </div>
//             <div>
//               <h1 style={{ width: '100px' }}>{gesipan.day}</h1>
//             </div>
//           </div>
//         </div>
//       ))}
//       <form onSubmit={handleSubmit}>
//         <table>
//           <tr>
//             <td>내용</td>
//             <td>이름</td>
//             <td>날짜</td>
//           </tr>
//           <tr>
//             <td>
//               <input style={{ width: '300px' }} type="text" name="context" />
//             </td>
//             <td>
//               <input style={{ width: '100px' }} type="text" name="name" />
//             </td>
//             <td>
//               <input style={{ width: '100px' }} type="text" name="day" />
//             </td>
//           </tr>
//         </table>
//         <button type="submit">
//           <h2>등록 하기</h2>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PageoneDetail;
// -------------------------------------------------------------------------
// import React from 'react'
// import { useState, useEffect } from 'react'

// const PageoneDetail = () => {
//   const [gesipanpan, setProductList] = useState([]);

//   const gesipan = async () => {
//     let url = "http://localhost:1111/id";
//     let response = await fetch(url);
//     let data = await response.json();
//     setProductList(data);
//   };

//   useEffect(() => {
//     gesipan();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 각 입력란에서 입력된 값을 가져옴
//     const name = e.target.elements.name.value;
//     const context = e.target.elements.context.value;
//     const day = e.target.elements.day.value;

//     // 기존 json 데이터를 배열 형태로 저장
//     const oldData = gesipanpan.id;

//     // 새로운 데이터를 객체 형태로 생성하고, 이를 배열에 추가
//     const newData = { name, context, day };
//     const newDataArray = [...oldData, newData];

//     // 새로운 배열을 json 형태로 변환하여 저장
//     const newJsonData = JSON.stringify({ id: newDataArray });

//     await fetch('http://localhost:1111/id', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: newJsonData,
//     });

//     // 추가된 데이터를

// 위 코드에서 버튼을 눌렀을 때, 입력된 name, context, day 값을 json 파일의 "id" 배열에 추가하도록 구현하려면 다음과 같이 할 수 있습니다.

// useState를 이용해 name, context, day 값을 상태값으로 관리합니다.

// form 요소 안의 input 태그에 name, context, day 값을 입력할 수 있도록 합니다.

// button 태그에 onClick 이벤트 핸들러를 등록합니다. 이때, 이벤트 핸들러 함수에서는 상태값에 저장된 name, context, day 값을 가져와서 json 파일의 "id" 배열에 새로운 객체로 추가하고, 이를 state 변경 함수(setProductList)를 이용해 gesipanpan 상태값에 업데이트합니다.

// 이후에는 gesipanpan 배열을 map 함수를 이용하여 화면에

//         // 각 입력란에서 입력된 값을 가져옴
    // const name = e.target.elements.name.value;
    // const context = e.target.elements.context.value;
    // const day = e.target.elements.day.value;


    // console.log(name)
    // // 기존 json 데이터를 배열 형태로 저장
    // const oldData = gesipanpan.id;

    // // 새로운 데이터를 객체 형태로 생성하고, 이를 배열에 추가
    // const newData = { name, context, day };
    // const newDataArray = [...oldData, newData];

    // // 새로운 배열을 json 형태로 변환하여 저장
    // const newJsonData = JSON.stringify({ id: newDataArray });
    //     // 모든 데이터를 가진 주소를 부른다.
    //버튼을 눌렀을 때 입력된 name, context, day 값을 "id" 배열에 추가하기 위해서는 다음과 같이 구현할 수 있습니다.

// form 태그 안에 있는 input 요소들에 각각 state를 할당해줍니다.

// 버튼을 눌렀을 때, state에 저장된 값을 가져와서 "id" 배열에 추가합니다.

// "id" 배열을 다시 fetch 해와서 화면에 보여줍니다.

// 아래는 수정된 코드입니다.

// jsx
// Copy code
// import React, { useState, useEffect } from 'react';

// const PageoneDetail = () => {
//   const [gesipanpan, setProductList] = useState([]);
//   const [context, setContext] = useState('');
//   const [name, setName] = useState('');
//   const [day, setDay] = useState('');

//   const gesipan = async () => {
//     let url = 'http://localhost:1111/id';
//     let response = await fetch(url);
//     let data = await response.json();
//     setProductList(data);
//   };

//   useEffect(() => {
//     gesipan();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newItem = { context, name, day };
//     let url = 'http://localhost:1111/id';
//     await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newItem),
//     });
//     setContext('');
//     setName('');
//     setDay('');
//     gesipan();
//   };

//   return (
//     <div>
//       {gesipanpan.map((menu, i) => {
//         return (
//           <div key={i}>
//             <div
//               style={{
//                 display: 'flex',
//                 width: '500px',
//                 backgroundColor: 'gray',
//               }}
//             >
//               <div>
//                 <h1
//                   className="context"
//                   style={{ width: '300px', textAlign: 'center' }}
//                 >
//                   {menu.context}
//                 </h1>
//               </div>
//               <div>
//                 <h1

// 해당 코드에서 입력된 name, context, day 값을 가져오는 부분이 구현되어 있지 않기 때문에, 먼저 입력된 값을 가져오는 함수를 작성해야 합니다. 이를 위해 useState를 이용해 각각의 값을 저장할 상태 변수를 생성하겠습니다.

// scss
// Copy code
// const [inputName, setInputName] = useState("");
// const [inputContext, setInputContext] = useState("");
// const [inputDay, setInputDay] = useState("");
// 이제 등록 버튼이 클릭될 때 실행될 함수를 작성하겠습니다. 이 함수는 fetch를 이용해 서버에 POST 요청을 보내서 입력된 값을 서버에 전달해야 합니다. 이때, 서버에서는 전달된 값들을 이용해 새로운 객체를 만들어 "id" 배열에 추가하면 됩니다.

// javascript
// Copy code
// const addGesipan = async () => {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: inputName, context: inputContext, day: inputDay })
//   };
//   const response = await fetch('http://localhost:1111/id', requestOptions);
//   const data = await response.json();
//   console.log(data);
//   // State 변경 함수에 새로운 값을 추가
//   setProductList([...gesipanpan, { name: inputName, context: inputContext, day: inputDay }]);
//   // 입력된 값 초기화
//   setInputName("");
//   setInputContext("");
//   setInputDay("");
// };
// 위 코드에서 requestOptions 객체는 POST 요청을 보낼 때 전달할 데이터를 정의합니다. fetch 함수를 이용해 서버에 요청을 보내고, 응답 데이터를 가져옵니다. 그리고 setProductList 함수를 이용해 새로운 값(입력된 값)을 배열에 추가하고, 입력된 값들을 초기화합니다.

// 마지막으로, 등록 버튼을 클릭할 때 위에서 작성한 addGesipan 함수를 실행하도록 onClick 이벤트를 추가해줍니다.

// php
// Copy code
// <button type="submit" onClick={addGesipan}><h2>등록 하기</h2></button>
// 따라서 전체 코드는 아래와 같습니다.

// javascript
// Copy code
// import React from 'react'
// import { useState , useEffect } from 'react'

// const PageoneDetail = () => {
//   const [gesipanpan, setProductList]  = useState([]);
//   const [inputName, setInputName] = useState("");
//   const [inputContext, setInputContext] = useState("");
//   const [inputDay, setInputDay] = useState("");

//   const gesipan = async () => {
//     let url = "http://localhost:1111/id"
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
//     setProductList(data);
//   };

//   useEffect(() => {
//     gesipan();
//   }, []);

//   const addGesipan = async () => {
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name: inputName, context: inputContext, day: inputDay })
//     };
//     const response = await fetch(


import React from 'react'
import { useState, useEffect } from 'react';

const PageoneDetail = () => {
  const [gesipanpan, setGesipanpan] = useState([]);
  
  const [inputName, setInputName] = useState("");
  const [inputContext, setInputContext] = useState("");
  const [inputDay, setInputDay] = useState("");

  const fetchGesipan = async () => {
    let url = "http://localhost:1111/id";
    let response = await fetch(url);
    let data = await response.json();
    setGesipanpan(data);
  };

  useEffect(() => {
    fetchGesipan();
  }, []);

  const addGesipan = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: inputName, context: inputContext, day: inputDay })
    };

    const response = await fetch('http://localhost:1111/id', requestOptions);
    const data = await response.json();

    setGesipanpan(data);
    setInputName("");
    setInputContext("");
    setInputDay("");
  };

  return (
        <div>
            {
                 
                 gesipanpan.map((menu, i) => {
                      return (
                        <div key={i}>
                            <div style={{display : 'flex' ,width : '500px' , backgroundColor : 'gray'  } }>
                                <div>
                                <h1 className='context' style={{width : '300px' , textAlign : 'center'}}>{menu.context}</h1>
                                </div>
                                <div>
                                <h1 className='name' style={{width : '100px'}}>{menu.name}</h1>
                                </div>
                                <div>
                                <h1 className='day' style={{width : '100px'}}>{menu.day}</h1>
                                </div>
                            </div>
                            
                            
                            
                            
    
                            
                        </div>
                      )
                     
                    })
            
            }
            <form action="">
                <tr>
                    <td>
                       내용
                    </td>
                    <td>
                       이름
                    </td>
                    <td>
                       날짜
                    </td>
                </tr>
                <tr>
                    <td>
                    <input style={{width : '300px'}} type="text" />
                    </td>
                    <td>
                    <input style={{width : '100px'}} type="text" />
                    </td>
                    <td>
                    <input style={{width : '100px'}} type="text" />
                    </td>
                </tr>
    
              
              
              
                <button type="submit" onClick={addGesipan}><h2>등록 하기</h2></button>
            </form>
            
         
        </div>
      )
    }
    
    export default PageoneDetail