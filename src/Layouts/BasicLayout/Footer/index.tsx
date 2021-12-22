import "./index.css";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function Footer() {
    const tabOptions = [
        { sort: "hot", name: "热门" },
        { sort: "new", name: "最新" },
        { sort: "history", name: "历史" },
    ];

    const [searchParams, setSearchParams] = useSearchParams();
    const handleSort = (sort: string) => {
        setSearchParams({ sort });
    };
    return (
        <footer className="juejin-layout-footer">
            <nav className="juejin-layout-footer-tab">
                {tabOptions.map((item, index) => {
                    return (
                        <span
                            key={index}
                            onClick={() => {
                                handleSort(item.sort);
                            }}
                            className={
                                searchParams.get("sort") === item.sort
                                    ? "juejin-active-link"
                                    : ""
                            }
                        >
                            {item.name}
                        </span>
                    );
                })}
            </nav>
        </footer>
    );
}

export default Footer;
