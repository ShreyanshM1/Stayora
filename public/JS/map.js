const map = new mapboxgl.Map({
  accessToken: mapToken,
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) //listing.geometry.coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
    )
  )
  .addTo(map);

// map.on("load", () => {
//   // Load an image from an external URL.
//   map.loadImage(
//     "/images/map_house.png",
//     (error, image) => {
//       if (error) throw error;

//       // Add the image to the map style.
//       map.addImage("map_house", image);

//       // Add a data source containing one point feature.
//       map.addSource("map_house", {
//         type: "geojson",
//         data: {
//           type: "FeatureCollection",
//           features: [
//             {
//               type: "Feature",
//               geometry: {
//                 type: "Point",
//                 coordinates: listing.geometry.coordinates,
//               },
//             },
//           ],
//         },
//       });

//       // Add a layer to use the image to represent the data.
//       map.addLayer({
//         id: "map_house",
//         type: "symbol",
//         source: "map_house", // reference the data source
//         layout: {
//           "icon-image": "map_house", // reference the image
//           "icon-size": 0.05,
//         },
//       });
//     }
//   );
// });
