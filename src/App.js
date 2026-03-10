import "./index.css";
import { useEffect, useState, useMemo } from "react";
import useWindowWidth from "./useWindowWidth";
import React from "react";
import Info from "./Info";

// 1) useMemo:
// Створіть компонент, який містить список чисел. Використовуючи хук useMemo, обчисліть суму всіх чисел у списку та відображайте її
// на сторінці. Переконайтеся, що обчислення суми відбувається тільки при зміні списку чисел.

// function App (){
//   const [list, setList] = useState([1, 2, 3, 4, 5]);

//   const sumResult = useMemo(()=>{
//     return list.reduce((sum, list)=> sum +list, 0);
//   }, [list]);

//   const handleClick=()=>{
//     setList([...list, list.length +1])
//   };

//   return(
//     <div>
// {list.map((item, index)=>(
//   <p key={index}>{item}</p>
// ))}
//     <p>Sum: {sumResult}</p>
//     <button onClick={handleClick}>Click</button>
//     </div>

//   )
// }

// ---------------------------------------------------------------------------------------

// 2) React.memo()::
// Створіть компонент, який містить список елементів. Кожен елемент має кнопку "Видалити", яка видаляє елемент зі списку. Поруч
// створіть ще один компонент, і зробіть так, щоб при видаленні елементу не було ререндеру компоненту який це не потребує.

// function App (){
//   const [items, setItems] = useState(["Apple", "Orange", "Berry"]);

//   const deleteItems = (index)=> {
//     const newList = items.filter((_, itemIndex) => itemIndex !== index);
//     setItems(newList);
//   };

//   return (
//     <div>
//       {items.map((item, index)=>(
//         <div key={index}>
//           {item}

//           <button onClick={()=>deleteItems(index)}>Delete</button>
//           </div>
//       ))}
      
//       <Info />
//     </div>
//   );
// }

// ---------------------------------------------------------------------------------------

// 3) Кастомні хуки:
// Створіть свій власний кастомний хук. Наприклад, створіть хук useWindowWidth, який буде повертати поточну ширину вікна
// браузера. Використайте хук useEffect для прослуховування події зміни розміру вікна та оновлення ширини. Використайте цей
// кастомний хук у своєму компоненті та виведіть ширину на сторінку.

// function App() {
//   const width = useWindowWidth();

//   return (
//     <div>
//       <h1>Window Width Tracker</h1>
//       <p>Current width: {width}px</p>
//     </div>
//   );
// }

export default App;
