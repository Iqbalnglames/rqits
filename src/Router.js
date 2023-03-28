import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/404";
import About from "./Pages/About";
import LandingPage from "./Pages/Landing";
import Login from "./Pages/LoginPage";
import MainMateri from "./Pages/Materi";
import Materi from "./Pages/MateriList";
import WriterPage from "./Pages/WriterPage";


const Navigation = () => {
    return(
        <Routes>
            {/* <Route path="/*" element={<NotFound />}></Route> */}
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="materi" element={<Materi />}></Route>
            <Route path="materi1" element={<MainMateri />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="writer" element={<WriterPage />}></Route>
        </Routes>
    )
}

export default Navigation