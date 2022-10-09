import { CheckCircleIcon } from "@heroicons/react/24/outline"
import { ProductFeatureComponent } from "./product_features_component"
import { ProductGenreComponent } from "./product_genre_component"
import { ProductMediaTypeComponent } from "./product_media_type_component"
import { ProductPlatformComponent } from "./product_platform_component"

export const ProductGenresListComponent: React.FC = () => {
 return (
  <div className='flex flex-col cursor-default select-none w-1/4'>
   <div className="text-2xl font-bold text-white mb-20">Filters</div>

   <div className="flex flex-col mx-4 space-y-12">

    {/* Budgget */}
    {/* <div className="flex flex-col space-y-3">
     <div className="text-xl font-bold text-white">Budget</div>
     <div className="flex flex-row justify-between w-full">
      <div className="bg-blue-600 text-white text-base font-medium flex justify-center items-center p-1 rounded-lg w-20">
       $0
      </div>
      <div className="bg-blue-600 text-white text-base font-medium flex justify-center items-center p-1 rounded-lg w-20">
       $70
      </div>
     </div>
    </div> */}

    {/* Platform */}
    <div className="flex flex-col space-y-3">
     <div className="text-xl font-bold text-white">Platform</div>
     <ProductPlatformComponent id={'0'} name={'Play Station'} />
     <ProductPlatformComponent id={'1'} name={'X-Box'} />
     <ProductPlatformComponent id={'2'} name={'Nintendo'} />
     <ProductPlatformComponent id={'3'} name={'PC/Laptop'} />
     <ProductPlatformComponent id={'4'} name={'Mobile'} />

    </div>

    {/* Media Type */}
    <div className="flex flex-col space-y-3">
     <div className="text-xl font-bold text-white">Media Type</div>

     <ProductMediaTypeComponent id={"0"} name={"Game"} />
     <ProductMediaTypeComponent id={"1"} name={"Add-on"} />
     <ProductMediaTypeComponent id={"2"} name={"Bundle"} />
    </div>

    {/* Feature */}
    <div className="flex flex-col space-y-3">
     <div className="text-xl font-bold text-white">Features</div>

     <ProductFeatureComponent id={"0"} name={"Single Player"} />
     <ProductFeatureComponent id={"1"} name={"Multiplayer"} />
     <ProductFeatureComponent id={"2"} name={"Co-op"} />
     <ProductFeatureComponent id={"3"} name={"Crossplay"} />
    </div>

    {/* Genre */}
    <div className="flex flex-col space-y-3">
     <div className="text-xl font-bold text-white">Genre</div>

     <ProductGenreComponent id={"0"} name={"Action"} />
     <ProductGenreComponent id={"1"} name={"Arcade"} />
     <ProductGenreComponent id={"2"} name={"Fighting"} />
     <ProductGenreComponent id={"3"} name={"Horror"} />
     <ProductGenreComponent id={"4"} name={"Kids & Family"} />
     <ProductGenreComponent id={"5"} name={"Party, Music & Dance"} />
     <ProductGenreComponent id={"6"} name={"Platform"} />
     <ProductGenreComponent id={"7"} name={"Driving & Racing"} />
     <ProductGenreComponent id={"8"} name={"RPG"} />
     <ProductGenreComponent id={"9"} name={"Shooter"} />
     <ProductGenreComponent id={"10"} name={"Simulation"} />
     <ProductGenreComponent id={"11"} name={"Sports"} />
    </div>

   </div>



  </div>)
}