import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import DiscountItem from "./discount_item";

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

export interface TabProps {
  key: string;
  label: string;
  value: BannerAdsProp;
}

const bannerAds: BannerAdsProp = {
  id: 1,
  image: "https://source.unsplash.com/random/1920x1080/?ads",
  title: "Unique Features Of leatest & Trending Poducts",
  productName: "Thần Trùng",
  productPrice: "3.00",
  descriptions: [
    "All frames constructed with hardwood solids and laminates",
    "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
    "Arms, backs and seats are structurally reinforced",
  ],
  buttonTitle: "Add to Cart",
  link: "/cart",
};
const tabsData: TabProps[] = [
  { key: "gamepc", label: "Game PC", value: bannerAds },
  { key: "gamenin", label: "Game Nintendo", value: bannerAds },
  { key: "gameps5", label: "Game PS5", value: bannerAds },
];
const TabsDiscountItem = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?black')`,
      }}
      className="rounded-md"
    >
      <Tabs value={tabsData[0].key}>
        <TabsHeader className="bg-white w-1/2 mx-auto mt-2">
          {tabsData.map(({ label, key }) => (
            <Tab key={key} value={key} className="text-gray-800 font-medium">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {tabsData.map(({ key, value }) => (
            <TabPanel key={key} value={key} className="w-full">
              <DiscountItem
                key={value.id}
                id={value.id}
                image={value.image}
                title={value.title}
                productName={value.productName}
                productPrice={value.productPrice}
                descriptions={value.descriptions}
                buttonTitle={value.buttonTitle}
                link={value.link}
              />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabsDiscountItem;
