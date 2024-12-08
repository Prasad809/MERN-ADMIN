import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Authorize/Signin'
import LogIn from './Authorize/Login'
import Home from './components/Home'
import LogInActive from './Authorize/LoginAct'
import HomeActive from './components/HomeAct'
// import Toggle from './globel/toggle'
import Search from './Authorize/search'
import Html from './HtmlNotes/html'
import Css3 from './cssNotes/css'
import JsEs5 from './JsNotes/jsEs5'
import JsEs6 from './Es6Notes/JsEs6'
import React from './Reactjs/react'


function App() {
  return (
    <div>
      {/* <Toggle/> */}
      <MemoryRouter>
        <Routes>
          {/* Authorized paths*/}
          <Route path='/login' element={<LogIn/>} ></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/'element={<LogInActive/>}></Route>
          {/* Home paths */}
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/homeAct'element={<HomeActive/>}></Route>
          {/* search paths */}
          <Route path='/search' element={<Search/>}></Route>
          {/* Technolgies paths */}
          <Route path='/homeAct/html' element={<Html/>}>
            {/* <Route path='noteshtml' element={<NoteHtml5/>}></Route> */}
          </Route>
          {/* css paths */}
          <Route path='/homeAct/css' element={<Css3/>}></Route>
          {/* jsEs5 path*/}
          <Route path='/homeAct/Es5' element={<JsEs5/>}></Route>
          {/* jsEs6 path */}
          <Route path='/homeAct/Es6' element={<JsEs6/>}></Route>
          {/* react path */}
          <Route path='/homeAct/react' element={<React/>}></Route>
        </Routes>
      </MemoryRouter>
    </div>
  )
}

export default App
