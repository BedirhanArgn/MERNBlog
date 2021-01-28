import * as types from './types';
import * as api from '../api/index';
export const fetchPost = () => async (dispatch) => {
    const { data } = await api.fetchPost();
    try {
        dispatch({
            type: types.FETCH_POSTS,
            payload: data,
        });
    } catch (error) {
        console.log(error.message)
    }
};

export const fetchSinglePost = (id) => async (dispatch) => {
    const { data } = await api.fetchSinglePost(id);
    try {
        dispatch({
            type: types.FETCH_SINGLE_POST,
            payload: data,
        });
    } catch (error) {
        console.log(error.message)
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: types.CREATE_POSTS,
            payload: data,
        });
    } catch (error) {

    }
}


export const deletePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.deletePost(id);
        dispatch({
            type: types.DELETE_POST,
            payload: data._id,
        });
    } catch (error) {
        console.log(error);
    }
}


export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        console.log("indi");
        dispatch({
            type: types.UPDATED_POST,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}