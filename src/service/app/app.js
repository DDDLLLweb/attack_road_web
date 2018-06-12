import { config, networkUtils } from '../../utils';

const { request } = networkUtils;
const { api } = config;
const { basic } = api;
const { principal, userLogin,userLogout } = basic

export async function getPrincipal() {
  return request({
    url: principal,
    method: 'get',
  });
}
export async function login(data) {
  return request({
    url: userLogin,
    method: 'post',
    data: data
  });
}

export async function loginOut() {
  return request({
    url: userLogout,
    method: 'post',
  });
}