import React,
  {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from 'react';

  import * as AuthSession from 'expo-auth-session';
  import AsyncStorage from '@react-native-async-storage/async-storage';

    const {REDIRECT_URI} = process.env;
    const {SCOPE} = process.env;
    const {RESPONSE_TYPE } = process.env;
    const {CLIENT_ID} = process.env;
    const {CDN_IMAGE} = process.env;

  import {COLLECTION_USERS} from '../configs/database';
  import { api } from '../services/api';

  type User = {
    id:string;
    username:string;
    firstName:string;
    avatar:string;
    email:string;
    token:string;
  }

  type AuthContextData = {
    data: User;
    loading: boolean;
    signIn: ()=> Promise<void>;
  }

  type AuthProviderProps = {
    children: ReactNode;
  }

  type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params:{
      access_token?:string;
      error?:string;
    }
  }

  export const AuthContext = createContext({} as AuthContextData);

  function AuthProvider({children}:AuthProviderProps){
    const [user, setUser] = useState<User>({}as User);
    const [loading, setLoading] = useState(false);

    async function signIn(){
      try {
        console.log('começou');

        setLoading(true);
        const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

        const { type, params } = await AuthSession
        .startAsync({ authUrl }) as AuthorizationResponse;
        console.log(params);


        if ( type === "success" && !params.error ){
          api.defaults.headers.authorization = `Bearer ${params.access_token}`;
          const userInfo = await api.get('/users/@me');

          const firstName = userInfo.data.username.split(' ')[0];
          userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

          const userData = {
            ... userInfo.data,
            firstName,
            token: params.access_token
          }

          await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));

          setUser(userData);
        }
      } catch (error) {
        throw new Error('Não foi possível autenticar');

      }finally{
        setLoading(false)
      }
    }

    async function singOut(){
      setUser({} as User);
      await AsyncStorage.removeItem(COLLECTION_USERS)
    }

    async function loadingUserData(){
      const storage = await AsyncStorage.getItem(COLLECTION_USERS);
      if (storage) {
        const userLogged = JSON.parse(storage) as Uer;
        api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
        setUser(userLogged);
      }
    }

    useEffect(()=>{
      loadingUserData();
    },[])

    return(
      <AuthContext.Provider value={{
        user,
        loading,
        signIn,
        singOut
      }}>
        {children}
      </AuthContext.Provider>
    );
  }

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export {
  AuthProvider,
  useAuth
}
