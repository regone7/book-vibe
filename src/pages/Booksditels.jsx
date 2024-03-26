
import { useLoaderData, useParams } from 'react-router-dom';

const Booksditels = () => {
    const books =useLoaderData()
    const {bookId} =useParams()
    const bookIdINT =parseInt(bookId)
    const book=books.find(book =>book.bookId ===bookIdINT)
    console.log(book);
    return (
        <div className="container mx-auto my-7">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                

            </div>
        </div>
    );
};

export default Booksditels;