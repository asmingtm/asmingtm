import type { IconType } from "react-icons";
import { NavLink } from "react-router";

export interface NavigatorProps{
    link: string;
    label: string;
    IconComponent: IconType;
}

export function getNavigatorClass(isActive: boolean){
    return isActive ? "navigator navigator-active" : "navigator";
}

export function Navigator({ link, label, IconComponent }: NavigatorProps) {
    return (
        <NavLink to={link} className={e => getNavigatorClass(e.isActive)}>
            <IconComponent className="navigator-icon" />
            <p className="navigator-label">
                { label }
            </p>
        </NavLink>
    );
}