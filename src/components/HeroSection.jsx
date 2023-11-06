import Hero from '../assets/banner.png';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/project');
    }

    return (
        <div className="border-2 rounded-lg border-slate-700 mx-auto mt-6 hover:border-slate-600" onClick={handleClick}>
            <img className='border rounded-lg border-slate-800' src={Hero} slt="Hero Section" />
        </div>
    )
}