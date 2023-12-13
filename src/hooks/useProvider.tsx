import { useContext } from "react";
import { Context } from "../context/Provider";

const useProvider = () => {
    return useContext(Context)
}
export default useProvider