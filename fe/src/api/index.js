import { get, post } from "./base";
import { request } from "./url";

export const getAll = async () => {
  try {
    const res = await get(`${request.GET_ALL}`, { params: {} });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getById = async (id) => {
  try {
    const res = await get(`${request.GET_BY_ID}`, { params: { id } });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postDA = async (params) => {
  try {
    const res = await post(`${request.POST_DA}`, { params: { ...params } });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postDAimg = async (params) => {
  try {
    const res = await post(`${request.POST_DA_IMG}`, { params: { ...params } });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getCheckById = async (id) => {
  try {
    const res = await get(`${request.CHECK_BY_ID}`, { params: { id } });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getCheckByMDT = async (params) => {
  try {
    const res = await get(`${request.GET_BY_MDT}`, { params: { ...params } });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postApi = async (params) => {
  try {
    const res = await post(`${request.API}`, { params: { ...params } });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postChamDiem = async (params) => {
  try {
    const res = await post(`${request.POST_POINT}`, { params: { ...params } });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postFile = async (img) => {
  try {
    const input = new FormData();
    input.append("file", img);
    console.log(input);
    const res = await post(`http://127.0.0.1:5000/file-upload`, input);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postForm = async (params) => {
  try {
    const res = await post(`${request.GET_API}`, { params: { ...params } });
    return res;
  } catch (err) {
    console.log(err);
  }
};
