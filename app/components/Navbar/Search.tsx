import Image from 'next/image';
const Search = () =>{
    return (
        <>
        <button
            type="submit"
            className="p-2 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full flex items-center justify-center"
            style={{ width: "2.5rem", height: "2.5rem" }} // Ensure it's a perfect circle
        >
            <Image
                src={'/assets/banner/search.svg'}
                alt="inputicon"
                width={20}
                height={20}
            />
        </button>
        {/* Expanding Input Field */}
        <input
            type="text"
            name="q"
            className="absolute right-0 w-0 opacity-0 group-hover:w-64 group-hover:opacity-100 group-hover:pl-4 py-2 px-3 lg:py-3 text-sm lg:text-base text-black rounded-full transition-all duration-300 ease-in-out bg-white shadow-md focus:outline-none"
            placeholder="Search"
            autoComplete="off"
        />
        </>
    )
}

export default Search;