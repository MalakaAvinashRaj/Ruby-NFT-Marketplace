import NftList from "../components/NftList";
import ProjectHead from "../components/ProjectHead";
import Sidebar from "../components/SideBar";
import { useParams } from 'react-router-dom';
import { getProject } from '../connection/alchemyConnect';
import { useState, useEffect } from 'react';

export default function Project() {

    const [projectDetails, setProjectDetails] = useState(null);

    const { projectId } = useParams();

    useEffect(() => {

        const fetchProjectDetails = async () => {
            try {
                const project = await getProject(projectId);
                setProjectDetails(project);
                console.log(project);
            } catch (error) {
                console.error("Error fetching project details:", error);
            }
        };

        fetchProjectDetails();

    }, [projectId]);

    return (
        <div className="bg-slate-900 text-slate-300 grid grid-cols-1 lg:grid-cols-6">
            <div className="lg:col-span-1">
                <Sidebar />
            </div>
            <div className="lg:col-span-5">
                <ProjectHead project={projectDetails} />
                <NftList project={projectDetails} />
            </div>
        </div>
    )
}