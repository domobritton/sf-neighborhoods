export const restConfig = {
  type: 'FeatureCollection',
  hayesValley: {
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.425000, 37.776430],
        },
        properties: {
          id: 0,
          name: `Patxi's Pizza`,
          phoneFormatted: '(202) 234-7336',
          phone: '2022347336',
          address: '511 Hayes St',
          city: 'San Francisco',
        },
      },
    ],
  },
  civicCenter: {
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.416520, 37.780860],
        },
        properties: {
          id: 0,
          name: `Soluna`,
          phoneFormatted: '415.621.2200',
          phone: '4156212200',
          address: '272 McAllister St',
          city: 'San Francisco',
        },
      }
    ]
  }
};
