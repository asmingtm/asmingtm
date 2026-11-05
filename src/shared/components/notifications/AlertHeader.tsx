import type React from "react";
import { MdClose } from "react-icons/md";

export interface AlertHeaderProps{
    label: string;
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AlertHeader({ label, state, setState }: AlertHeaderProps) {
    return state && (
        <header className={`alert-header ${state ? "visible" : "hidden"}`}>
            <p className="alert-label">
                { label }
            </p>
            <button className="btn btn-text" onClick={() => {
                setState(false);
                localStorage.setItem("alert", "hidden");
            }}>
                <MdClose className="btn-icon" />
            </button>
        </header>
    );
}