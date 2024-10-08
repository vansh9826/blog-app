

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mainpage from "./Pages/Mainpage"
import LandingPage from "./Pages/LandingPage"
import SignupPage from "./Pages/SignupPage"
import SigninPage from "./Pages/Signin"
import BlogPage from "./Pages/BlogPage"
import PublishPage from "./Pages/PublishPage"








const App = () => {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<LandingPage/>}/>
  <Route path="/signup" element={<SignupPage/>}/>
  <Route path="/signin" element={<SigninPage/>}/>
  <Route path="/blogs" element={<Mainpage/>}/>
  <Route path="/blog/:id" element={<BlogPage/>}/>
  <Route path="/publish" element={<PublishPage/>}/>
</Routes>
</BrowserRouter>
   </>
  )
}

export default App
