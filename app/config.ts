import { Config } from "./config.types";

const config: Config = {
  eventName: "Gaelcon 36 (2024)",
  locale: "en",
  description: `
    An interactive map of the Gaelcon map.
  `,
  attributions: [
    "Map designed by [Jog Brogzin](https://www.jogbrogzin.com/)",
    "Setup assistance by James Shields",
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
    src: "/Gaelcon_36_map_4K.webp",
    rooms: [
      {
        id: "ticketdesk",
        label: "Gaelcon Ticket Desk",
        aliases: ["Tickets", "Information"],
        description: `
          Get your tickets here
        `,
        area: [
          [1631, 2152],
          [1760, 2073],
          [1917, 2159],
          [1786, 2239],
        ],
      },
      {
        id: "gaelconbar",
        label: "Gaelcon Bar",
        aliases: ["Bar", "Pub"],
        description: `
          Grab some drinks
        `,
        area: [
          [1772, 2392],
          [2130, 2179],
          [2558, 2405],
          [2203, 2627],
        ],
      },
      {
        id: "tradehall",
        label: "Redwood Suite",
        aliases: ["Tradehall", "Open Gaming", "Seminars", "Demos"],
        description: `
          Redwood Suite A/B - Tradehall and Demos, Redwood C - Open Gaming and Seminars
        `,
        area: [
          [1964, 2051],
          [2368, 1817],
          [2955, 2144],
          [2556, 2384],
        ],
      },
      {
        id: "wargames",
        label: "Fahrenheit Suite",
        aliases: ["Wargames"],
        description: `
          Wargaming
        `,
        area: [
          [1062, 1470],
          [1200, 1386],
          [1136, 1345],
          [1246, 1281],
          [1324, 1326],
          [1361, 1301],
          [1639, 1464],
          [1338, 1626],
        ],
      },
      {
        id: "larp",
        label: "LARPs",
        aliases: ["Rooms 9&10"],
        description: `
          Live Action Roleplaying Games
        `,
        area: [
          [1181, 1225],
          [1452, 1064],
          [1595, 1143],
          [1323, 1306],
        ],
      },
      {
        id: "ops",
        label: "Ops",
        aliases: ["Committee Room", "Operations", "Gaelcon Trolls"],
        description: `
          Here be caffeinated trolls
        `,
        area: [
          [1615, 1057],
          [1728, 990],
          [1861, 1065],
          [1750, 1131],
        ],
      },
      {
        id: "boardgames1",
        label: "Boardgames: Room 15/16",
        aliases: ["Boardgames: Room 15/16"],
        description: `
          More Boardgames in Room 18 too!
        `,
        area: [
          [1981, 1114],
          [2206, 984],
          [2470, 1130],
          [2249, 1261],
        ],
      },
      {
        id: "boardgames2",
        label: "Boardgames: Room 18",
        aliases: ["Boardgames: Room 18"],
        description: `
          More Boardgames in Room 15 & 16 too!
        `,
        area: [
          [3298, 895],
          [3524, 763],
          [3653, 834],
          [3432, 965],
        ],
      },
      {
        id: "fingal",
        label: "Fingal Community Gaming",
        aliases: ["Fingal Libraries"],
        description: `
          Games run by Fingal Community Gaming
        `,
        area: [
          [2864, 1017],
          [3031, 919],
          [3135, 980],
          [2969, 1079],
        ],
      },
      {
        id: "quietplace",
        label: "A Quiet Place",
        aliases: ["Sensory Room", "Quiet Room", "Snug"],
        description: `
          Somewhere quiet to recharge from con fatigue
        `,
        area: [
          [3068, 863],
          [3193, 792],
          [3274, 848],
          [3151, 920],
        ],
      },
      {
        id: "rpgs",
        label: "RPGs: Rooms 20-24",
        aliases: ["Roleplaying Games"],
        description: `
          Adventure Time!
        `,
        area: [
          [2810, 709],
          [3124, 533],
          [3510, 755],
          [3372, 837],
          [3239, 751],
          [3049, 862],
        ],
      },
    ],
  },
};

export default config;
