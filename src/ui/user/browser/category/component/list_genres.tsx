import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { FilterItems } from "../component"

const features = [
 { id: 1, name: 'Achievements' },
 { id: 2, name: 'Challenging Combat' },
 { id: 3, name: 'Cloud Saves' },
 { id: 4, name: 'Co-op' },
 { id: 5, name: 'Competitive' },
 { id: 6, name: 'Controller Support' },
 { id: 7, name: 'Cross Platform' },
 { id: 8, name: 'MMO' },
 { id: 9, name: 'Multiplayer' },
 { id: 10, name: 'Single Player' },
 { id: 11, name: 'VR' },
]

const genres = [
 { id: 1, name: 'Action' },
 { id: 2, name: 'Action-Adventure' },
 { id: 3, name: 'Adventure' },
 { id: 4, name: 'Application' },
 { id: 5, name: 'Card Game' },
 { id: 6, name: 'Casual' },
 { id: 7, name: 'City Builder' },
 { id: 8, name: 'Comedy' },
 { id: 9, name: 'Dungeon Crawler' },
 { id: 10, name: 'Exploration' },
 { id: 11, name: 'Fighting' },
 { id: 12, name: 'First Person' },
 { id: 13, name: 'Horror' },
 { id: 14, name: 'Indie' },
 { id: 15, name: 'Music' },
 { id: 16, name: 'Open World' },
 { id: 17, name: 'Party' },
 { id: 18, name: 'Platformer' },
 { id: 19, name: 'Puzzle' },
 { id: 20, name: 'Racing' },
 { id: 21, name: 'Retro' },
 { id: 22, name: 'Rogue-Lite' },
 { id: 23, name: 'RPG' },
 { id: 24, name: 'Shooter' },
]

const types = [
 { id: 1, name: 'Apps' },
 { id: 2, name: 'Editor' },
 { id: 3, name: 'Game' },
 { id: 4, name: 'Game Add-On' },
 { id: 5, name: 'Game Bundle' },
 { id: 6, name: 'Game Demo' },
 { id: 7, name: 'Game Edition' },
]

const platforms = [
 { id: 1, name: 'Mac OS' },
 { id: 2, name: 'Windows' }
]

export const ListGenres = () => {
 const [selectedGenres, setselectedGenres] = useState<{ id: number, name: string }[]>([])
 const [selectedFeatures, setselectedFeatures] = useState<{ id: number, name: string }[]>([])
 const [selectedTypes, setselectedTypes] = useState<{ id: number, name: string }[]>([])
 const [selectedPlatforms, setselectedPlatforms] = useState<{ id: number, name: string }[]>([])

 return (<div className='flex flex-col gap-4 w-60'>
  {/** Filter Input */}
  <div className='bg-transparent'>
   <label htmlFor="filter" className="block text-sm font-medium text-gray-700">
    Filter
   </label>
   <div className="relative mt-1 rounded-md shadow-sm">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
     <MagnifyingGlassIcon className="text-gray-500 sm:text-sm w-4 h-4 inline-block" />
    </div>
    <input
     type="text"
     name="filter"
     id="filter"
     className="block w-full rounded-md bg-transparent text-gray-300 border-gray-300 pl-7 pr-12 sm:text-sm"
     placeholder="Keyword"
    />
   </div>
  </div>

  {/** Genres */}
  <FilterItems title={"Genres"} filters={genres} selected={selectedGenres} setSelected={setselectedGenres} />

  {/** Feature */}
  <FilterItems title={"Features"} filters={features} selected={selectedFeatures} setSelected={setselectedFeatures} />

  {/** Types */}
  <FilterItems title={"Types"} filters={types} selected={selectedTypes} setSelected={setselectedTypes} />

  {/** Platform */}
  <FilterItems title={"Platforms"} filters={platforms} selected={selectedPlatforms} setSelected={setselectedPlatforms} />
 </div>)
}