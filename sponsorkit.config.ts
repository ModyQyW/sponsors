import {
  defineConfig,
  loadConfig,
  tierPresets,
  resolveProviders,
  guessProviders,
  SponsorkitConfig,
  Provider,
} from "sponsorkit";
import customSponsors from "./custom-sponsors";
import { consola } from "consola";

const config: SponsorkitConfig = {
  github: {
    login: "ModyQyW",
    type: "user",
  },
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: "Backers",
      monthlyDollars: 0,
      preset: tierPresets.base,
    },
    {
      title: "Sponsors",
      monthlyDollars: 19.69,
      preset: tierPresets.medium,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 39.38,
      preset: tierPresets.large,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 78.77,
      preset: tierPresets.xl,
    },
    {
      title: "Special Sponsors",
      monthlyDollars: 157.54,
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
  fallbackAvatar: "https://picsum.photos/256/256",
};

let providers: Provider[];

export default defineConfig({
  ...config,
  onSponsorsFetched: async (sponsors, provider) => {
    if (!providers) {
      const loadedConfig = await loadConfig();
      providers = resolveProviders(
        loadedConfig.providers || guessProviders(loadedConfig)
      );
    }
    // last one
    if (provider === providers.at(-1)?.name) {
      // add more sponsors like wechat, alipay, etc.
      consola.info(
        `Pushed ${customSponsors.length} custom sponsors into ${provider} provider.`
      );
      return [...sponsors, ...customSponsors];
    }
  },
});
