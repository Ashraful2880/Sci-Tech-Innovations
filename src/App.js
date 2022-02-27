import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllUsers from "./Components/AllUsers/AllUsers";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home/Home";
import Invited from "./Components/Invited/Invited";
import InviteUsers from "./Components/InviteUsers/InviteUsers";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import Signin from "./Components/Signin/Signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/invite" element={<InviteUsers />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/invited" element={<Invited />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
