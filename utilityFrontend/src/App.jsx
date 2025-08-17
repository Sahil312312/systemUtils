import { Route, Routes } from "react-router-dom";
import GetUtilityInfo from "./Pages/UtilityPage/GetUtilityInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetUtilityInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
