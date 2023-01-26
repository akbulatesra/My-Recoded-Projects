const returnFirstTwoDrivers = function (list) {
  const selectedDrivers = list.slice(0, 2);
  return selectedDrivers;
};
const returnLastTwoDrivers = function (list) {
  const selectedDrivers = list.slice(list.length - 2, list.length);
  return selectedDrivers;
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return () => multiplier * 5;
}
function fareDoubler(fare) {
  return fare * 2;
}
function fareTripler(fare) {
  return fare * 3;
}
function selectDifferentDrivers(list, functionSelector) {
  if (functionSelector === returnFirstTwoDrivers)
    return returnFirstTwoDrivers(list);
  if (functionSelector === returnLastTwoDrivers)
    return returnLastTwoDrivers(list);
}
