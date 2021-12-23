import axios from 'axios';

const PH_REST_API_URL = 'http://localhost:8080/api/publicholiday';

class PublicHolidayService{

    getPublicHoliday(){
        return axios.get(PH_REST_API_URL);
    }

    createPublicHoliday(publicHoliday){
        return axios.post(PH_REST_API_URL, publicHoliday);
    }

    getPublicHolidayById(publicHolidayId){
        return axios.get(PH_REST_API_URL + '/' + publicHolidayId);
    }

    updatePublicHoliday(publicHoliday, publicHolidayId){
        return axios.put(PH_REST_API_URL + '/' + publicHolidayId, publicHoliday);
    }

    deletePublicHolidayById(publicHolidayId){
        return axios.delete(PH_REST_API_URL + '/' + publicHolidayId);
    }

    deleteAllPublicHoliday(){
        return axios.delete(PH_REST_API_URL);
    }

}

export default new PublicHolidayService();