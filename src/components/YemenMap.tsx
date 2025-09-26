import Map from "@vis.gl/react-maplibre";
import React from "react";
// import React from "react";
import { ComposableMap, Geographies,  ZoomableGroup, Geography } from "react-simple-maps";

// GeoJSON for Yemen (or world if you want full map)
const geoUrl = "https://geo2day.com/asia/yemen.geojson";

function YemenMap() {
  return (
    <ComposableMap projection="geoMercator">
      <ZoomableGroup center={[0, 0]} zoom={9}>
        <Geographies geography="./geojson.json">
          {({ geographies }) =>
            geographies.map((geo, i) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
              
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}

// const YemenMap = () => {
//   return (
//     <div className="relative px-5 md:px-0 w-[75vw] mx-auto">
//       <Map
//         initialViewState={{
//           latitude: 15.5527,
//           longitude: 48.5164,
//           zoom:
//             typeof window !== "undefined" && window.innerWidth < 768 ? 7.5 : 9,
//         }}
//         interactiveLayerIds={["sf-neighborhoods-fill"]}
//         style={{ width: "100%", height: 400, borderRadius: 30 }}
//         // mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
//         mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
//         //   onClick={onClick}
//       >
//         {/* <MarkerList places={places} setChosenPlace={setChosenPlace} /> */}
//       </Map>
//     </div>
//   );
// };

export default YemenMap;
