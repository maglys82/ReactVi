import { MyContexto } from "../contex/MyContext";
import { useContext } from "react";
import Photo from "../Photo";


const Gallery = () => {
  const { contexto } = useContext(MyContexto);

  return (<div className="gallery grid-columns-5 p-3">{
  contexto.photos.map( (photo)=><Photo photo={photo} key={photo.id}/>)}</div>)
};
export default Gallery