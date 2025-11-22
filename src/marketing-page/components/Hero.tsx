import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import InputLabel from '@mui/material/InputLabel';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '80%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url(https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url(https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        borderBottomRightRadius:"4%",
        borderBottomLeftRadius:"4%",
        backgroundImage:
          // 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
          //  'radial-gradient(ellipse 80% 50% at 50% -20%, #EAE8FD, transparent)',
           'linear-gradient(to bottom, #EAE8FD, #FCE5E6)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            // 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
            'radial-gradient(ellipse 80% 50% at 50% -20%, #FCE5E6, transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            component="span"
            variant="h1"
            sx={(theme)=> ({
              
              alignItems: 'center',
              textAlign:'center',
              fontSize: 'clamp(3rem, 2vw, 3.5rem)',
              ...theme.applyStyles('light', {
                  backgroundImage: 'linear-gradient(to right,#28C76F, #5A4AFF, #FF3739)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }),
              
            })}
          >
             A&nbsp;Comperhensive&nbsp;For managing Service contracts and Extended warranties
            
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              color: 'text.secondary',
              fontSize:'medium',
              width: { sm: '100%', md: '80%' },
            }}
          >
            A digital solution designed to streamline and automate the process of managing 
            extended warranties, service contracts, and other post-purchase protection plans.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, justifyContent: 'center', width: { xs: '100%', sm: '350px' } }}
          >
           
            
            <Button
              variant="contained"
              color="info"
              size="medium"
              sx={{ minWidth: 'fit-content' }}
            >
              Get Access
            </Button>
          </Stack>
          
        </Stack>
        <StyledBox id="image" />
      </Container>
    </Box>
  );
}
