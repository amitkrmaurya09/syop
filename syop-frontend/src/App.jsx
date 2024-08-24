import axios from "axios";
import { BACKEND_URL } from "./Backend_url";
import Header from "./Components/Header";
import Products from "./Components/Product";

function App() {
  // useEffect(() => {
  //   axios.get(`${BACKEND_URL}/api/hello`).then((res) => {
  //     console.log("this is the data", res.data);
  //   });
  // }, []);

  return (
    <>
    
      <Header />
      <Products />
    </>
  );
}

export default App;
