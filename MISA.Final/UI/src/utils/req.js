import axios from 'axios';

import { BASE_URL } from './envConst.js';

/**
 * Khởi tạo config mặc định
 * CreatedBy: Tienvq 01/09/2021
// */
export default axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json'
    }
});