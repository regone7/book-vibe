import { useEffect, useState } from "react";


const Listedbooks = () => {
    const [aplyBook,setAplyBook]=useState([]);
    console.log(aplyBook);
    useEffect(()=>{
        const getLocaldatas=JSON.parse(localStorage.getItem("books")) ||[];
        setAplyBook(getLocaldatas);
    },[])
    return (
        <div className="container mx-auto my-7">
            <div className='text-3xl font-bold h-24 bg-gray-100 rounded-xl flex justify-center items-center'>Books</div>
            <div className='my-5'>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

                    
                </div>
            </div>
        </div>
    );
};

export default Listedbooks;