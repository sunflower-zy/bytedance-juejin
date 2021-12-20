import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import "./index.css";

import { getCategories } from "../../../fake-api";

import type { Category } from "../../../types";

type CategoryResult = {
    code: number;
    data: {
        categories: Array<Category>;
    };
};

function Header() {
    const [categroy, setCategory] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            try {
                // @ts-ignore
                const result: CategoryResult = await getCategories();
                // @ts-ignore
                setCategory(result.data.categories);
            } catch (error) {
                alert("获取分类数据失败");
            }
        };

        getCategory();
    }, []);

    return (
        <header className="juejin-layout-header">
            {
                categroy.map((item,index)=>(
                    <nav>
                        
                    </nav>
                ))
            }
            <nav className="juejin-layout-header-tab ">
                <NavLink to="/recommend">推荐</NavLink>
                <NavLink to="/frontend">前端</NavLink>
                <NavLink to="/backend">后端</NavLink>
            </nav>
            <nav className="juejin-layout-header-tab">
                <NavLink to="/recommend">推荐</NavLink>
                <NavLink to="/frontend">前端</NavLink>
                <NavLink to="/backend">后端</NavLink>
            </nav>
        </header>
    );
}

export default Header;
