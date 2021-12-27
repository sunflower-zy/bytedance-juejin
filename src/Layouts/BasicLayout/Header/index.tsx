import { useState, useEffect } from "react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
    const [category, setCategory] = useState<Array<Category>>([]);
    const [currentCategory, setCurrentCategory] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const getCategory = async () => {
            try {
                const response: CategoryResult = await getCategories();

                setCategory(response.data.categories);
            } catch (error) {
                alert("获取分类数据失败");
            }
        };

        getCategory();
    }, []);

    function handleJump(name: string, id: number) {
        setCurrentCategory(id);
        switch (name) {
            case "推荐":
                navigate("/recommend", { state: id });
                break;
            case "后端":
                navigate("/backend", { state: id });
                break;
            case "前端":
                navigate("/frontend", { state: id });
                break;
            default:
                navigate(name, { state: id });
        }
    }

    return (
        <header className="juejin-layout-header">
            <nav className="juejin-layout-header-tab-one">
                {category.map((item, index) => {
                    if (item.children && currentCategory === item.category_id) {
                        return (
                            <>
                                <span
                                    className={
                                        currentCategory === item.category_id
                                            ? "juejin-layout-header-link-item juejin-active-link"
                                            : "juejin-layout-header-link-item"
                                    }
                                    key={item.category_id}
                                    onClick={() => {
                                        handleJump(
                                            item.category_name,
                                            item.category_id
                                        );
                                    }}
                                >
                                    {item.category_name}
                                </span>
                                <nav className="juejin-layout-header-tab-two">
                                    {item.children.map((item) => {
                                        return (
                                            <span
                                                className={
                                                    location.pathname.includes(
                                                        item.category_name
                                                    )
                                                        ? "juejin-layout-header-link-item juejin-active-link"
                                                        : "juejin-layout-header-link-item"
                                                }
                                                onClick={() => {
                                                    const pathArray =
                                                        location.pathname.split(
                                                            "/"
                                                        );

                                                    navigate(
                                                        `/${pathArray[1]}/${item.category_name}`,
                                                        {
                                                            state: item.category_id,
                                                        }
                                                    );
                                                }}
                                            >
                                                {item.category_name}
                                            </span>
                                        );
                                    })}
                                </nav>
                            </>
                        );
                    } else {
                        return (
                            <>
                                <span
                                    className={
                                        currentCategory === item.category_id
                                            ? "juejin-layout-header-link-item juejin-active-link"
                                            : "juejin-layout-header-link-item"
                                    }
                                    key={item.category_id}
                                    onClick={() => {
                                        handleJump(
                                            item.category_name,
                                            item.category_id
                                        );
                                    }}
                                >
                                    {item.category_name}
                                </span>
                            </>
                        );
                    }
                })}
            </nav>
        </header>
    );
}

export default Header;
