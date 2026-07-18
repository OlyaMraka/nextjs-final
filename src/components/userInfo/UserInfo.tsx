import {FC} from "react";
import "./user-info.css"

const UserInfo: FC = () => {
    return (
        <div className="user-info">
            <div className="user-logo">
                OM
            </div>
            <p>Olya Mraka</p>
            <p>mrakaolga@gmail.com</p>
        </div>
    );
};

export default UserInfo;
