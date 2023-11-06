import { useState } from "react";
import {
    getTotalProjects,
    getOwner,
    setAddProject,
} from "../connection/alchemyConnect";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
    const [name, setName] = useState("");
    const [supply, setSupply] = useState("");
    const [projectContract, setProjectContract] = useState("");
    const [image, setImage] = useState("");
    const [tx, setTx] = useState("");
    const [status, setStatus] = useState("waiting");
    const [isLoading, setIsLoading] = useState(false);
    const [link, setLink] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async () => {
        setIsLoading(true);
        await setAddProject(name, supply, projectContract, image)
            .then((result) => {
                console.log("Transaction Confirmed");
                setTx(result.transactionHash);
                setLink(`https://mumbai.polygonscan.com/tx/${result.transactionHash}`)
                setEmpty();
                setStatus("success");
                console.log(
                    `tx hash: https://mumbai.polygonscan.com/tx/${result.transactionHash}`
                );
            })
            .catch((error) => {
                setStatus("failed");
                setEmpty();
                console.error(`Error: ${error}`);
            });
    };

    const setEmpty = () => {
        setName('');
        setSupply('');
        setProjectContract('');
        setImage('');
        setIsLoading(false);
    }

    const handleOkayClick = () => {
        setStatus("waiting");
        navigate('/');
    };

    return (
        <div className="bg-slate-900 text-slate-300">
            <div className="min-h-screen bg-slate-900-100 py-4 flex flex-col justify-center sm:py-10">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    {(status == "waiting" ? (
                        <div className="relative px-4 py-10 bg-slate-800 mx-8 md:mx-0 shadow rounded-3xl sm:p-10 w-[40vw]">
                            <div className="max-w-md mx-auto">
                                <div className="flex items-center space-x-5">
                                    <div className="h-14 w-14 bg-slate-700 rounded-full flex flex-shrink-0 justify-center items-center text-slate-300 text-2xl font-mono">
                                        #
                                    </div>
                                    <div className="block pl-2 font-semibold text-xl self-start text-Slate-300">
                                        <h2 className="leading-relaxed text-2xl font-bold">Create Project</h2>
                                        <p className="text-sm text-slate-400 font-normal leading-relaxed">
                                            Enter project details to create one
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-300 sm:text-lg sm:leading-7">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Project Name</label>
                                            <input
                                                type="text"
                                                className="px-4 py-2 border bg-slate-700 focus:ring-gray-500 focus:border-slate-700 w-full sm:text-sm border-slate-700 rounded-md focus:outline-none text-slate-300"
                                                placeholder="DeGods"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Supply</label>
                                            <input
                                                type="number"
                                                className="px-4 py-2 border bg-slate-700 focus:ring-gray-500 focus:border-slate-700 w-full sm:text-sm border-slate-700 rounded-md focus:outline-none text-slate-300"
                                                placeholder="10,000"
                                                value={supply}
                                                onChange={(e) => {
                                                    setSupply(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Nft Contract</label>
                                            <input
                                                type="text"
                                                className="px-4 py-2 border bg-slate-700 focus:ring-gray-500 focus:border-slate-700 w-full sm:text-sm border-slate-700 rounded-md focus:outline-none text-slate-300"
                                                placeholder="0x7qwn...i2s8"
                                                value={projectContract}
                                                onChange={(e) => {
                                                    setProjectContract(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Image</label>
                                            <input
                                                type="text"
                                                className="px-4 py-2 border bg-slate-700 focus:ring-gray-500 focus:border-slate-700 w-full sm:text-sm border-slate-700 rounded-md focus:outline-none text-slate-300"
                                                placeholder="ipfs/Degods/Profile"
                                                value={image}
                                                onChange={(e) => {
                                                    setImage(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-4 flex items-center space-x-4 justify-center">
                                        <button
                                            className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none disabled:opacity-30 "
                                            onClick={handleSubmit} disabled={isLoading}
                                        >
                                            {isLoading ? 'Awaiting confirmation...' : 'Create'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null) ||
                        (status == "success" ? (
                            <div className="p-8 text-center bg-slate-700 sm:p-12 rounded-xl ">
                                <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                                    Transaction confirmed
                                </p>

                                <h2 className="mt-6 text-2xl font-bold text-slate-300">
                                    Project added successfully
                                </h2>
                                <a className="text-sm font-semibold uppercase tracking-widest text-blue-600" href={link} target="_blank" >
                                    Check transaction
                                </a>

                                <a
                                    className="mt-8 inline-block w-full rounded-full bg-slate-600 py-4 text-xl font-bold text-slate-300 hover:bg-green-500/60"
                                    href=""
                                    onClick={handleOkayClick}
                                >
                                    okay
                                </a>
                            </div>
                        ) : null) ||
                        (status == "failed" ? (
                            <div className="p-8 text-center bg-slate-700 sm:p-12 rounded-xl ">
                                <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                                    Transaction confirmation Failed
                                </p>

                                <h2 className="mt-6 text-2xl font-bold text-slate-300">
                                    Project addeding Failed
                                </h2>

                                <a
                                    className="mt-8 inline-block w-full rounded-full bg-slate-600 py-4 text-xl font-bold text-slate-300 hover:bg-red-500/60"
                                    href=""
                                    onClick={handleOkayClick}
                                >
                                    okay
                                </a>
                            </div>
                        ) : null)}
                </div>
            </div>
        </div>
    );
}
