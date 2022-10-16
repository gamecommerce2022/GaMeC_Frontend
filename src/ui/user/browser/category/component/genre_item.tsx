import {
 Card,
 CardHeader,
 CardBody,
 Typography,
} from "@material-tailwind/react";


interface GenreProps {
 id: string,
 name: string,
 img: string,
}

export const GenreItem: React.FC<GenreProps> = (props: GenreProps) => {
 return (<Card key={props.id} className=" bg-gray-900 hover:bg-gray-700">
  <CardHeader floated={false} className="relative h-64">
   <img
    src={props.img}
    alt="img-blur-shadow"
    className="h-full w-full"
   />
  </CardHeader>
  <CardBody className="text-center text-white">
   <Typography variant="h5" className="mb-2 font-medium">
    {props.name}
   </Typography>
  </CardBody>
 </Card>)
}