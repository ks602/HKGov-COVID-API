let params = {
  "resource": "http://www.chp.gov.hk/files/misc/occupancy_of_quarantine_centres_eng.csv",
  "section": 1,
  "format": "json",
  "filters": [
    [5, "ge", ["50"]]
  ]
};

let tableLength = 50;