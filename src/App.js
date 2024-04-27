import { useLocation } from "react-router-dom";
import DefaultLayoutUser from "./pages/defaultLayoutUser";
import DefaultLayoutAdmin from "./pages/defaultLayoutAdmin";


const roterAdmin = '/admin'
function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  if(currentPath?.includes(roterAdmin)) return <DefaultLayoutAdmin />
  return <DefaultLayoutUser/>
}

export default App;
