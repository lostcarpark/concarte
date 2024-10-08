import { Config } from "./config.types";

const config: Config = {
  eventName: "Octocon",
  locale: "en",
  description: `
    An interactive map of the Octocon venue.

    Octocon 2024 is taking place in the Gibson Hotel on 5th and 6th October.

    More details at [Octocon 2024](http://2024.octocon.com)
  `,
  attributions: [
    "Map designed by [Jog Brogzin](https://www.jogbrogzin.com/)",
    // Used in the favicon
    "Direction signs icon by [Delapouite](https://delapouite.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)",
  ],
  theme: {
    background: "white",
    "highlight-background": "rgb(241 245 249)",
    border: "rgb(226 232 240)",
    "primary-text": "rgb(43, 43, 43)",
    "secondary-text": "rgb(100 116 139)",
    accent: "rgb(8,114,50)",
    disabled: "#cbd5e1",
  },
  map: {
    src: "/Octocon_2024_Map_4K.jpg",
    rooms: [
      {
        id: "entrance",
        label: "Entrance",
        aliases: ["Entrance"],
        description: `
          # Main hotel entrance
        `,
        area: [
          [3186, 1428],
          [3273, 1461],
          [3248, 1518],
          [3165, 1473],
        ],
      },
      {
        id: "bar",
        label: "Main hotel bar",
        aliases: ["Food & Drink"],
        description: `
          A place to sit and chat with friends, or to grab a bite to eat. There
          will be a selection of food and drink available, including vegan and
          gluten free options.
        `,
        area: [
          [2598, 1755],
          [2871, 1899],
          [2592, 2523],
          [2205, 2355],
        ],
      },
      {
        id: "concourse",
        label: "Concourse",
        aliases: ["Concourse"],
        description: `
          Open space for social interaction and fan tables.
        `,
        area: [
          [1749, 1641],
          [2235, 1194],
          [2604, 1365],
          [2765, 1176],
          [3201, 1371],
          [2976, 1752],
          [2262, 1326],
          [1854, 1752],
        ],
      },
      {
        id: "regdesk",
        label: "Registration Desk",
        aliases: ["Reg desk"],
        description: `
          Collect your badge here.
        `,
        area: [
          [2352, 1698],
          [2463, 1584],
          [2511, 1617],
          [2409, 1710],
        ],
      },
      {
        id: "chatarea",
        label: "Chat Area",
        aliases: ["Fan Chats"],
        description: `
          Table next to restaurant for fan chats and author meetups.
        `,
        area: [
          [2643, 1575],
          [2763, 1620],
          [2676, 1737],
          [2595, 1698],
        ],
      },
      {
        id: "toilets",
        label: "Toilets",
        aliases: ["Toilets"],
        description: `
          Toilets including accessible toilet.
        `,
        area: [
          [1308, 1734],
          [1341, 1692],
          [1410, 1692],
          [1455, 1677],
          [1482, 1710],
          [1572, 1848],
          [1623, 1806],
          [1653, 1833],
          [1677, 1932],
          [1734, 1995],
          [1806, 1974],
          [1851, 2001],
          [1848, 2061],
          [1833, 2112],
          [1794, 2169],
          [1725, 2181],
          [1638, 2100],
          [1665, 2043],
          [1599, 1986],
          [1497, 1977],
          [1464, 1923],
          [1497, 1857],
          [1464, 1812],
          [1338, 1794],
        ],
      },
      {
        id: "stairs-l1",
        label: "Stairs (level 1)",
        area: [
          [1905, 1119],
          [1944, 1092],
          [2061, 1137],
          [2013, 1185],
        ],
      },
      {
        id: "lifts",
        label: "Lifts",
        description: `
          Lifts to level 2 and bedrooms.
        `,
        area: [
          [1923, 1626],
          [1983, 1596],
          [2235, 1635],
          [2316, 1686],
          [2316, 1758],
          [2193, 1893],
          [2130, 1863],
          [1935, 1686],
        ],
      },
      {
        id: "mainprog",
        label: "Main Programme (Stratocaster)",
        aliases: ["Programme", "Stratocaster"],
        description: `
          [Programme schedule](https://prog.octocon.com/)
        `,
        area: [
          [1113, 804],
          [1620, 560],
          [1960, 700],
          [1437, 1026],
        ],
      },
      {
        id: "committee",
        label: "Committee Room (Broadcaster)",
        aliases: ["Committee", "Broadcaster"],
        description: `
          Office space for committee use.
        `,
        area: [
          [1935, 813],
          [2034, 741],
          [2292, 840],
          [2193, 930],
        ],
      },
      {
        id: "panelroom2",
        label: "Panel Room 2 (Alhambra)",
        aliases: ["Panel room 2", "Alhambra"],
        description: `
          [Programme schedule](https://prog.octocon.com)
        `,
        area: [
          [2157, 1017],
          [2340, 864],
          [2745, 1026],
          [2586, 1227],
        ],
      },
      {
        id: "tradehall",
        label: "Trade Hall",
        description: `
          A selection of dealers and fan tables will be available for you to
          browse. Please note that some dealers may only accept cash.

          # Opening times

          Saturday: 10am-6pm

          Sunday: 10am-6pm
        `,
        area: [
          [720, 1000],
          [1050, 840],
          [1410, 1050],
          [1030, 1280],
        ],
      },
      {
        id: "stairs-l2",
        label: "Stairs (level 2)",
        area: [
          [1938, 528],
          [1986, 489],
          [2118, 534],
          [2094, 561],
        ],
      },
      {
        id: "quiet",
        label: "Quiet room (Rickenbacker)",
        aliases: ["Quiet", "Rickenbacker"],
        description: `
          A place where you may do a jigsaw or read a book/electronic item, but
          may not make phone calls.
        `,
        area: [
          [1938, 309],
          [2106, 237],
          [2250, 276],
          [2082, 366],
        ],
      },
      {
        id: "workshop",
        label: "Workshops (Cordoba)",
        aliases: ["Workshops", "Cordoba"],
        description: `
          Workshops and interactive activities.
        `,
        area: [
          [2136, 378],
          [2301, 291],
          [2754, 402],
          [2604, 510],
        ],
      },
    ],
  },
};

export default config;
