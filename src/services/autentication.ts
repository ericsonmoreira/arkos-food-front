import { AxiosResponse } from 'axios';
import api from '../api';

interface LoginParams {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export default {
  login: (params: LoginParams): Promise<AxiosResponse<LoginResponse>> =>
    api.post('/auth/login', params)
};
