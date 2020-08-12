<template>
  <div class="row">
    <div class="col-sm-12 align-items-center text-center">
      <div class="map align-items-center text-center">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import { Icon } from "leaflet";
export default {
  mounted() {
    delete Icon.Default.prototype._getIconUrl;
    Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
    var map = L.map("map").setView([11.5532, 43.1503], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(map);

    var marker = L.marker([11.553, 43.1501]);
    marker.addTo(map).bindPopup("Autorité de l'Aviation Civile de Djibouti");
  },
};
</script>

<style lang="css" scoped>
.map-container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
}
@media (max-width: 499px) {
  .map {
    width: 280px;
    margin: 0 auto;
    height: 400px;
    border: solid black;
  }
}
@media (min-width: 770px) {
  .map {
    width: 700px;
    margin: 0 auto;
    height: 500px;
    border: solid black;
  }
}
@media (min-width: 500px) and (max-width: 769px) {
  .map {
    width: 400px;
    margin: 0 auto;
    height: 500px;
    border: solid black;
  }
}

.map-frame {
  border: 2px solid black;
  height: 100%;
}

#map {
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
}
</style>
