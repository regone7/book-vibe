import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { IoLocationOutline } from "react-icons/io5";
// import { GrUserManager } from "react-icons/gr";
// import { FaBook } from "react-icons/fa";
import Readbooks from "../components/Readbooks";
import Wishlistbooks from "../components/Wishlistbooks";

const Listedbooks = () => {
    const [aplyBook, setAplyBook] = useState([]);
    const [aplyWish, setAplyWish] = useState([]);
    // console.log(aplyBook);
    // console.log(aplyWish);


    useEffect(() => {
        const getLocaldatas = JSON.parse(localStorage.getItem("books")) || [];
        setAplyBook(getLocaldatas);
        const getLocaldataswst = JSON.parse(localStorage.getItem("wishs")) || [];
        setAplyWish(getLocaldataswst);
    }, [])

    const handelRating = () => {
        let datas = [...aplyBook]

        let result = datas.sort((a, b) => b.rating - a.rating)
        console.log(setAplyBook([...result]))
       



        console.log("clicked")

    }


    return (
        <div className="container mx-auto my-7">
            <div className='text-3xl font-bold h-24 bg-gray-100 rounded-xl flex justify-center items-center'>Books</div>
            <div className="flex justify-center items-center mt-5">
                <details className="dropdown flex flex-row items-center justify-center">
                    <summary className="m-1 btn">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
                        <li><button onClick={handelRating} >Rating</button></li>
                        <li><button>Numberof pages</button>a</li>
                        <li><button>Published year</button>b</li>
                    </ul>
                </details>
            </div>
            <div className='my-5'>
                <Tabs>
                    <TabList>
                        <Tab ><h1 className="font-bold">Read Books</h1></Tab>
                        <Tab><h1 className="font-bold">Wishlist Books</h1></Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid col-span-1 space-y-3 mt-5">
                            {
                                aplyBook.map(bookdata => (<Readbooks key={bookdata.bookId} bookdata={bookdata}></Readbooks>))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid col-span-1 space-y-3 mt-5">
                            {
                                aplyWish.map(wishbook => (
                                    <Wishlistbooks key={wishbook.bookId} wishbook={wishbook}></Wishlistbooks>
                                ))
                            }
                        </div>
                    </TabPanel>
                </Tabs>

            </div>

        </div>
    );
};

export default Listedbooks;