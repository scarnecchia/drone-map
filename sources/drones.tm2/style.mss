Map {
}

#usAirports_5mile {
  line-width: 0;
  line-color: #808080;
  line-opacity: 0.5;
  polygon-fill: #808080;
    polygon-opacity: 0.6;
  [zoom>=10] {
    text-size: 10;
  text-wrap-width: 100;
  text-wrap-before: true;
  text-fill: #555555;
  text-halo-radius: 1px;
  text-face-name: 'Open Sans Bold';
  text-name: '[name]';
  text-placement: 'interior';
  text-avoid-edges: true;
  text-allow-overlap: true;
  text-placement-type: 'simple';
  text-clip: false;
    }
}

#us_national_park {
  line-width: 0;
  line-color: #663399;
  line-opacity: 0.5;
  polygon-fill: #663399;
    polygon-opacity: 0.5;
    [zoom>=10] {
    text-size: 9;
  text-wrap-width: 100;
  text-wrap-before: true;
  text-fill: #555555;
  text-halo-radius: 1px;
  text-face-name: 'Open Sans Bold';
  text-name: '[DESIGNATIO]';
  text-placement: 'interior';
  text-avoid-edges: true;
  text-allow-overlap: true;
  text-placement-type: 'simple';
  text-clip: false;
    }
}

#us_military {
  line-width: 0;
  line-color: #6B8E23;
  line-opacity: 0.5;
  polygon-fill: #6B8E23;
    polygon-opacity: 0.5;
      [zoom>=10] {
    text-size: 10;
  text-wrap-width: 100;
  text-wrap-before: true;
  text-fill: #222222;
  text-halo-radius: 1px;
  text-face-name: 'Open Sans Bold';
  text-name: '[INSTALLATI]';
  text-placement: 'interior';
  text-avoid-edges: true;
  text-allow-overlap: true;
  text-placement-type: 'simple';
  text-clip: false;
    }
}

