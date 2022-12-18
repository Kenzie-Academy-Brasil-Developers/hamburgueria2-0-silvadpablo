import { toast, ToastContainer } from "react-toastify";
import { MainRoutes } from "./Routes/Routes";

function App() {
  return (
    <>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={2000}/>
      <MainRoutes/>
    </>
  );
}

export default App;