let params = {
  "resource": "http://www.chp.gov.hk/files/misc/occupancy_of_quarantine_centres_eng.csv",
  "section": 1,
  "format": "json",
  "filters": [
    [4, "ct", ["Yuen Long"]]
  ]
};

let tableLength = 20;