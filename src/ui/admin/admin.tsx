import { SideNavigator } from "./component/side_navigator"
import { ProductManager } from "./product/product_manager"



export const Admin = () => {
    return (
        <div className="mx-20">
            Admin Page
           <div className="grid grid-cols-7 ">

                <div className="">
                    Dropdown List Admin
                    <SideNavigator/>
                </div>

                <div className="col-span-6">
                    <ProductManager/>
                </div>

            </div>     

        </div>
    )
}