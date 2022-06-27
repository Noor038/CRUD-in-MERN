

import { Box, Typography, styled } from '@mui/material';

import Employee1 from '../Assets/Images/Employees.png';
import Employee2 from '../Assets/Images/Employee2.png';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {

    return (
        <Header>
            <Typography variant="h4">Employee Database!</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={Employee1} />
                <Image src={Employee2} />
            </Box>
        </Header>
    )
}

export default CodeForInterview;