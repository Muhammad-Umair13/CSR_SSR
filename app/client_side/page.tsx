"use client";
import { useEffect, useState } from 'react'
import Image from 'next/image';

interface card {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    },

}

const Client_side = () => {

    const [data1, setdata] = useState<card[]>([])
    const [loading ,setloading] = useState(true)
    useEffect(() => {
        const fetching = async () => {
            const data = await fetch("https://fakestoreapi.com/products");
            setdata(await data.json())
            setloading(false)
            // console.log(data1)
        }
        fetching();
    }, [])

    if(loading){
        return <div className="flex items-center justify-center min-h-screen bg-[#f5b94b]">
             <div className="spinner-border animate-spin inline-block w-20 h-20 rounded-full text-black border-8 border-t-transparent border-black"></div> 
             <span className="ml-4 text-[#ac802f] text-lg font-bold">Loading...</span> 
             </div>
    }
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 bg-[#f5b94b]"> {
            data1.map((value, index) => (
                <div key={index} className="border-4 border-black rounded-lg shadow-lg p-4 bg-white">
                    <Image src={value.image} alt={value.title} className="h-40 w-1/2 m-auto rounded-t-lg" width={100} height={100}/>
                    <div className="p-4">
                        <h2 className="text-lg font-bold mb-2">{value.title}</h2>
                        <p className="text-gray-600 mb-2"><i>{value.category}</i></p>
                        <p className="text-green-600 font-bold mb-2">${value.price}</p>
                        <p className="text-gray-700 mb-2">{value.description}</p>
                        <div className="flex items-center">
                            <span className="text-yellow-500 font-bold mr-1">{value.rating.rate}</span>
                            <span className="text-gray-600">({value.rating.count})</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Client_side