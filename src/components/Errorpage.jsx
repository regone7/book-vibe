import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="container mx-auto my-7">
            <div className="flex justify-center items-center flex-col w-full h-96 gap-7">
                
                <h1 className="text-5xl font-bold text-center">Opps! 404 Page not Found</h1>
                <Link to='/'>
                    <button className="btn btn-outline btn-accent">Go to Home page</button>
                </Link>
            </div>

        </div>
    );
};

export default Errorpage;