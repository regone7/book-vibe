
import { IoLocationOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wishlistbooks = ({wishbook}) => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row border-2 border-green-200 p-7 rounded-xl ">
                <div className="lg:w-[25%] p-5 bg-gray-100 rounded-lg flex justify-center items-center">
                    <img src={wishbook.image} alt="" />
                </div>
                <div className="lg:w-[73%] space-y-4 p-5">
                    <h1 className="font-bold text-2xl  text-center lg:text-start">{wishbook.bookName}</h1>
                    <p className="text-center lg:text-start">By: {wishbook.author}</p>
                    <div className="flex flex-col lg:flex-row justify-start items-center gap-5">
                        <h1 className="font-bold">Tag</h1>
                        <div className="flex justify-start items-center gap-1">
                            <p className="text-green-500">{wishbook.tags[0]}</p>
                            <p className="text-green-500">{wishbook.tags[1]}</p>
                            <p className="text-green-500">{wishbook.tags[2]}</p>
                        </div>
                        <div className="flex justify-start items-center gap-1">
                            <IoLocationOutline />
                            <p>Year of Publishing: {wishbook.yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-5">
                        <div className="flex justify-start items-center gap-1">
                            <GrUserManager />
                            <p>Publisher: {wishbook.publisher}</p>
                        </div>
                        <div className="flex justify-start items-center gap-1">
                            <FaBook />
                            <p>{wishbook.totalPages} pages</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-center flex-col lg:flex-row lg:justify-start items-center lg:items-start gap-3">
                        <p className="w-52 h-7 flex justify-center items-center bg-blue-100 text-blue-700 rounded-full">Category: {wishbook.author}</p>
                        <p className="w-52 h-7 flex justify-center items-center bg-green-100 text-yellow-700 rounded-full">Rating: {wishbook.author}</p>

                        <Link to={`/books/${wishbook.bookId}`}><p className="w-40 h-7 flex justify-center items-center bg-green-300 text-purple-700 rounded-full">View Details</p></Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlistbooks;