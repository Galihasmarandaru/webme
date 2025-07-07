import { Background } from "./components/background";
import { Header } from "./components/header";
import { ProjectsExperience } from "./components/projects-experience";
import { WorksExperience } from "./components/works-experience";

export default function Page() {
    return (
        <>
            <Header />
            <Background />
            <WorksExperience />
            <ProjectsExperience />
        </>
    );
}