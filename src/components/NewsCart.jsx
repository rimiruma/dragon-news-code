

import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCart = ({ news }) => {
    const { title, author, rating, total_view, image_url, details } = news;

    return (
        <div className="card bg-base-100 shadow-xl rounded-2xl">
            {/* Author info */}
            <div className="flex items-center bg-base-200 justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full border"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author.name}</h2>
                        <p className="text-xs text-gray-500">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    <FaRegBookmark />
                    <FaShareAlt></FaShareAlt>
                </div>
            </div>

            {/* Thumbnail */}
            <figure>
                <img src={image_url} alt={title} className="w-full h-56 object-cover" />
            </figure>

            {/* Content */}
            <div className="card-body">
                <h2 className="card-title text-base font-semibold leading-5">
                    {title}
                </h2>
                <p className="text-sm text-gray-600">
                    {details.slice(0, 100)}...{" "}
                    <span className="text-orange-500 cursor-pointer">Read More</span>
                </p>

                {/* Footer: rating + views */}
                <div className="flex justify-between items-center mt-3 border-t pt-2">
                    <div className="flex items-center gap-1 text-orange-400">
                        <FaStar />
                        <span className="font-medium text-gray-700">{rating.number}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                        <FaEye />
                        <span className="text-sm">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCart;
