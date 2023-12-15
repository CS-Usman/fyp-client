/* eslint-disable prettier/prettier */
const speedDataset = {
    labels: ['week1'],
    datasets: [
        {
            data: [0],
        },
    ],
};

export const extractSpeedDataset = (weekName, weekSpeed) => {
    speedDataset.labels = weekName;
    speedDataset.datasets[0].data = weekSpeed;

};

export const generateSpeedDataset = (travelHistory) => {
    if (travelHistory.length > 5) {
        const lastFiveItems = travelHistory.slice(travelHistory.length - 5);
        const weekSpeed = lastFiveItems.map(obj => obj.averageSpeedPerWeek);
        return weekSpeed;
    }
    else {
        const weekSpeed = travelHistory.map(obj => obj.averageSpeedPerWeek);
        return weekSpeed;
    }
};

export default speedDataset;
