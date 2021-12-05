import { createContext, useCallback, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import autentication from '../services/autentication';

const LH_TOKEN_NAME = 'ARKOS_FOOD_TOKEN';

type TokenState = string | null;

interface AuthContextState {
  token: TokenState;
  signIn({ username, password }: UserData): Promise<void>;
  userLogged(): boolean;
  signOut(): void;
}

interface UserData {
  username: string;
  password: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useLocalStorage<TokenState>(LH_TOKEN_NAME, null);

  const signIn = useCallback(async ({ username, password }: UserData) => {
    const { data } = await autentication.login({
      username,
      password
    });

    const { token } = data;

    setToken(token);
  }, []);

  const signOut = useCallback(async () => {
    setToken(null);
  }, []);

  const userLogged = useCallback(() => {
    return token ? true : false;
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, signIn, userLogged, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
