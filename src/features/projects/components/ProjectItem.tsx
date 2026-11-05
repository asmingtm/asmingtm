import { MdChevronRight } from "react-icons/md";

export interface ProjectItemProps{
    imgSrc: string;
    title: string;
    summary: string;
    tags?: string[];
}

export function ProjectItem({ imgSrc, summary, title, tags = [] }: ProjectItemProps) {
    return (
        <li className="project-item">
            <img src={imgSrc} alt="" className="project-icon" />
            <h1 className="project-title">{title}</h1>
            <p className="project-summary">{summary}</p>
            <ol className="project-tags">
                {
                    tags.map(tag => <li key={tag}>{tag}</li>)
                }
            </ol>
            <MdChevronRight className="project-view" />
        </li>
    );
}