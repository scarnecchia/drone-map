@name: '[name_en]';

// Points of interest
#poi_label[maki=''] { opacity:1; } // hack for mapnik#1952
#poi_label[maki='airport'][scalerank<=2],
#poi_label[maki='airfield'][scalerank<=2] { 
    text-name: @name;
    text-face-name: "Open Sans Bold";
    text-size: 9;
    text-fill: #333;
    text-halo-fill: fadeout(#fff, 30%);
    text-halo-radius: 1;
    text-halo-rasterizer: fast;
    text-min-distance: 50;
    text-wrap-width: 60;
    text-line-spacing:	-2;
    text-allow-overlap: false;
    // POI labels with an icon need to be offset:
    [maki!=null] { text-dy: 8; }
    [zoom>=13] {
      text-size: 10;
      text-line-spacing: -2;
      }
    [zoom=15] {
      text-size: 12;
      text-line-spacing: -2;
      text-fill: #444;
      }
    [zoom>=16] {
      text-size: 14;
      text-line-spacing: -2;
      }
    [zoom>=17] {
      text-size: 16;
      text-line-spacing: -2;
  }
}