const config = {
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  style: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
  crimesURL: process.env.NEXT_PUBLIC_CRIMES_URL,
  crimesSource: process.env.NEXT_PUBLIC_CRIMES_SOURCES,
  interestURL: process.env.NEXT_PUBLIC_INTEREST_URL,
  interestSource: process.env.NEXT_PUBLIC_INTEREST_SOURCES,
  trialsURL: process.env.NEXT_PUBLIC_TRIALS_URL,
  trialsSource: process.env.NEXT_PUBLIC_TRIALS_SOURCES,
};
export default config;
