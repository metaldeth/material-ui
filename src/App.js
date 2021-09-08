import './App.css';
import { 
  AppBar, 
  Paper,
  CardActions, 
  Card, 
  Box, 
  Button, 
  Container, 
  IconButton, 
  Toolbar, 
  Typography, 
  Grid, 
  CardMedia, 
  CardContent 
} from '@material-ui/core';
import { Menu, Layers, PlayCircleFilled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import EnhancedTable from './test';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainfeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: 'rgba(0,0,0,.3)'
  },
  mainfeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(6)
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

const cards = [1,2,3,4,5,6,7,8,9]

export const App = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton 
              edge='start' 
              color='inherit' 
              className={classes.menuButton}
              aria-laabel='menu'
            >
              <Menu/>
            </IconButton>
            <Typography variant='h6'className={classes.title}>Material test</Typography>
            <Box mr={3}> 
              <Button color='inherit' variant='outlined'>Log In</Button>
            </Box>
            <Button color='secondary' variant='contained'>Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainfeaturesPost}
          style={{ backgroundImage: 'url(http://lorempixel.com/g/1900/600/)' }}>
          <Container fixed>
          <div className={classes.overlay}/>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainfeaturesPostContent}>
                  <Typography
                    component='h1'
                    variant='h3'
                    color='inherit'
                    gutterBottom
                  >
                    Material test
                  </Typography>
                  <Typography
                    component='h5'
                    color='inherit'
                    paragraph
                  >
                    «Бритва Оккама» — принцип, выдвинутый английским философом XIV века Уильямом Оккамом: не следует умножать сущности без необходимости. Это означает, что решение не должно быть сложнее решаемой задачи, а также следует отдавать предпочтение более простым теориям перед более сложными, если и те, и другие подтверждаются практикой.
                  </Typography>
                  <Button variant='contained' color='secondary'>
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth='sm'>
            <Typography variant='h2' align="center" color='textPrimary' gutterBottom>Material-Ui test</Typography>
            <Typography variant='h5' align="center" color='textSecondary' paragraph> «Бритва Оккама» — принцип, выдвинутый английским философом XIV века Уильямом Оккамом: не следует умножать сущности без необходимости. Это означает, что решение не должно быть сложнее решаемой задачи, а также следует отдавать предпочтение более простым теориям перед более сложными, если и те, и другие подтверждаются практикой.</Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>Start now</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>Learn more</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia}
                    image='http://lorempixel.com/600/900/'
                    title='image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                      Test card
                    </Typography>
                    <Typography>
                    «Бритва Оккама» — принцип, выдвинутый английским философом XIV века Уильямом Оккамом: не следует умножать сущности без необходимости.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>View</Button>
                    <Button size='small' color='primary'>Edit</Button>

                    <Layers/>
                    <PlayCircleFilled/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <EnhancedTable/>
      </main>
    </>
  );
}

