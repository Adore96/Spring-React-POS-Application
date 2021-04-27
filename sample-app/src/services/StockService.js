import axios from "axios";

const STOCKS_LIST_API = 'http://localhost:8090/api/v1/stocks';
const ADDSTOCK_REST_API = 'http://localhost:8090/api/v1/addstock';
const UPDATE_STOCK_REST_API = 'http://localhost:8090/api/v1/updatestock';
const DELETE_STOCK_REST_API = 'http://localhost:8090/api/v1/deletestock';
const GET_STOCK_REST_API = 'http://localhost:8090/api/v1/stocks/';
const GET_STOCK_SUPPLIER_REST_API = 'http://localhost:8090/api/v1/stocksupplier';

class StockService {
    getStocks() {
        return axios.get(STOCKS_LIST_API);
    }

    addStock(stock) {
        return axios.post(ADDSTOCK_REST_API, stock);
    }

    updateStock(stock, stockid) {
        console.log(stockid, stock);
        return axios.post(UPDATE_STOCK_REST_API + '/' + stockid, stock);
    }

    getStock(stockId) {
        return axios.get(GET_STOCK_REST_API + stockId);
    }

    deleteStock(stockId) {
        return axios.get(DELETE_STOCK_REST_API + '/' + stockId);
    }

    getStockSupplier(supplierId) {
        return axios.get(GET_STOCK_SUPPLIER_REST_API + '/' + supplierId);
    }
}

export default new StockService();
