import * as C from './styles';
import profile from '../../assets/profile.jpg';

const DevInformation = () => {
    return(
        <C.Container>
            <C.ImageContainer>
                <C.ImageProfile src={profile}/>

            </C.ImageContainer>
            <C.ProfileContainer>
                <C.TitleContainer>
                    <C.Name>Filipe Zaidan</C.Name>

                </C.TitleContainer>

            </C.ProfileContainer>
        </C.Container>
    );
}

export default DevInformation;