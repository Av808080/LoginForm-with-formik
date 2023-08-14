import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
const App = () => {
  return (
    <div className="bg-slate-300/50 min-h-screen flex justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
