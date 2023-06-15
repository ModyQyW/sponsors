import { Sponsorship } from "sponsorkit";

const convertCNYToUSD = (cny: number) => cny / 6.5;

const sponsors: Sponsorship[] = [
  {
    sponsor: {
      type: "User",
      login: "11ze",
      name: "泽",
      avatarUrl: "https://avatars.githubusercontent.com/u/35653404",
      linkUrl: "https://github.com/11ze",
    },
    monthlyDollars: convertCNYToUSD(28.12),
    privacyLevel: "PUBLIC",
    tierName: "Wechat",
    createdAt: "2023-01-06T17:22:01+08:00",
    isOneTime: true,
    provider: "Wechat",
  },
  {
    sponsor: {
      type: "User",
      login: "zguolee",
      name: "Neil Lee",
      avatarUrl: "https://avatars.githubusercontent.com/u/40738594",
      linkUrl: "https://github.com/zguolee",
    },
    monthlyDollars: convertCNYToUSD(52),
    privacyLevel: "PUBLIC",
    tierName: "Wechat",
    createdAt: "2023-04-14T15:55:14+08:00",
    isOneTime: true,
    provider: "Wechat",
  }
];

export default sponsors;
