import { Link } from 'react-router-dom'


const EmptyDataComponent = () => {


    return (<main className="bg-[#FFFFFF] h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-[#02178A] text-xl py-4 lg:text-3xl">It seem you haven&apos;t added any contacts</h1>
            <Link to='/AddDetails' className="bg-[#ff4040] p-3 inline-block text-[#FFFFFF]  hover:shadow-xl lg:text-lg lg:p-4">Add contacts</Link>
        </div>
    </main>)
}

export default EmptyDataComponent