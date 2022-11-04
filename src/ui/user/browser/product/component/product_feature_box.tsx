interface ProductFeatureBoxProps {
  title: string;
  value: string[];
}

export const ProductFeatureBox = ({ title, value }: ProductFeatureBoxProps) => (
  <div className="p-3 text-gray-400 font-medium">
    <div className="font-bold text-gray-200 text-base">{title}</div>
    {
      value.map((item) => <span >
        <span className="underline hover:no-underline mr-2 hover:text-gray-200 hover:font-bold">{item}</span>
         {value.findIndex((i) => i === item) === value.length - 1 ? '' : ', '}</span>)
    }
    
  </div>
);
