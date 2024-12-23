// import Footer from "./Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import LOGIN from "./components/Signin"
import Feed from "./components/Feed"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Profile from "./components/Profile"
import Connections from "./components/Connections"


function App() {
 

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={ <Body/>}>
      <Route path="/login" element={ <LOGIN/>}/>
      <Route path="/feed" element={ <Feed/>}/>
      <Route path="/profile" element={ <Profile/>}/>
      <Route path="/connections" element={ <Connections/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
