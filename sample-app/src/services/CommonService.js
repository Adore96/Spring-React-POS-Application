import axios from "axios";

const BILL_LIST_API = 'http://localhost:8090/api/v1/bills';
const ITEM_LIST_API = 'http://localhost:8090/api/v1/items';
const SUPPLIER_LIST_API = 'http://localhost:8090/api/v1/suppliers';
const USER_LIST_API = 'http://localhost:8090/api/v1/users';

class CommonService {

    getAllItems() {
        return axios.get(ITEM_LIST_API);
    }

    getAllBills(){
        return axios.get(BILL_LIST_API);
    }

    getAllUsers(){
        return axios.get(USER_LIST_API);
    }

    getAllSuppliers(){
        return axios.get(SUPPLIER_LIST_API);
    }
}

export default new CommonService();

