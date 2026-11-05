import type { IconType } from "react-icons";

export interface ContactItemProps{
    label: string;
    type: string;
    IconComponent: IconType;
    value: string;
}
export function ContactItem({ label, IconComponent, type, value }: ContactItemProps){
    return(
        <label className="contact-item" htmlFor="contact-email">
            <IconComponent className="contact-icon" />
            <p className="contact-label">{ label }</p>
            <input
                id={`contact-${type}`}
                value={value}
                type={type}
                name="contact"
                className="contact-value"
                readOnly
            />
        </label>
    );
}