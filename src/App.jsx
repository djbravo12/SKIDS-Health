import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DisplayData from './ShowData'
import FormPage from './Form/Form'
import AlertComponent from './Modals Components/Alert'



function App() {


  return (
    <>
      <AlertComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DisplayData />}>
          </Route>
          <Route path='AddDetails' element={<FormPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
