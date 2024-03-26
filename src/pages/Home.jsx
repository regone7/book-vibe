import { Link, useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";


const Home = () => {
    const home = useLoaderData()
    console.log(home)
    return (
        <div className="container mx-auto my-7">
            <div className="bg-gray-200 rounded-md h-[754px] lg:h-[454px] flex flex-col lg:flex-row  items-center gap-1">
                <div className="p-16 lg:ml-16">
                    <h1 className="lg:text-5xl text-2xl my-3">The power of stories to inspire Book.</h1>
                    <Link to='/listbooks' className="btn btn-accent rounded-lg mt-3">View The List</Link>
                </div>
                <div className="lg:mr-16">
                    <img src="https://i.ibb.co/9yvKv2t/pngwing-1.png" alt="" />
                </div>

            </div>
            <div className="text-3xl font-bold text-center mt-12 mb-7">Books</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                {
                    home.map(cards=>(
                        <Cards key={cards.bookId} cards={cards}></Cards>
                    ))
                }

            </div>

        </div>
    );
};

export default Home;