import Sidebar from "../components/SideBar";
import Hie from '../assets/hei.png';
import ListingArea from "../components/ListingArea";

export default function NftData() {

    return (
        <div className="bg-slate-900 h-fill flex text-slate-300 h-fill">
            <div className="w-[20vw]">
                <Sidebar />
            </div>
            <div className="mx-auto my-auto">
                <div className="mx-auto">
                    <ListingArea />
                </div>
            </div>
        </div >
    )
}