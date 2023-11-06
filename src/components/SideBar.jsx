import { Link } from "react-router-dom";


export default function Sidebar() {
    return (
        <div className="border-r-2 border-slate-800 w-[100%] py-6 h-[100%] hover:border-slate-700">
            <div className="flex flex-col justify-center align-center text-slate-300 ">
                <div className="py-2 px-4 mx-4 my-2 hover:bg-slate-800 border rounded-md border-slate-900 hover:border-slate-700">Trending</div>
                <div className="py-2 px-4 mx-4 my-2 hover:bg-slate-800 border rounded-md border-slate-900 hover:border-slate-700">Top 100</div>
                <div className="py-2 px-4 mx-4 my-2 hover:bg-slate-800 border rounded-md border-slate-900 hover:border-slate-700">Marketplace</div>
                <div className="py-2 px-4 mx-4 my-2 hover:bg-slate-800 border rounded-md border-slate-900 hover:border-slate-700">Launchpad</div>
                <Link className="py-2 px-4 mx-4 my-2 hover:bg-slate-800 border rounded-md border-slate-900 hover:border-slate-700" to={'/createProject'}>Create project</Link>
                <div className="py-2 px-4 mx-4 my-2 hover:bg-slate-800 border rounded-md border-slate-900 hover:border-slate-700">Drop Calender</div>
                <div className="py-2 px-4 mx-4 my-2 hover:bg-slate-800 border rounded-md border-slate-900 hover:border-slate-700">Watchlist</div>
                <div className="py-2 px-4 mx-4 my-2 hover:bg-slate-800 border rounded-md border-slate-900 hover:border-slate-700">Presales</div>
                <div className="py-2 px-4 mx-4 my-2 hover:bg-slate-800 border rounded-md border-slate-900 hover:border-slate-700">Support</div>
            </div>
        </div>
    )
}