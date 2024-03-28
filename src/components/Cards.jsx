import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";


const Cards = ({cards}) => {
    return (
        <div>
            <Link to={`/books/${cards.bookId}`}>
                    <div>
                        <div className="card  bg-base-100 shadow-xl  p-9 lg:h-[545px] ">
                            <figure className="px-10 pt-10   ">
                                <img src={cards.image} alt="" className="rounded-xl p-12" />
                            </figure>
                            <div className="card-body space-y-3 ">
                                <div className="flex justify-center lg:justify-start items-center gap-1 w-full flex-col lg:flex-row">
                                    <p className="bg-gray-200 p-7 lg:p-3 rounded-3xl w-28  lg:w-9 text-green-500 h-9 lg:h-5 flex justify-center items-center">{cards.tags[0]}</p>
                                    <p className="bg-gray-200 p-7 lg:p-3 rounded-3xl w-28  lg:w-9 text-green-500 h-9 lg:h-5 flex justify-center items-center">{cards.tags[1]}</p>
                                    <p className="bg-gray-200 p-7 lg:p-3 rounded-3xl w-28  lg:w-9 text-green-500 h-9 lg:h-5 flex justify-center items-center">{cards.tags[2]}</p>
                                </div>
                                <h2 className="card-title">{cards.bookName}</h2>
                                <p>By: {cards.author} </p>
                                <div className="card-actions flex justify-between">
                                    <div><p>{cards.category}</p></div>
                                    <div className="flex gap-1 items-center">
                                        <p>{cards.rating}</p>
                                        <FiStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
        </div>
    );
};

export default Cards;