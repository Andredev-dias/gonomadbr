import { BrowserRouter, Route, Routes as Switch} from 'react-router-dom'
import Main from '../src/app/pages/Main';

export const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' element={<Main/>} />
           
            <Route path='*' element={<h1>Pagina nao encontrada</h1>}/>
          
            </Switch>
        </BrowserRouter> 
    )
};