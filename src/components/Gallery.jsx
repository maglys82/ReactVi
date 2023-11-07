import { MyContexto } from "../contex/MyContext";
import { useContext } from "react";



const Gallery = () => {
  const { contexto } = useContext(MyContexto);

  return (<div className="gallery grid-columns-5 p-3">{
  contexto.photos.map( (photo)=><img src={photo.src.small} alt="" />)}</div>)
};
export default Gallery;
