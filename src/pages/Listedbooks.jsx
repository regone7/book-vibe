import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { IoLocationOutline } from "react-icons/io5";
// import { GrUserManager } from "react-icons/gr";
// import { FaBook } from "react-icons/fa";
import Readbooks from "../components/Readbooks";

const Listedbooks = () => {
    const [aplyBook, setAplyBook] = useState([]);
    console.log(aplyBook);
    useEffect(() => {
        const getLocaldatas = JSON.parse(localStorage.getItem("books")) || [];
        setAplyBook(getLocaldatas);
    }, [])
    return (
        <div className="container mx-auto my-7">
            <div className='text-3xl font-bold h-24 bg-gray-100 rounded-xl flex justify-center items-center'>Books</div>
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
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>

            </div>

        </div>
    );
};

export default Listedbooks;