import axios from "axios";

export const CLINIC_API_BASE_URL = "http://localhost:8080";
export const USER_API_BASE_URL = "http://localhost:8080";

class ClinicService {
    saveClinic (clinic) {
        return axios.post(USER_API_BASE_URL, clinic);
    }

}
export default new ClinicService();