
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <h1 className='text-base-100 bg-secondary px-3 py-2'>Latest</h1>
            <Marquee speed={60} pauseOnHover gradient={false}>
                🚀 Welcome to our website! |  New updates every week! | Join us today!|  New updates every week! | Join us today!
            </Marquee>
        </div>
    );
};

export default LatestNews;