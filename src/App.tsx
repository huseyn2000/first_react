import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Header } from "./Header";
import { Landing } from "./pages/Landing/Landing";
import { BlogPage } from "./pages/blog_page/components/BlogPage";
import { Footer } from "./Footer";
import { Inner } from "./pages/blog_inner/components/Inner";
import { SignUp } from "./pages/signup/components/SignUp";
import { LogIn } from "./pages/login/components/LogIn";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="landing" element={<Landing />} />  
          <Route path="blogpage" element={<BlogPage />} />  
          <Route path="inner" element={<Inner />} />  
          <Route path="signup" element={<SignUp />} />  
          <Route path="login" element={<LogIn />} />  
        </Routes>


      </main>
      <Footer />
    </>
  );
}

export default App;
