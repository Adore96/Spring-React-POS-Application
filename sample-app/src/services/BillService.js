import axios from "axios";

const ADD_BILL_REST_API = 'http://localhost:8090/api/v1/add-bill';
const UPDATE_BILL_REST_API = 'http://localhost:8090/api/v1/update-bill';
const DELETE_BILL_REST_API = 'http://localhost:8090/api/v1/delete-bill';
const GET_BILL_REST_API = 'http://localhost:8090/api/v1/bills/';

class BillService {

    addBill(bill) {
        return axios.post(ADD_BILL_REST_API, bill);
    }

    updateBill(bill, billId) {
        console.log(billId, bill);
        return axios.post(UPDATE_BILL_REST_API + '/' + billId, bill);
    }

    getBill(billId) {
        return axios.get(GET_BILL_REST_API + billId);
    }

    deleteBill(billId) {
        return axios.get(DELETE_BILL_REST_API + '/' + billId);
    }
    
    deleteBillById(billId) {
        return axios.get(DELETE_BILL_REST_API + '/' + billId);
    }
}

export default new BillService();
