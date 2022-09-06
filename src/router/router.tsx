import { memo, VFC } from "react";
import { Routes, Route } from "react-router";
import MyAppBar from "../components/layout/Header";
import { Book } from "../components/pages/Book";
import { Home } from "../components/pages/Home";


export const Router: VFC = memo(() => {
    // console.log('hello');
    return (
        <Routes>
            <Route path="/" element={<MyAppBar />}>
                <Route index element={<Home/>} />
                <Route path="/book" element={<Book/>} />
            </Route>
        </Routes>
    )
});
