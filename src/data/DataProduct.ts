import { getDates } from "../utils/date_utils";

export const reviews = [
  {
    reviewScore: 13,
    userName: "Jon Dough",
    date: getDates().randomDate,
    review:
      "Most challenging game I have ever played. Took me 3 hours to get it to run.",
    approvalRate: 100,
  },
  {
    reviewScore: 1,
    userName: "Jon Bo",
    date: getDates().randomDate,
    review:
      "I give this game first rank #1. Best game ever.🏆 🏆 🏆 😃 😃 😃 👍 ",
    approvalRate: 0,
  },
  {
    reviewScore: 97,
    userName: "Jane Thor",
    date: getDates().randomDate,
    review:
      "Really enjoyed it to the core. I am typing this review from an internet cafe inside the game. I am a digital being now.",
    approvalRate: 25,
  },
  {
    reviewScore: 50,
    userName: "Mediocre Madeline",
    date: getDates().randomDate,
    review: "Meh.",
    approvalRate: 65,
  },
];
