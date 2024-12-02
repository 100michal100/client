import { Box, Typography, Button } from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

export const NotFound = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#121212',
            color: '#fff',
            textAlign: 'center',
        }}
        >
            <Typography variant="h1" sx={{
                fontSize: '100px', fontFamily: 'Fredoka',
                fontWeight: 400, lineHeight: '121px', color: '#49ACEF'
            }}>
                404
            </Typography>
            <Typography variant="h5" sx={{
                fontSize: '40px', fontFamily: 'Open Sans',
                fontWeight: 400, lineHeight: '54.47px', color: '#FFFFFF'
            }}
            >
                הדף לא נמצא
            </Typography>
            <Box sx={{ mb: 2 }}>
                <ImageSearchIcon sx={{ color: '#F1C40F' }} />
            </Box>
            <Typography variant="body1" sx={{
                fontSize: '20px', fontFamily: 'Open Sans',
                fontWeight: 400, lineHeight: '27.24px', color: '#FFFFFF'
            }}>
                ...מצטערים, אבל לא הצלחנו למצוא את הדף שאתה מחפש
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => (window.location.href = '/home')}
                    sx={{
                        fontSize: '20px', fontFamily: 'Fredoka', fontWeight: 400, lineHeight: '24.2px', color: '#F1C40F'
                    }}
                >
                    חזרה לדף הבית
                </Button>
            </Typography>
        </Box>
    );
};
