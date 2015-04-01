@military: #6B8E23;
@national_park: #5D6E61;
@airport5: #CE2029;
@class_b: #FF0;
@class_c: #0000FF;
@class_d: #008000;
@prisons: #000000;
@sports: #4F2682;
@aeroway: #CE2029;

Map {
  }

// ---------------------------------------------------------------------
// Aeroways 
#aeroway {
   line-color: #00FF41;
['mapnik::geometry_type'=2][zoom>9] {
  [type='runway'] {
    line-color:#00FF41;
    line-opacity: 0.75;
  	line-cap:square;
  	line-join:miter;
    [zoom=10]{ line-width:1; }
    [zoom=11]{ line-width:2; }
    [zoom=12]{ line-width:3; }
    [zoom=13]{ line-width:5; }
    [zoom=14]{ line-width:7; }
    [zoom=15]{ line-width:11; }
    [zoom=16]{ line-width:15; }
    [zoom=17]{ line-width:19; }
    [zoom>17]{ line-width:23; }
  }
  [type='taxiway'][zoom>=12] {
    line-color:#000000;
  	line-cap:square;
  	line-join:miter;
    [zoom=10]{ line-width:0.2; }
    [zoom=11]{ line-width:0.2; }
    [zoom=12]{ line-width:0.2; }
    [zoom=13]{ line-width:1; }
    [zoom=14]{ line-width:1.5; }
    [zoom=15]{ line-width:2; }
    [zoom=16]{ line-width:3; }
    [zoom=17]{ line-width:4; }
    [zoom>17]{ line-width:5; }
  }
}
  }
// polygons
#aeroway[type='apron']['mapnik::geometry_type'=3][zoom>=13] {
  polygon-clip: false;
  polygon-fill: #00FF41;
  polygon-opacity: 0.5;
  line-opacity: 0.75;
}

//-----
// Military
#landuse {
[class='military']['mapnik::geometry_type'=3] {
    polygon-fill: @military;
    }
  }

#usMilitary ['mapnik::geometry_type'=3] {
  polygon-fill: @military;
  polygon-opacity: .3;
  polygon-clip: true;
  [zoom>=10] {
  text-name: [name];
  text-face-name: 'Open Sans Regular';
  text-min-distance: 20;
    }
  }

#usMilitary {
  	line-join:round;
    line-cap: round;
    line-color: #ff00ff * .4;
    line-width: 1;
    line-opacity: 1;
    [zoom<=6]{line-width: 0.5;}
  }

#usSportsVenues2 {
polygon-fill: @sports;
  polygon-opacity: .2;
   polygon-clip: true;
}

#usSportsVenues2 {
  	line-cap:square;
  	line-join:miter;
    line-color: @sports;
    line-width: 2;
    line-opacity: 0.5;
    [zoom<=6]{line-width: 0.5;}
}

#usAirports ['mapnik::geometry_type'=3] {
polygon-fill: @airport5;
  polygon-opacity: .1;
  polygon-clip: true;
  }

#usAirports {
  	line-cap:square;
  	line-join:miter;
    line-color: @airport5;
    line-width: 2;
    line-opacity: 0.9;
    [zoom<=6]{line-width: 0.5;}
  }

#usNationalPark ['mapnik::geometry_type'=3] {
  polygon-fill: @national_park;
  polygon-opacity: 0.5;
  polygon-clip: true;
  }
  
#usNationalPark {
    line-join:round;
    line-cap: round;
    line-color: #BBBCC0;
    line-width: 2;
    line-opacity: 0.9;
    [zoom<=6]{line-width: 0.5;}
  }

#class_b {
polygon-fill: @class_b;
  polygon-opacity: .05;
  polygon-clip: true;
  line-color: #000;
  line-width: 0.5;
  line-opacity: 1;
}

#class_c {
polygon-fill: @class_c;
  polygon-opacity: .05;
  polygon-clip: true;
  line-color: #000;
  line-width: 0.5;
  line-opacity: 1;
}

#class_d {
polygon-fill: @class_d;
  polygon-opacity: .05;
  polygon-clip: true;
  line-color: #000;
  line-width: 0.5;
  line-opacity: 1;
}

#prisonsUS2 {
    marker-fill: #000000;
  [zoom=4] {
marker-opacity: .5;
marker-transform:scale(.05,.05);
}
[zoom=5] {
marker-opacity: .5;
marker-transform:scale(.1,.1);
}
[zoom=6] {
marker-opacity: .5;
marker-transform:scale(.2,.2);
}
[zoom=7] {
marker-opacity: .5;
marker-transform:scale(.4,.4);
}
[zoom=8] {
marker-opacity: .5;
marker-transform:scale(.8,.8);
}
[zoom=9] {
marker-opacity: .5;
}
[zoom>10] {
marker-opacity: .5;
marker-transform:scale(2,2);
}
[zoom>13] {
marker-opacity: .5;
marker-transform:scale(3,3);
}
[zoom>14] {
marker-opacity: .5;
marker-transform:scale(4,4);
}
[zoom>15] {
marker-opacity: .5;
marker-transform:scale(8,8);
}
}