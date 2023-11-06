import Main from '../components/Main';
import SideBar from '../components/SideBar';

export default function Home() {

    return (
        <div className="bg-slate-900 grid grid-cols-1 lg:grid-cols-6">
            <div className='lg:col-span-1'><SideBar /></div>
            <div className='lg:col-span-5'><Main /></div>
        </div>
    );
}