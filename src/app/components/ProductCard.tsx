import Image from "next/image"

export default function ProductCard (){
    return (
        <div className="flex flex:wrap justify-center gap-4 w-full p-4 mt-6 md:mt-8 lg:mt-12">
            <div className="flex flex-col items-center  border border-blue-600 py-2 px-10 shadow-sm shadow-slate-800 hover:shadow-black md:basis-1/3 lg:basis-1/4">
               <div>
                <Image 
                src="/product 1.jpeg"
                alt="Product one"
                width={300}
                height={300}
                />
               </div>
               <div>
                <h2 className="text-center">Perfume One</h2>
                </div>
                <div>
                <h2 className="text-center font-semibold">Price: $20.00</h2>
                </div>
 
               </div>
        
            <div className="flex flex-col items-center border border-blue-600 py-2 px-10 shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-black md:basis-1/3 lg:basis-1/4">
            <div>
                <Image
                src="/product 2.jpeg"
                alt="Product two"
                width={300}
                height={300}
                />
            </div>
            <div>
                <h2 className="text-center">Perfume Two</h2>
                </div>
                <div>
                <h2 className="text-center font-semibold">Price: $30.00</h2>
                </div>
            </div>
            
        
            <div className="flex flex-col items-center border border-blue-600 py-2 px-10 shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-black md:basis-1/3 lg:basis-1/4 w-full">
            <div>
                <Image
                src="/product 3.jpeg"
                alt="Product three"
                width={300}
                height={300}
                />
            </div>
            <div>
                <h2 className="text-center">Perfume Three</h2>
                </div>
                <div>
                <h2 className="text-center font-semibold">Price: $40.00</h2>
                </div>
            </div>
        </div>
    );
};

