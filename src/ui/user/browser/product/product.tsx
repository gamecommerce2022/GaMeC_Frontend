import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../../model/product_model";
import { ProductPageTemplate } from "./product_template";

export interface IGamePageProps {}

export const sampleProduct = {
  price: 1899,
  title: "Detroit: Become Human",
  publisherId: "quantic-dream",
  id: "427",
  tags: ["Action", "Narration"],
  releaseDate: "2019-12-11T18:30:00.000Z",
  discount: 0,
  developer: "Quantic Dream",
  languages: "",
  feature: ["hyfsbhdk"],
  longDesc: [
    "FREEDOM HAS A PRICE",
    "Detroit 2038. Technology has evolved to a point where human like androids are everywhere. They speak, move and behave like human beings, but they are only machines serving humans.",
    "Play three distinct androids and see a world at the brink of chaos – perhaps our future - through their eyes. Your very decisions will dramatically alter how the game’s intense, branching narrative plays out. ",
    "You will face moral dilemmas and decide who lives or dies. With thousands of choices and dozens of possible endings, how will you affect the future of Detroit and humanity’s destiny?",
  ],
  description: "",
  items: [
    {
      id: 475,
      s: 0.3682642493,
    },
    {
      id: 472,
      s: 0.3164696904,
    },
    {
      id: 554,
      s: 0.0514440084,
    },
    {
      id: 445,
      s: 0.0448611782,
    },
    {
      id: 327,
      s: 0.0427193277,
    },
    {
      id: 137,
      s: 0.0409310946,
    },
    {
      id: 196,
      s: 0.0383911387,
    },
    {
      id: 6,
      s: 0.0352441151,
    },
    {
      s: 0.0190478935,
      id: 92,
    },
    {
      id: 3,
      s: 0,
    },
    {
      id: 239,
      s: 0,
    },
    {
      s: 0,
      id: 264,
    },
    {
      id: 340,
      s: 0,
    },
    {
      s: 0,
      id: 388,
    },
    {
      id: 2,
      s: 0,
    },
    {
      s: 0,
      id: 5,
    },
    {
      id: 0,
      s: 0,
    },
    {
      s: 0,
      id: 1,
    },
    {
      s: 0,
      id: 4,
    },
    {
      s: 0,
      id: 9,
    },
    {
      id: 7,
      s: 0,
    },
    {
      id: 8,
      s: 0,
    },
    {
      s: 0,
      id: 11,
    },
    {
      id: 14,
      s: 0,
    },
    {
      s: 0,
      id: 10,
    },
    {
      s: 0,
      id: 15,
    },
    {
      s: 0,
      id: 17,
    },
    {
      id: 16,
      s: 0,
    },
    {
      s: 0,
      id: 12,
    },
    {
      s: 0,
      id: 13,
    },
  ],
  platform: ["Windows"],
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F427.jpg?alt=media",
  subImageUrl:
    "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F427.jpg?alt=media",
  wishlisted: false,
  inCart: false,
  purchased: false,
};

