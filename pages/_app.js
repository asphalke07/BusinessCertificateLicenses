import '../styles/globals.css'
// import type { AppProps } from 'next/app;
import { useState,useMemo } from 'react';
import { UserContext } from "../context/UserContext";

// function MyApp({ Component, pageProps }: AppProps) {
//   const [indiUser, setIndiUser] = useState(null);

//   const value = useMemo(() => ({ indiUser, setIndiUser }), [indiUser, setIndiUser]);
  
//   return( <UserContext.Provider value={value}>
//     <Component {...pageProps} />
//     <UserContext.Provider/>); 
 
// }

// export default MyApp





const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [indiUser, setIndiUser] = useState(null);
  const value = useMemo(() => ({ indiUser, setIndiUser }), [indiUser, setIndiUser]);
  
  return (
    <UserContext.Provider value={value}>
     
      <Component {...pageProps} />

      </UserContext.Provider>
  );
};

export default MyApp;
