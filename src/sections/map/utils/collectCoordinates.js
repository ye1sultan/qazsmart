export function collectCoordinates(activities) {
    const coordinatesArray = activities.map((activity) => ({
        name: activity.name,
        coordinates: activity.coordinates,
    }));

    return coordinatesArray;
};