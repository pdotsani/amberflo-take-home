interface IConstants {
    METERS_API: string;
    METERS_API_WITH_ID: string;
}

const ROOT_URL = 'http://take-home-exercise-api.herokuapp.com';

const Constants: IConstants = {
    METERS_API: `${ROOT_URL}/meters`,
    METERS_API_WITH_ID: `${ROOT_URL}/meters/:id`,
}

export default Constants;