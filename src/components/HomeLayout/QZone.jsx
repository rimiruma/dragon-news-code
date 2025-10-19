import swimming from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playgroundImg from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className="bg-base-200 p-3">
            <h1 className='font-bold mb-2'>Q-Zone</h1>
            <div className='space-y-5'>
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={playgroundImg} alt="" />

            </div>
        </div>
    );
};

export default QZone;