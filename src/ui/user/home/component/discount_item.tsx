import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';

export interface BannerAdsProp {
  id: number;
  image: string;
  title: string;
  productName: string;
  productPrice: string;
  descriptions: string[];
  buttonTitle: string;
  link: string;
}

const DiscountItem: React.FC<BannerAdsProp> = (props) => {
  const bannerAds: BannerAdsProp = props;
  return (
    <div key={bannerAds.id} className="relative h-full w-full">
      <div className="pt-24 pb-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-indigo-700">{bannerAds.title}</h1>
            <ul className="flex flex-col py-4 px-2 text-gray-100">
              {bannerAds.descriptions.map((description: string) => (
                <li>
                  <Typography variant="paragraph">
                    {' '}
                    <CheckIcon className="w-6 h-6 inline" /> {description}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-2">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <img
                      className="h-auto w-auto rounded-xl"
                      src={bannerAds.image}
                      alt={bannerAds.title}
                    />
                  </div>
                </div>
              </div>

              <Button
                variant="gradient"
                color="amber"
                size="sm"
                className="hidden lg:inline-block mx-2 rounded-md py-3 px-8 text-center font-bold text-xl text-gray-200"
              >
                <Link to={bannerAds.link}>{bannerAds.buttonTitle}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
