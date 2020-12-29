import React from 'react';
import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";

// import AsyncStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage'
// import * as AsyncStorage from 'expo-secure-store';
// import AsyncStorage from 'react-native-secure-storage';

import {BASE_URL} from '../config';
import {createAction} from '../utils/createAction';
import {sleep} from '../utils/sleep';

export function useAuth() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );
  const auth = React.useMemo(
    () => ({
      login: async (email, password) => {
        const {data} = await axios.post(`${BASE_URL}/auth/login/`, {
          username: email,
          password,
        });
        const user = {
          email: data.user,
          token: data.token,
        };

        await AsyncStorage.setItem('user', JSON.stringify(user));
        dispatch(createAction('SET_USER', user));
      },
      logout: async () => {
        await AsyncStorage.removeItem('user');
        dispatch(createAction('REMOVE_USER'));
      },
      register: async (email,username, password) => {
        await sleep(2000);
        await axios.post(`${BASE_URL}/auth/register/`, {
          username: username,
          email,
          password,
        });
      },
    }),
    [],
  );
  React.useEffect(() => {
    sleep(2000).then(() => {
      try {
      AsyncStorage.getItem('user').then(user => {
        if (user) {
          dispatch(createAction('SET_USER', JSON.parse(user)));
        }
        dispatch(createAction('SET_LOADING', false));
      });
    } catch(err) {
      dispatch(createAction('SET_LOADING', false));

    }


    });
  }, []);
  return {auth, state};
}
