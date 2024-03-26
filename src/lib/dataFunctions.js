
/**
 * This function is call by categoryButtons function when a button is clicked
 *
 * @param { every plant } data - From dataset
 * @param { property } filterBy - Category of every element of the array object
 * @param { atribute } value - Category of plant
 *
 * @returns data filtered
 */
export const filterData = (data, filterBy, value) => {
  return data.filter((objeto) => objeto[filterBy] === value);
};

//----------------------
/**
 * This function is call by dropdown function when an option is clicked
 *
 * @param { Object } data - currentData
 * @param { property } sortBy - id of every element of the array object
 * @param { number } sortOrder - selectedIndex from dropdown
 *
 */
export const sortData = (data, sortBy, sortOrder) => {
  data.sort(function (a, b) {
    if (sortOrder === 1) {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else if (sortOrder === 2) {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    } else {
      return;
    }
  });
};

/**
 * This function is call by statiscis variable to be use in ststisticsButton
 *
 * @param { every plant } data - From clonedData
 *
 * @returns the new populated object
 */

export const computeStats = (data) => {
  //1 - Create empty structure to host categories in arrays
  const statsByCategory = {
    ornamental: {
      average: {
        waterAverage: 0,
        lightAverage: 0,
        careAverage: 0,
      },
      factsByPlants: [],
    },
    medicinal: {
      average: {
        waterAverage: 0,
        lightAverage: 0,
        careAverage: 0,
      },
      factsByPlants: [],
    },
    aromatica: {
      average: {
        waterAverage: 0,
        lightAverage: 0,
        careAverage: 0,
      },
      factsByPlants: [],
    },
    desertica: {
      average: {
        waterAverage: 0,
        lightAverage: 0,
        careAverage: 0,
      },
      factsByPlants: [],
    },
    arboles: {
      average: {
        waterAverage: 0,
        lightAverage: 0,
        careAverage: 0,
      },
      factsByPlants: [],
    },
  };

  //2 - Iterate in data
  data.forEach((plant) => {
    //3 - Identify category
    const category = plant.categoryPlant;
    //4 - Extracts facts
    //5 - Store facts in array corresponding category
    statsByCategory[category].factsByPlants.push(plant.facts);
  });

  Object.keys(statsByCategory).forEach((category) => {
    const sumWater = statsByCategory[category].factsByPlants.reduce(
      (accumulator, fact) => accumulator + fact.waterAmount,
      0
    );
    const averageWater = parseInt(
      sumWater / statsByCategory[category].factsByPlants.length
    );
    statsByCategory[category].average.waterAverage = averageWater;

    const sumLight = statsByCategory[category].factsByPlants.reduce(
      (accumulator, fact) => accumulator + fact.sunLight,
      0
    );
    const averageLight = parseInt(
      sumLight / statsByCategory[category].factsByPlants.length
    );
    statsByCategory[category].average.lightAverage = averageLight;

    const sumCare = statsByCategory[category].factsByPlants.reduce(
      (accumulator, fact) => accumulator + fact.careDifficulty,
      0
    );
    const averageCare = parseInt(
      sumCare / statsByCategory[category].factsByPlants.length
    );
    statsByCategory[category].average.careAverage = averageCare;
  });

  return statsByCategory;
};
