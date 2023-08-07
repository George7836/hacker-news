import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NewsPage from "../pages/NewsPage";
import NotFound from "./NotFound";
import Layout from "./Layout";

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/:id' element={<NewsPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
  )
}
