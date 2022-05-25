import * as request from '~/utils/request';

/**Tạo ra các hàm apiService riêng để import sử dụng
 * làm code gọn hơn, khi cần gọi nhiều API chỉ cần tạo
 * các apiService này và hay thế đường dẫn */

export const search = async (q, type = 'less') => {
    try {
        const respone = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return respone.data;
    } catch (error) {
        console.log(error);
    }
};
