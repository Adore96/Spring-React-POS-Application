import axios from "axios";

const ITEMS_LIST_API = 'http://localhost:8090/api/v1/items';
const ADD_ITEM_REST_API = 'http://localhost:8090/api/v1/additem';
const UPDATE_ITEM_REST_API = 'http://localhost:8090/api/v1/updateitem';
const DELETE_ITEM_REST_API = 'http://localhost:8090/api/v1/deleteitem';
const GET_ITEM_REST_API = 'http://localhost:8090/api/v1/items/';
const GET_ITEM_SUPPLIER_REST_API = 'http://localhost:8090/api/v1/itemsupplier';

class ItemService {
    getItems() {
        return axios.get(ITEMS_LIST_API);
    }

    addItem(item) {
        return axios.post(ADD_ITEM_REST_API, item);
    }

    updateItem(item, itemId) {
        console.log(itemId, item);
        return axios.post(UPDATE_ITEM_REST_API + '/' + itemId, item);
    }

    getItem(itemId) {
        return axios.get(GET_ITEM_REST_API + itemId);
    }

    deleteItem(itemId) {
        return axios.get(DELETE_ITEM_REST_API + '/' + itemId);
    }

    getItemSupplier(supplierId) {
        return axios.get(GET_ITEM_SUPPLIER_REST_API + '/' + supplierId);
    }
}

export default new ItemService();
