import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function About() {
  const getItem = async () => {
    const response = await axios.get("http://localhost:4000/items");
    console.log(response.data);
    return response.data;
  };

  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
    </div>
  );
}

export default About;

// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import axios from "axios";

// function About() {
//   const apiUrl = "http://localhost:4000";
//   const [items, setItems] = useState([]);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get(`${apiUrl}/items`);
//       setItems(response.data.items);
//       console.log(response.data.items);
//     } catch (error) {
//       console.error("에러났음", error);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <h1>About Page</h1>
//       <ul>
//         {items &&
//           items.map((item) => (
//             <li key={item.id}>
//               ID: {item.id}, Name: {item.name}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default About;
