import React from 'react';


interface AppProps {
    Component: any;
    pageProps: any;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>


                    <Component {...pageProps}/>
 

        </>

    );
};

export default App;
