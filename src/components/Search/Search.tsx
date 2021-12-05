import {BsSearch} from 'react-icons/bs';

import * as C from './styles';

const Search = () => {
    return(
        <C.Container>
            <BsSearch color='#0079FE' size={25}/>
            <C.Input/>
            <C.Button>
                <C.TitleButton>Search</C.TitleButton>
            </C.Button>
        </C.Container>
    );
}

export default Search;