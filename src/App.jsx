import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout'
import HomePage from './Pages/HomePage/HomePage'
import { ThemeContextProvidor } from './Contexts/ThemeContext'
import { LanguageProvider } from './Contexts/LanguageContext'

export default function App() {
  const router=createBrowserRouter([
    //MainLayout
    {path:"/",element:<LanguageProvider><ThemeContextProvidor><MainLayout/></ThemeContextProvidor></LanguageProvider>,children:[
      {path:"",index:true,element:<HomePage/>},
      {path:"home",element:<HomePage/>},
    ]},


    //NotFound Page
    {path:"*",element:<>Your Not Found Page Here</>}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
