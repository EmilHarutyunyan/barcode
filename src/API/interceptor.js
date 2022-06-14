import axios from 'axios';
// baseURL: "http://192.52.243.93:8080/v1/"
const axiosApiInstance = axios.create({
  baseURL: 'https://www.barcodetracker.org/v1/',
});

axiosApiInstance.interceptors.request.use(
  
  async config => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json"
    };
    
    return config;
  },
  error => {
    Promise.reject(error).then();
  }
);

// axiosApiInstance.interceptors.response.use((response) => {
//     return response
// }, async function (error) {
//     const originalRequest = error.config;
//     // console.log('************', error.response.status);
//     // if (error.response.status === 401 && originalRequest && !originalRequest._retry) {
//     //     originalRequest._retry = true;
//     //     // const refresh_token = localStorage.getItem('refresh__token');
//     //     // const response = await axios.post('http://lexala.netgs.net/Account/RefreshToken', {refreshToken: refresh_token});
//     //     // if (response) {
//     //     //     localStorage.setItem('token', response.data.item.jwtToken);
//     //     //     localStorage.setItem('refresh__token', response.data.item.refreshToken);
//     //     // }
//     //     // axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.item.jwtToken;
//     //     // return axiosApiInstance(originalRequest);
//     // }
//     return Promise.reject(error.response.data);
// });
export default axiosApiInstance;