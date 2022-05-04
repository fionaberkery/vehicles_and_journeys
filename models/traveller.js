const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = []
  this.journeys.forEach((journey) => {
    startLocations.push(journey.startLocation)
  })
  return startLocations
};




Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = []
  this.journeys.forEach((journey) => {
    endLocations.push(journey.endLocation)
  })
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourneys = this.journeys.filter((journey) => {
    return journey.transport === transport
  })
  return foundJourneys
}

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  })
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance
  }, 0)
  return totalDistance
};


Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = []
  this.journeys.forEach((journey) => {
    result.push(journey.transport)
  })
  const set = new Set(result)
  const uniqueTransport = Array.from(set)
  return uniqueTransport
};


module.exports = Traveller;


