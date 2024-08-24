import { useState, useEffect } from "react";
import data from "../data";
import image from '../assets/images/eco-friendly-water-bottle.jpg'
export default function ListItem() {
  const [ldata, setLdata] = useState([]);

  useEffect(() => {
    setLdata(data);
  }, []);

  // If ldata is empty, return null or a placeholder
  if (ldata.length === 0) {
    return <p className="font-serif">Loading...</p>; // Or return null;
  }

  return (
    <>
      {ldata.map((item) => (
        <li id={`items-${item.id}`} key={item.id} className="w-250 h-250 bg-gray-500 rounded-md list-none">
          <img  src={image} className="w-48 h-36 mx-auto my-2 rounded-md"   />
          <h3 className="font-bold ml-2">{item.name}</h3>
          <h3 className="text-sm ml-2">{item.category}</h3>
          <h2 className="text-yellow-300 ml-2">${item.price}</h2>
          <button className="bg-yellow-100 text-bold mx-auto">Contact</button>
        </li> 

      ))}
    </>
  );
}
