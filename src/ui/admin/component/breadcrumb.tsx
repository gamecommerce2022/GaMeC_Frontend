import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export interface BreadcrumbProp {
    name: string;
    icon: JSX.Element;
    path?: string;
}
export const BreadCrumbComponent : React.FC<{list: BreadcrumbProp[]}> = (props: {list:BreadcrumbProp[]}) => {
    return (<nav className="flex" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {
            props.list.map((item, index) => {
                if(index === 0){
                    return <li className="inline-flex items-center">
                    <Link replace={true} to={item.path!} className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                      {item.icon}
                      <span className='self-center mt-1'>{item.name}</span>
                    </Link>
                  </li>
                } else if (index ===  props.list.length - 1){
                    return <li>
                    <div className="flex items-center">
                     {<ChevronRightIcon className='w-4 h-4'/>}
                     <div className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700">
                     {item.icon}
                      <span className='self-center mt-1'>{item.name}</span>
                    </div>
                    </div>
                  </li>
                } else {
                    return  <li>
                    <div className="flex items-center">
                     <ChevronRightIcon className='w-4 h-4'/>
                     <div className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                     <Link replace={true} to={item.path!} className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                     {item.icon}
                      <span className='self-center mt-1'>{item.name}</span>
                      </Link>
                    </div>
                    </div>
                  </li>
                }
            })
        }
    </ol>
    </nav>)
}