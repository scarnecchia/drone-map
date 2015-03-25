#Restricted Airspace

This is an update to MapBox's "Don't Fly Drones Here" map: https://www.mapbox.com/drone/no-fly/ with new resources and input from the UAV community (https://www.facebook.com/groups/uavLegalNews/).

A working version can found at https://scarnecchia.github.io/maps/drones/drones.html.

Currently the map shows US airports with a 5-mile radius, US National Parks, Military Bases, Sports Venues, and Temporary Flight Restrictions. The map also includes sensitive sites where it is inadvisable to fly, such as power plants and prisons.

##Known Issues
- The Temporary Flight Restrictions are out of date. Mapbox was scraping the FAA NOTAM website for updates, but this script appears to no longer be functioning.
- The Power Plant data is suspect
- Prisons and Powerplants are currently using point data, rather than polygons, making the no fly zone around them arbitrary (currently 200m and 800m radii, respectively)
- Missing pop-up data
- Needs data source attribution

##Roadmap
- Add a seperate layer with Class B, C, and D airspace
- Add additional sensitive sites as deemed necessary by UAV community
- ~~Add l.map.gridLayer and l.map.gridControl to the existing map to provide better pop-up data~~
	- UTFGrid is being depreciated, need to find a work around.
- Update TFR data
- Refine distances around sensitive sites and airports
- Rewrite in Mapbox GL as tools become available.