export const sampleProducts = [
  {
    title: "Viscerafest",
    rating: 51,
    discount: 50,
    id: "030",
    publisherId: "1c-entertainment",
    platform: ["Windows"],
    tags: ["Action", "Shooter"],
    releaseDate: "2021-05-19T18:30:00.000Z",
    price: 489,
    objectID: "cadf2caf2bf23_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Viscerafest",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F030.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F030.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Just Die Already",
    rating: 63,
    discount: 0,
    id: "029",
    publisherId: "curve-digital",
    platform: ["Windows"],
    tags: ["Open World", "Comedy", "Adventure"],
    releaseDate: "2021-05-19T18:30:00.000Z",
    notes: "RECENTLY_UPDATED",
    price: 459,
    objectID: "c58c722a83217_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Just Die Already",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F029.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F029.jpg?alt=media",
    wishlisted: true,
    inCart: false,
    purchased: false,
  },
  {
    title: "Grindstone",
    rating: 78,
    discount: 0,
    id: "031",
    publisherId: "capybara-games",
    platform: ["Windows"],
    tags: ["Puzzle", "Indie"],
    releaseDate: "2021-05-19T18:30:00.000Z",
    price: 469,
    objectID: "98c82526c5bc9_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Grindstone",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F031.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F031.jpg?alt=media",
    wishlisted: true,
    inCart: false,
    purchased: false,
  },
  {
    title: "Suzerain",
    rating: 71,
    discount: 0,
    id: "034",
    publisherId: "fellow-traveller",
    platform: ["Windows", "Mac OS"],
    tags: ["Adventure", "Indie"],
    releaseDate: "2021-05-19T18:30:00.000Z",
    price: 349,
    objectID: "1b94cf47d4bb6d_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Suzerain",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F034.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F034.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Mayhem in Single Valley",
    rating: 42,
    discount: 0,
    id: "028",
    publisherId: "tinybuild",
    platform: ["Windows"],
    tags: ["Action", "Adventure", "Indie"],
    releaseDate: "2021-05-19T18:30:00.000Z",
    price: 349,
    objectID: "1547cd662906a8_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Mayhem in Single Valley",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F028.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F028.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Aerial_Knight's Never Yield",
    rating: 54,
    discount: 0,
    id: "035",
    publisherId: "headup",
    platform: ["Windows"],
    tags: ["Action", "Indie"],
    releaseDate: "2021-05-18T18:30:00.000Z",
    price: 459,
    objectID: "fadbf32bba746_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Aerial_Knight's Never Yield",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F035.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F035.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Days Gone",
    rating: 88,
    discount: 0,
    id: "037",
    publisherId: "sony-interactive-entertainment",
    platform: ["Windows"],
    tags: ["Action", "Survival", "Open World"],
    releaseDate: "2021-05-18T18:30:00.000Z",
    price: 2999,
    objectID: "1415697b682f73_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Days Gone",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F037.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F037.jpg?alt=media",
    wishlisted: false,
    inCart: true,
    purchased: false,
  },
  {
    title: "Siege Survival - Gloria Victis",
    rating: 68,
    discount: 0,
    id: "036",
    publisherId: "ravenscourt",
    platform: ["Windows"],
    tags: ["Simulation", "Survival"],
    releaseDate: "2021-05-17T18:30:00.000Z",
    price: 569,
    objectID: "1ce7611165d5a7_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Siege Survival - Gloria Victis",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F036.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F036.jpg?alt=media",
    wishlisted: false,
    inCart: true,
    purchased: false,
  },
  {
    title: "Realpolitiks 2",
    rating: 83,
    discount: 0,
    id: "042",
    publisherId: "1c-entertainment",
    platform: ["Windows", "Mac OS"],
    tags: ["Strategy", "Indie"],
    releaseDate: "2021-05-12T18:30:00.000Z",
    price: 899,
    objectID: "98fef6dae6627_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Realpolitiks 2",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F042.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F042.jpg?alt=media",
    wishlisted: false,
    inCart: true,
    purchased: false,
  },
  {
    title: "Hundred Days - Winemaking Simulator",
    rating: 83,
    discount: 0,
    id: "041",
    publisherId: "broken-arms-games",
    platform: ["Windows", "Mac OS"],
    tags: ["Simulation", "Strategy", "Indie"],
    releaseDate: "2021-05-12T18:30:00.000Z",
    price: 589,
    objectID: "1fb77c767239cb_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Hundred Days - Winemaking Simulator",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F041.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F041.jpg?alt=media",
    wishlisted: false,
    inCart: true,
    purchased: false,
  },
  {
    title: "The Lion's Song",
    rating: 64,
    discount: 0,
    id: "040",
    publisherId: "mi'pu'mi-games",
    platform: ["Windows"],
    tags: ["Narration", "Adventure"],
    releaseDate: "2021-05-12T18:30:00.000Z",
    price: 189,
    objectID: "1441de5c6e0042_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "The Lion's Song",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F040.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F040.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Sockventure",
    rating: 50,
    discount: 0,
    id: "044",
    publisherId: "versus-evil",
    platform: ["Windows"],
    tags: ["Action", "Action-Adventure", "Adventure", "Indie"],
    releaseDate: "2021-05-10T18:30:00.000Z",
    price: 589,
    objectID: "c0d19f9d22338_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Sockventure",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F044.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F044.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "The Hand of Merlin",
    rating: 86,
    discount: 0,
    id: "045",
    publisherId: "versus-evil",
    platform: ["Windows"],
    tags: ["RPG", "Rogue-Lite", "Strategy", "Indie"],
    releaseDate: "2021-05-10T18:30:00.000Z",
    price: 939,
    objectID: "4ba3e99c3c0c7_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "The Hand of Merlin",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F045.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F045.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Hood: Outlaws & Legends",
    rating: 55,
    discount: 0,
    id: "047",
    publisherId: "focus-home-interactive",
    platform: ["Windows"],
    tags: ["Action", "Stealth", "Adventure"],
    releaseDate: "2021-05-09T18:30:00.000Z",
    price: 1199,
    objectID: "1b0003bdb5dcc8_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Hood: Outlaws & Legends",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F047.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F047.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Skate City",
    rating: 56,
    discount: 10,
    id: "049",
    publisherId: "snowman",
    platform: ["Windows"],
    tags: ["Action", "Indie"],
    releaseDate: "2021-05-05T18:30:00.000Z",
    price: 349,
    objectID: "116a3e5702d83b_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Skate City",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F049.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F049.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "R-Type Final 2",
    rating: 66,
    discount: 0,
    id: "051",
    publisherId: "nis-america-inc.",
    platform: ["Windows"],
    tags: ["Shooter"],
    releaseDate: "2021-04-29T18:30:00.000Z",
    price: 899,
    objectID: "a17f668a3b38f_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "R-Type Final 2",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F051.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F051.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Lumberjack's Dynasty",
    rating: 68,
    discount: 0,
    id: "054",
    publisherId: "toplitz-productions",
    platform: ["Windows"],
    tags: ["Simulation", "RPG", "Adventure"],
    releaseDate: "2021-04-29T18:30:00.000Z",
    price: 589,
    objectID: "4ac8c781673fb_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Lumberjack's Dynasty",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F054.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F054.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "The Uncertain: Last Quiet Day",
    rating: 67,
    discount: 0,
    id: "053",
    publisherId: "meta-publishing",
    platform: ["Windows"],
    tags: ["Adventure", "First Person"],
    releaseDate: "2021-04-28T18:30:00.000Z",
    price: 349,
    objectID: "f5fd7067f41e8_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "The Uncertain: Last Quiet Day",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F053.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F053.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Legend of Keepers",
    rating: 62,
    discount: 0,
    id: "052",
    publisherId: "goblinz-publishing",
    platform: ["Windows", "Mac OS"],
    tags: ["RPG", "Strategy", "Indie"],
    releaseDate: "2021-04-28T18:30:00.000Z",
    price: 469,
    objectID: "def575290df38_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Legend of Keepers",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F052.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F052.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "The Signifier: Director's Cut",
    rating: 86,
    discount: 0,
    id: "062",
    publisherId: "raw-fury",
    platform: ["Windows", "Mac OS"],
    tags: ["Adventure", "Indie"],
    releaseDate: "2021-04-21T18:30:00.000Z",
    price: 469,
    objectID: "1fc54f45efb95_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "The Signifier: Director's Cut",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F062.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F062.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "MotoGP™21",
    rating: 60,
    discount: 0,
    id: "060",
    publisherId: "milestone-s.r.l.",
    platform: ["Windows"],
    tags: ["Simulation", "Racing"],
    releaseDate: "2021-04-21T18:30:00.000Z",
    price: 1099,
    objectID: "1d0cef65fe53a3_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "MotoGP™21",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F060.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F060.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Core",
    rating: 50,
    discount: 0,
    id: "073",
    publisherId: "manticore-games",
    platform: ["Windows"],
    tags: ["Action", "RPG", "Shooter"],
    releaseDate: "2021-04-15T18:30:00.000Z",
    notes: "RECENTLY_UPDATED",
    price: 0,
    objectID: "8e8bf0060d0d3_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Core",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F073.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F073.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Hitchhiker - A Mystery Game",
    rating: 69,
    discount: 75,
    id: "071",
    publisherId: "versus-evil",
    platform: ["Windows"],
    tags: ["Puzzle", "Narration"],
    releaseDate: "2021-04-14T18:30:00.000Z",
    price: 589,
    objectID: "bdb312686ef2a_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Hitchhiker - A Mystery Game",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F071.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F071.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Shadow Man Remastered",
    rating: 80,
    discount: 66,
    id: "070",
    publisherId: "nightdive-studios",
    platform: ["Windows"],
    tags: ["Action", "Horror", "Adventure"],
    releaseDate: "2021-04-14T18:30:00.000Z",
    price: 469,
    objectID: "a80564fb49844_dashboard_generated_id",
    _highlightResult: {
      title: {
        value: "Shadow Man Remastered",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F070.jpg?alt=media",
    subImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F070.jpg?alt=media",
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
] as unknown as Product[];

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const defaultProduct: Product = {
    _id: "",
    short_image: "",
    price_after: "",
    price_before: "",
    image_list: [],
    title: "",
    type: "",
    max_player: "",
    release_date: "",
    language: "",
    addition_info: "",
    description: [],
    addtion_images: [],
    videos: [],
    platform: "",
    rate: 0,
    comment: [],
    like: 0,
    dislike: 0,
  };
  const [product, setProduct]: [Product, (products: Product) => void] =
    useState(defaultProduct);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/product/get/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resoucre Not Found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>{loading ? null : <ProductPageTemplate product={product} />}</div>
  );
};
