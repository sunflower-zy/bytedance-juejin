//@ts-nocheck
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
                const response = await getCategories();
                // @ts-ignore
                setCategory(response.data.categories);
            } catch (error) {
                alert("获取分类数据失败");
            }
        };

        getCategory();
    }, []);

    const [currentCategory, setCurrentCategory] = useState(0);
    const HeaderOneTab = [];
    const HeaderTwoTab = [];

    categroy.forEach((item, index) => {
        HeaderOneTab.push(
            <NavLink to={`/${item.category_name}`} key={item.category_id}>
                {item.category_name}
            </NavLink>
        );
        if (item.children) {
        }
    });

    return (
        <header className="juejin-layout-header">
            <nav>{HeaderOneTab.map((item, index) => item)}</nav>
            <nav>{HeaderTwoTab.map((item, index) => item)}</nav>
        </header>
    );
}

export default Header;
