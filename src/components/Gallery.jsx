import { MyContexto } from "../contex/MyContext";
import { useContext } from "react";


const Gallery = () => {
  const { contexto, setContexto } = useContext(MyContexto);

  return <div className="gallery grid-columns-5 p-3">
  
  </div>;
};
export default Gallery;
