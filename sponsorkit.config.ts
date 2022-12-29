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
      monthlyDollars: 4.92,
      preset: presets.medium,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 9.85,
      preset: presets.large,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 19.69,
      preset: presets.xl,
    },
    {
      title: "Special Sponsors",
      monthlyDollars: 19.7,
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
