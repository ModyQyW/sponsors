import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "ModyQyW",
    type: "user",
  },
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: "Backers",
      monthlyDollars: 0,
      preset: presets.base,
    },
    {
      title: "Sponsors",
      monthlyDollars: 4.6,
      preset: presets.medium,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 9.19,
      preset: presets.large,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 18.39,
      preset: presets.xl,
    },
    {
      title: "Special Sponsors",
      monthlyDollars: 36.77,
      preset: {
        avatar: {
          size: 105,
        },
        boxWidth: 145,
        boxHeight: 165,
        container: {
          sidePadding: 20,
        },
        name: {
          maxLength: 30,
        },
      },
    },
  ],
});
