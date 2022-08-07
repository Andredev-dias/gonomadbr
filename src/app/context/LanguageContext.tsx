import React, { useState, useEffect } from 'react';

export type LanguageContextType= {
    language:string,
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}
const LANGUAGE_DEFAULT = {
    language:'',
    setLanguage: () => {}
}
export const LanguageContext = React.createContext<LanguageContextType>(LANGUAGE_DEFAULT);

export const LanguageProvider = ({children}:{children:any}) => {
    const [language, setLanguage ] = useState('');
    
    useEffect(()=>{
        const languageStored = localStorage.getItem('language');
        if(languageStored){
            setLanguage(languageStored)
        }
    }, [])

    useEffect(()=>{
      localStorage.setItem('language', language);
    }, [language])

    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </ LanguageContext.Provider>
    )
}