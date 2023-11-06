import { useEffect, useState } from "react";
import Card from "./Card";
import HeroSection from "./HeroSection";
import { getTotalProjects, getProject } from "../connection/alchemyConnect";

export default function Main() {

    const [projects, setProjects] = useState([]);

    const fetchProjects = async (totalProjects) => {
        const projectsList = [];

        for (let i = 1; i <= totalProjects; i++) {
            try {
                const project = await getProject(i);
                projectsList.push({
                    projectId: project.projectId.toString(),
                    image: project.image,
                    name: project.name,
                    supply: project.supply.toString(),
                    listed: project.listed.toString(),
                    floor: project.floor.toString(),
                    sales: project.sales.toString(),
                    volume: project.volume.toString(),
                    freeze: project.freeze,
                    nftContract: project.nftContract,
                });
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        }

        return projectsList;
    };

    useEffect(() => {
        async function fetchAndSetProjects() {
            const totalProjects = await getTotalProjects();

            if (totalProjects.toString() > 0) {
                const projectsList = await fetchProjects(totalProjects.toString());
                setProjects(projectsList);
            } else {
                console.log("No projects");
            }
        }

        fetchAndSetProjects();
    }, []);

    return (
        <div className="m-4 w-[90%] h-[89vh] mx-auto mt-6">
            <div className="">
                <h1 className="font-bold text-[40px] text-slate-300">Trending</h1>
                <HeroSection />
            </div>
            <div>
                <h1 className="font-bold text-[40px] text-slate-300 my-2 mt-10">
                    Projects
                </h1>
                <div className="flex basis-1/3 flex-wrap gap-2 justify-around">
                    {projects.map((project) =>
                        <Card name={project.name} floor={project.floor} volume={project.volume} id={project.projectId} image={project.image} />
                    )}
                </div>
            </div>
        </div>
    );
}
