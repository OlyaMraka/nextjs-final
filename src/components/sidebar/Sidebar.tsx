import type {FC} from "react";
import "./sidebar.css";
import UserInfo from "@/src/components/userInfo/UserInfo";

const Sidebar: FC = () => {
    return (
        <aside className="sidebar-block">
            <UserInfo/>
            <ul><li>Movies</li></ul>
        </aside>
    );
};

export default Sidebar;
