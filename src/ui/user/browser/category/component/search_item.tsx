import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";

export const SearchItem = () => { 
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()

    return (<form className="max-w-sm px-4 bg-black">
        <div className="relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-white left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                    setTimeout(() => {
                        const sortBy = searchParams.get('sortBy')
                        navigate(`?sortBy=${sortBy}&q=${e.target.value}`, {replace: true})
                    }, 1000)
                }}
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-black focus:border-indigo-600"
            />
        </div>
    </form>)
}