import * as types from './types';
import * as api from '../api/index';
import { ThemeProvider } from '@material-ui/core';
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

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: types.CREATE_POSTS,
            payload: data
        });
    } catch (error) {

    }
}