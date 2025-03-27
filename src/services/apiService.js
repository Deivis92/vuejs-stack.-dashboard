import axios from "axios";

const BASE_URL = "https://sheetdb.io/api/v1/o16juehtgl9e2";

export default {
    async fetchData(sheetName) {
        try {
            const response = await axios.get(`${BASE_URL}?sheet=${sheetName}`);
            return response.data;
        } catch (error) {
            console.error("Fehler beim Abrufen der Daten:", error);
            throw error;
        }
    },
};
