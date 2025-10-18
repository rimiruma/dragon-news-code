import { format } from 'date-fns';
import logo from '../assets/logo.png'

const Headers = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-semibold text-accent'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
            
        </div>
    );
};

export default Headers;