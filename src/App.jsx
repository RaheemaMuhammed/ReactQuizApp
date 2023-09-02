import { BrowserRouter,Routes,Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import QuizPage from "./Pages/QuizPage";
function App() {

  return (
   <>
    <BrowserRouter>

 <Routes>
   <Route path="/" Component={LandingPage}/>
   <Route path="/quiz" Component={QuizPage}/>
   
 </Routes>

</BrowserRouter>
   </>
  )
}

export default App
