import { Sponsorship } from "sponsorkit";

const convertCNYToUSD = (cny: number) => cny / 6.5;

const sponsors: Sponsorship[] = [
  {
    sponsor: {
      type: "User",
      login: "wangzecn",
      name: "王泽",
      avatarUrl: "https://avatars.githubusercontent.com/u/35653404",
      linkUrl: "https://github.com/wangzecn",
    },
    monthlyDollars: convertCNYToUSD(8.12),
    privacyLevel: "PUBLIC",
    tierName: "Wechat",
    createdAt: "2023-01-06T17:22:01+08:00",
    isOneTime: true,
    provider: "Wechat",
  },
];

export default sponsors;
