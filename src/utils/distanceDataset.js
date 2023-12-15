/* eslint-disable prettier/prettier */

let distanceDataset = {
    labels: ['week1'],
    datasets: [
        {
            data: [0],
        },
    ],
    legend: ['Distance Traveled per Week'],
};
export const extractDistanceDataset = (weekName, weekDistance) => {
    distanceDataset.labels = weekName;
    distanceDataset.datasets[0].data = weekDistance;

};

export const generateWeekNames = (travelHistory) => {
    if (travelHistory.length > 5) {
        const lastFiveItems = travelHistory.slice(travelHistory.length - 5);
        const weekName = lastFiveItems.map(obj => obj.weekName);
        return weekName;
    }
    else {
        const weekName = travelHistory.map(obj => obj.weekName);
        return weekName;
    }
};
export const generateDistanceDataset = (travelHistory) => {
    if (travelHistory.length > 5) {
        const lastFiveItems = travelHistory.slice(travelHistory.length - 5);
        const weekDistance = lastFiveItems.map(obj => obj.distanceTraveledInWeek);
        return weekDistance;
    }
    else {
        const weekDistance = travelHistory.map(obj => obj.distanceTraveledInWeek);
        return weekDistance;
    }
};

export default distanceDataset;
