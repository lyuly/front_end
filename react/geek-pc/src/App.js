import { HistoryRouter, history } from "./utils/history";
import { Routes, Route } from "react-router-dom";
import GeekLayout from "@/pages/Layout";
import Login from "@/pages/Login";
import { AuthComponent } from "@/components/AuthComponent";

import "./App.sass";

import Publish from "./pages/Publish";
import Article from "./pages/Article";
import Home from "./pages/Home";

const mock = true;
if (mock) {
  require("@/mock/api");
}

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AuthComponent>
                <GeekLayout />
              </AuthComponent>
            }
          >
            <Route index element={<Home />}></Route>
            <Route path="/article" element={<Article />}></Route>
            <Route path="/publish" element={<Publish />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
