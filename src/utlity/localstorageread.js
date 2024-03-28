import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveDataToReadstorage = (book) => {
    const seatRead = JSON.parse(localStorage.getItem("books")) || [];
    const dataRead = seatRead.find((item) => item.bookId == book.bookId);
    if (dataRead) {
        toast.warning("This book is already in  Read list.")
    } else {
        seatRead.push(book);
        const localValue = JSON.stringify(seatRead);
        localStorage.setItem("books", localValue);
        toast.success("Successfully Add Read List")
    }
};

export const saveDataToWishliststorage = (wish) => {
    const seatReads = JSON.parse(localStorage.getItem("books")) || [];
    const seatWish = JSON.parse(localStorage.getItem("wishs")) || [];
    const dataWish = seatWish.find((items) => items.bookId == wish.bookId);
    const dataReads = seatReads.find((items) => items.bookId ==wish.bookId);
    if (dataReads) {
        toast.warning("This book is already in  Read list.")
    }else if((!dataWish)) {
        seatWish.push(wish);
        const localValues = JSON.stringify(seatWish);
        localStorage.setItem("wishs", localValues);
        toast.success("Successfully Add Wishlists ")
    }else{
        toast.error("Already it etits Wishlists");
    }
};