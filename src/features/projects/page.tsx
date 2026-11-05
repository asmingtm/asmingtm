import { AlertHeader, PageHeader } from "@components";
import { ProjectItem } from "./components/ProjectItem";
import { useEffect, useState } from "react";

const roadBlock = "https://res.cloudinary.com/practice-backend-cloudinary/image/upload/v1792316547/road-block.png";

export function ProjectsPage() {
    const [alert, setAlert] = useState(true);

    useEffect(() => {
        const alertValue = localStorage.getItem("alert");
        if(alertValue === "hidden"){
            setAlert(false)
        }
    }, []);

    return (
        <main className="page-projects">
            <AlertHeader setState={setAlert} state={alert} label="This website is still under development.." />
            <PageHeader title="My Projects" />
            <ul className="project-list">
                <ProjectItem
                    imgSrc={roadBlock}
                    title="Spinly"
                    summary="Spin wheel, land on random results."
                    tags={["React", "Express", "Mongoose"]}
                />
                <ProjectItem
                    imgSrc={roadBlock}
                    title="Finrum"
                    summary="Shelf manager for small businesses."
                    tags={["Typescript", "Express", "Mongoose"]}
                />
            </ul>
        </main>
    );
}