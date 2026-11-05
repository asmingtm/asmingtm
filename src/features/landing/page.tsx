import { useState } from "react";
import type { ModalVisibility } from "../../shared/types";
import { FaInfo, FaGithub } from "react-icons/fa";
import { TapeGroup } from "./components/TapeGroup";
import { InfoModal } from "./components/InfoModal";

export function LandingPage() {
    const [modal, setModal] = useState<ModalVisibility>("closed");
    const closeModal = () => {
        console.log("clicked")
        setModal("closed");
    };

    return (
        <main className="page page-landing">
            <TapeGroup />
            <div className="block">
                <img className="block-banner" src="https://res.cloudinary.com/practice-backend-cloudinary/image/upload/v1792316547/road-block.png" alt="Road block ahead." draggable={false} />
                <h1 className="block-title">Under Construction</h1>
                <p className="block-summary">Sorry, it's not ready yet..</p>
            </div>
            <a href="https://github.com/asmingtm" className="btn btn-solid">
                <p className="btn-label">Return to profile</p>
                <FaGithub className="btn-icon" />
            </a>
            <button className="btn btn-float btn-solid" title="More info"  onClick={() => setModal("open")}>
                <FaInfo className="btn-icon" />
            </button>
            <InfoModal visibility={modal} closeAction={closeModal} />
        </main>
    );
}