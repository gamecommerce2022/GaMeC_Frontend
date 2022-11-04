import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface GenreProps {
  id: string;
  name: string;
  img: string;
}

export const GenreItem: React.FC<GenreProps> = (props: GenreProps) => {
  return (
    <div
      className="w-full h-max p-4 rounded flex flex-col bg-[#1e1e1e] hover:bg-[#363636]"
      onClick={() => {
        console.log(props.name);
      }}
    >
      <img
        className="w-1/2 h-1/2 rounded self-center"
        src={props.img}
        alt={props.name}
      />
      <div className="text-white mt-2 text-center text-xl font-bold">
        {props.name}
      </div>
    </div>
  );
};
