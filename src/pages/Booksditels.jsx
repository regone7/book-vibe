
import { useLoaderData, useParams } from 'react-router-dom';
import { saveDataToReadstorage } from '../utlity/localstorageread';

const Booksditels = () => {
    const books = useLoaderData()
    const { bookId } = useParams()
    const bookIdINT = parseInt(bookId)
    const book = books.find(book => book.bookId === bookIdINT)
    console.log(book);

    const handelRead =()=>{
        saveDataToReadstorage(book);
    }
    return (
        <div className="container mx-auto my-7">
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-3 '>
                <div className='flex justify-center items-center w-full bg-gray-200 rounded-lg'>
                    <img src={book.image} alt="" className='lg:w-64' />
                </div>

                <div className='col-span-2 p-9 space-y-3'>
                    <h1 className='text-2xl font-bold'>{book.bookName}</h1>
                    <h2 className='text-xl'>By : {book.author}</h2>
                    <h2 className='text-xl'>{book.category}</h2>
                    <div className='flex items-start gap-2'>
                        <h1 className='font-bold text-xl'>Review:</h1>
                        <p>{book.review}</p>
                    </div>
                    <div className="flex justify-start items-center gap-1 flex-col lg:flex-row ">
                        <p className='font-bold text-xl mr-3'>Tag</p>
                        <p className="bg-gray-200 p-7  rounded-xl   text-green-500 w-28  h-7  flex justify-center items-center">  {book.tags[0]}</p>
                        <p className="bg-gray-200 p-7  rounded-xl  text-green-500 w-28 h-7  flex justify-center items-center">  {book.tags[1]}</p>
                        <p className="bg-gray-200 p-7  rounded-xl   text-green-500 w-28  h-7  flex justify-center items-center">  {book.tags[2]}</p>
                    </div>
                    <div className='w-72 flex lg:gap-12'>
                        <div >
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div >
                        <p className='font-bold'>{book.totalPages} Pages</p>
                        <p className='font-bold'>{book.publisher} </p>
                        <p className='font-bold'>{book.yearOfPublishing} </p>
                        <p className='font-bold'>{book.rating} </p>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                    <button onClick={handelRead} className="btn btn-outline btn-primary">Read</button>
                    <button className="btn btn-info">Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Booksditels;