var config = {
  style: `mapbox://styles/mapbox/dark-v10`,
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'dark',
  alignment: 'left',
  title: 'San Francisco Neighborhoods',
  subtitle: `A virtual tour of San Francisco's wonderfully unique neighborhoods`,
  byline: 'By a Digital Storyteller',
  footer: 'Source: source citations, etc.',
  chapters: [
    {
      id: 'sanFrancisco',
      title: 'San Francisco',
      image: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: {
        center: [-122.4194, 37.7749],
        zoom: 13,
        pitch: 45,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'civicCenter',
      title: 'Civic Center',
      image: '',
      description: `The Civic Center in San Francisco, California, is an area of a few blocks north of the intersection of Market Street and Van Ness Avenue that contains many of the city's largest government and cultural institutions. It has two large plazas (Civic Center Plaza and United Nations Plaza) and a number of buildings in classical architectural style. The Bill Graham Civic Auditorium (formerly the Exposition Auditorium), the United Nations Charter was signed in the War Memorial Veterans Building's Herbst Theatre in 1945, leading to the creation of the United Nations. It is also where the 1951 Treaty of San Francisco (the peace treaty that officially ended the Pacific War with the Empire of Japan, which had surrendered in 1945) was signed. The San Francisco Civic Center was designated a National Historic Landmark in 1987 and listed in the National Register of Historic Places on October 10, 1978.`,
      linkText: `Wikipedia`,
      link: `https://en.wikipedia.org/wiki/Civic_Center,_San_Francisco`,
      location: {
        center: [-122.4156, 37.78169],
        zoom: 16,
        pitch: 43.5,
        bearing: -17.6,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'hayesValley',
      title: 'Hayes Valley',
      image: '',
      description: `Twenty years ago, the thought of finding one of San Francisco's ultra-chic corridors in Hayes Valley would have been considered absurd. Like New York City's Times Square of old, the area, bordered by the Van Ness performing-arts district and the Western Addition around Laguna Street, was a seedy reminder for opera and symphony patrons of the city's homeless and drug problems. But over the past decades, Hayes Valley has developed into a haven for haute couture.`,
      linkText: `SF Gate`,
      link: `https://www.sfgate.com/neighborhoods/sf/hayesvalley/`,
      location: {
        center: [-122.4245, 37.7759],
        zoom: 16,
        pitch: 48.5,
        bearing: -16.6,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'lowerHaight',
      title: 'Lower Haight',
      image: '',
      description: `A mixture of restaurants, small nightclubs, cafes, drinking establishments, residences, galleries, and hair salons characterizes the Lower Haight. Neighborhood institutions include John Muir Elementary School, San Francisco Zen Center, The United States Mint, Duboce and Koshland parks, and the Haight Street Art Center.`,
      linkText: `Wikipedia`,
      link: `https://en.wikipedia.org/wiki/Lower_Haight,_San_Francisco`,
      location: {
        center: [-122.4312, 37.7721],
        zoom: 16,
        pitch: 48.5,
        bearing: -16.6,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'duboceTriangle',
      title: 'Duboce Triangle',
      image: '',
      description: `The Duboce Triangle neighborhood is located near the center of San Francisco, California just below the hilly slopes of Buena Vista Park between the neighborhoods of the Castro/Eureka Valley, the Mission District, and the Lower Haight.`,
      linkText: `Wikipedia`,
      link: `https://en.wikipedia.org/wiki/Duboce_Triangle,_San_Francisco`,
      location: {
        center: [-122.4319, 37.7677],
        zoom: 16,
        pitch: 48.5,
        bearing: -16.6,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'haightAshbury',
      title: 'Haight Ashbury',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Haight-Ashbury_SF.png/440px-Haight-Ashbury_SF.png',
      description: `Birthplace of the 1960s counterculture movement, Haight-Ashbury draws a lively, diverse crowd looking to soak up the historic hippie vibe. Upper Haight Street is a hodgepodge of vintage clothing boutiques, record shops, bookstores, dive bars and casual, eclectic restaurants. Bordering Golden Gate Park, the neighborhood features many colorful, well-preserved Victorian homes, including the storied Grateful Dead House.`,
      linkText: `Google`,
      link: `https://www.google.com/search?sa=X&rlz=1C5CHFA_enUS865US865&sxsrf=ALeKk02smAnfJdwgYg9C3bJTN5WVav4k8g:1595312743459&q=haight-ashbury+coordinates&stick=H4sIAAAAAAAAAONgFuLUz9U3MC2INy1QAjONjCssLLT4nPNzc_PzgjNTUssTK4sXMSpmJ1vp5-QnJ5Zk5ufBGVbJ-flFKZl5iSWpxYtYpTISM9MzSnQTizOSSosqFZAkJ7AxAgBJ9AXbbAAAAA&ved=2ahUKEwiolISL293qAhWUqp4KHVAYDsAQ-BYwKnoECB8QMQ&biw=1680&bih=971`,
      location: {
        center: [-122.4486, 37.7705],
        zoom: 16,
        pitch: 48.5,
        bearing: -16.6,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'missionDistrict',
      title: 'Mission District',
      image: '',
      description: `Named for the 1776-built Mission Dolores, the Mission District is an exuberant, evolving neighborhood with Latino roots and a hipster vibe. Old-school taquerias and eclectic live-music clubs mix with chef-driven eateries and craft cocktail lounges. There are also tattoo parlors, gourmet ice cream shops and Dolores Park, a popular weekend hangout with skyline views. Vibrant murals line streets such as Clarion Alley.`,
      linkText: `Wikipedia`,
      link: `https://en.wikipedia.org/wiki/Lower_Haight,_San_Francisco`,
      location: {
        center: [-122.4148, 37.7599],
        zoom: 16,
        pitch: 40.5,
        bearing: -17.6,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'theCastro',
      title: 'The Castro',
      image: '',
      description: `The Castro District, in Eureka Valley, is synonymous with gay culture. Revelers often spill onto the sidewalks at numerous bars, like Twin Peaks Tavern, whose floor-to-ceiling windows were revolutionary when it opened in 1972. The lavish Castro Theatre and the GLBT Historic Museum are also found here, as are homey restaurants and adult shops. On Market Street, 19th-century F-line streetcars head to Fisherman’s Wharf.`,
      linkText: `Wikipedia`,
      link: `https://en.wikipedia.org/wiki/Lower_Haight,_San_Francisco`,
      location: {
        center: [-122.4350, 37.7609],
        zoom: 16,
        pitch: 35,
        bearing: 10.6,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'bernalHeights',
      title: 'Bernal Heights',
      image: '',
      description: `Bernal Heights is a residential neighborhood in southeastern San Francisco, California. The prominent Bernal Heights hill overlooks the San Francisco skyline and features a microwave transmission tower. The nearby Sutro Tower can be seen from the Bernal Heights neighborhood.`,
      linkText: `Wikipedia`,
      link: `https://en.wikipedia.org/wiki/Bernal_Heights,_San_Francisco`,
      location: {
        center: [-122.4152, 37.7389],
        zoom: 16,
        pitch: 20,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'dogpatch',
      title: 'Dogpatch',
      image: '',
      description: `Dogpatch is a vibrant, up-and-coming area nestled between Potrero Hill and the bay. Formerly a shipbuilding hub dating back to the 1800s, this dockside area retains an industrial vibe with large warehouses, many of which have been updated into residential lofts, art galleries and indie shops. Third Street offers a mix of trendy restaurants, brunch cafes, brew pubs and wine bars, plus the Museum of Craft and Design.`,
      linkText: ``,
      link: ``,
      location: {
        center: [-122.3895, 37.7591],
        zoom: 16,
        pitch: 40.5,
        bearing: -17.6,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'potreroHill',
      title: 'Potrero Hill',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/San_Francisco_Potrero_Hill_Texas_and_18th.jpg/440px-San_Francisco_Potrero_Hill_Texas_and_18th.jpg',
      description: `Family-friendly Potrero Hill is an often-sunny, hilly area with bay and skyline views and a mix of condos and classic Victorians, plus parks with sports facilities. 18th Street has quaint eateries and shops. Nearby are gritty music spots and the historic Anchor Brewing Company, which offers tours. On the neighborhood's eastern edge, industrial-cool Dogpatch, with hip bars and eateries, runs along the waterfront.`,
      linkText: `Wikipedia`,
      link: `https://en.wikipedia.org/wiki/Potrero_Hill`,
      location: {
        center: [-122.4148, 37.7599],
        zoom: 16,
        pitch: 40.5,
        bearing: -17.6,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'soma',
      title: 'SoMa (South of Market)',
      image: '',
      description: `SoMa, or South of Market, is a vast, warehouse-filled district. It encompasses Mission Bay and South Beach, where the Giants play baseball at waterfront AT&T Park. Surrounding Yerba Buena Gardens is an arts center, sleek convention complex Moscone Center and several museums, including the acclaimed San Francisco Museum of Modern Art (SFMOMA). The area is dotted with upscale dining options and high-energy nightclubs.`,
      linkText: ``,
      link: ``,
      location: {
        center: [-122.4056, 37.7785],
        zoom: 16,
        pitch: 50,
        bearing: 10,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'tenderloin',
      title: 'Tenderloin',
      image: '',
      description: `The famously gritty Tenderloin has underground art spaces, classic concert venues such as the Great American Music Hall and historic theaters staging Broadway and indie shows. Its funky, colorful streets feature a mix of upscale, trendy and casual restaurants. Nightlife ranges from dark dives slinging beer and shots to speakeasy-style bars mixing craft cocktails. Little Saigon is known for its Vietnamese eateries.`,
      linkText: ``,
      link: ``,
      location: {
        center: [-122.4145, 37.7847],
        zoom: 16,
        pitch: 40.5,
        bearing: -17,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'unionSquare',
      title: 'Union Square',
      image: '',
      description: `Union Square is a 2.6-acre public plaza bordered by Geary, Powell, Post and Stockton Streets in downtown San Francisco, California. "Union Square" also refers to the central shopping, hotel, and theater district that surrounds the plaza for several blocks.`,
      linkText: `Wikipedia`,
      link: `https://en.wikipedia.org/wiki/Union_Square,_San_Francisco`,
      location: {
        center: [-122.4075, 37.7879],
        zoom: 16,
        pitch: 40.5,
        bearing: -17,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};

export default config;
