import { BrowserRouter,Routes,Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import QuizPage from "./Pages/QuizPage";
import FinalPage from "./Pages/FinalPage";
function App() {

  return (
   <>
    <BrowserRouter>

 <Routes>
   <Route path="/" Component={LandingPage}/>
   <Route path="/quiz" Component={QuizPage}/>
   <Route path="/final" Component={FinalPage}/>
   
 </Routes>

</BrowserRouter>
   </>
  )
}

export default App
