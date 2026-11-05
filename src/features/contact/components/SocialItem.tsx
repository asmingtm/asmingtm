import type { IconType } from "react-icons";

export interface SocialItemProps{
    link: string;
    IconComponent: IconType;
}

export function SocialItem({ link, IconComponent }: SocialItemProps) {
    return (
        <a href={link} className="social-item" title={`goto ${link}`}>
            <IconComponent className="social-icon" />
        </a>
    );
}