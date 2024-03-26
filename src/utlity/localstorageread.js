export const saveDataToReadstorage = (book) => {
    const seatRead = JSON.parse(localStorage.getItem("books")) || [];
    const dataRead = seatRead.find((item) => item.bookId == book.bookId);
    if (dataRead) {
        alert("already exites")
    } else {
        seatRead.push(book);
        const localValue = JSON.stringify(seatRead);
        localStorage.setItem("books", localValue);
        alert("success")
    }
};