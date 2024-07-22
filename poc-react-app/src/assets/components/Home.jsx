import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
const layoutStyle = {
  backgroundImage: `url('/backgroundTheme.jpg')`, // Adjust the path to your image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures full height of the viewport
  display: 'flex',
  flexDirection: 'column',
};
function Home() {
    return(
    <div>
      <Typography variant="h4" gutterBottom style={{ color: 'black' }}>
        Welcome to My App
      </Typography>
      <Typography variant="h6">
        We provide creative <br/> solutions to turn your <br/>ideas into digital reality..
      </Typography> 
    </div>);
  };


  export default Home;