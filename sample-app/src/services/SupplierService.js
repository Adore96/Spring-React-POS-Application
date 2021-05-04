import axios from "axios";

const ADDSUPPLIER_REST_API = 'http://localhost:8090/api/v1/addsupplier';
const UPDATE_SUPPLIER_REST_API = 'http://localhost:8090/api/v1/updatesupplier';
const DELETE_SUPPLIER_REST_API = 'http://localhost:8090/api/v1/deletesupplier';
const GET_SUPPLIER_REST_API = 'http://localhost:8090/api/v1/suppliers/';

class SupplierService {

    addSupplier(supplier) {
        return axios.post(ADDSUPPLIER_REST_API, supplier);
    }

    updateSupplier(supplier, supplierid) {
        console.log(supplierid, supplier);
        return axios.post(UPDATE_SUPPLIER_REST_API + '/' + supplierid, supplier);
    }

    getSupplier(supplierId) {
        return axios.get(GET_SUPPLIER_REST_API + supplierId);
    }

    deleteSupplier(supplierId) {
        return axios.get(DELETE_SUPPLIER_REST_API + '/' + supplierId);
    }
}

export default new SupplierService();

