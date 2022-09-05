import { memo, VFC } from "react";
import { Routes, Route } from "react-router";
import { Home } from "../components/pages/Home";


export const Router: VFC = memo(() => {
    // console.log('hello');
    return (
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
        </Routes>
    )
});
