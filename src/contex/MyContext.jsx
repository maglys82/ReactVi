import { createContext, useState, } from "react";
export const MyContexto = createContext();
import photos from "../../public/photos.json"


const ContextoProvider = ({ children }) => {
    const [contexto, setContexto] = useState(photos);
    return (
        <MyContexto.Provider value={{ contexto, setContexto }}>
            {children}
        </MyContexto.Provider>
    );
};
export default ContextoProvider;