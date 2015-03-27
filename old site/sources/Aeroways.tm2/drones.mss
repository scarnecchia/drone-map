@military: #6B8E23;
@national_park: #5D6E61;
@airport5: #CE2029;
@class_b: #FF0;
@class_c: #0000FF;
@class_d: #008000;

//-----
// Military
#landuse {
[class='military']['mapnik::geometry_type'=3] {
    polygon-fill: @military;
    }
  }

#us_military ['mapnik::geometry_type'=3] {
  polygon-fill: @military;
  polygon-opacity: .3;
  }

#us_military {
  	line-join:round;
    line-cap: round;
    line-color: #ff00ff * .4;
    line-width: 1;
    line-opacity: 1;
    [zoom<=6]{line-width: 0.5;}
  }

//---
// National Parks
#us_national_park ['mapnik::geometry_type'=3] {
  polygon-fill: @national_park;
  polygon-opacity: .5;
  }
  
#us_national_park {
    line-join:round;
    line-cap: round;
    line-color: #BBBCC0;
    line-width: 2;
    line-opacity: 0.9;
    [zoom<=6]{line-width: 0.5;}
  }

#usAirports_5mile ['mapnik::geometry_type'=3] {
polygon-fill: @airport5;
  polygon-opacity: .1;
  polygon-clip: true;
  }

#usAirports_5mile {
  	line-cap:square;
  	line-join:miter;
    line-color: @airport5;
    line-width: 2;
    line-opacity: 0.9;
    [zoom<=6]{line-width: 0.5;}
  }

#class_b {
polygon-fill: @class_b;
  polygon-opacity: .05;
  polygon-clip: true;
}

#class_c {
polygon-fill: @class_c;
  polygon-opacity: .05;
  polygon-clip: true;
}

#class_d {
polygon-fill: @class_d;
  polygon-opacity: .05;
  polygon-clip: true;
}

#prisonsUS2 {
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