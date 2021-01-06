import axios from "axios";

const API_URL = "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json";

const request = axios.create({
    baseURL: API_URL,
    // timeout: 1000,
});

// start load event data
const loadSurahSuccess = (events) => ({
    type: "LOAD_SURAH_SUCCESS",
    events,
});

const loadSurahFailure = () => ({
    type: "LOAD_SURAH_FAILURE",
});

export const loadSurah = () => {
    console.log("action")
    return (dispatch) => {
        return axios.get("https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json")
            .then(function (response) {
                console.log("ada")
                console.log(response.data,"ini response")
                dispatch(loadSurahSuccess(response.data));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(loadSurahFailure());
            });
    };
};

