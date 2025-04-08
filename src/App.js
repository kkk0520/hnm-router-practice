import { Routes, Route } from "react-router";
import './App.css';
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import NavBar from "./component/NavBar";

// 1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
// 1-1. 네이게이션바
// 2. 전체 상품 페이지 - 전체 상품을 볼 수 있다.
// 3. 로그인 페이지 - 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀을 때 로그인이 안되어 있을 경우 로그인 페이지가 먼저 나온다.
// 5. 상품 디테일을 눌렀을 때 로그인이 되어 있으면 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃 된다.
// 5. 로그아웃되면 상품 디데일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색 할 수 있다.

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductAll/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
