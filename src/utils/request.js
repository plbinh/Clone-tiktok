import axios from 'axios';

// Creating an instance

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

/**Tạo ra một method get mới để trả về response.data,
 * nên khi sử sử dụng phương thức get mới đc tạo ra này
 * thì kết quả trả về chỉ cần response.data thay vì
 * phải response.data.data như phương thức get ban đầu
 * của thư viện axios */
export const get = async (path, params = {}) => {
    const respone = await request.get(path, params);
    return respone.data;
};

export default request;
