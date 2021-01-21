import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  ListSubheader,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FlagIcon from '@material-ui/icons/Flag';
import SettingsIcon from '@material-ui/icons/Settings';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HelpIcon from '@material-ui/icons/Help';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import TheatersIcon from '@material-ui/icons/Theaters';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
  },
  copyright: {
    fontSize: 12,
  },
}));

const videos = [
  {
    id: 1,
    title: 'Chandler Bing being Sarcastic for 10 minutes.',
    channel: 'Bing Bing Bing',
    views: '409 mil visualizações',
    date: 'há 1 mês',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title: 'Pica-Pau em Português | Um Natal à Moda Pica-Pau',
    channel: 'Pica-Pau em Português',
    views: '2,2 mi de visualizações',
    date: 'há 2 anos',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title: 'Full Documentary | Thierry Henry | Arsenal Legends',
    channel: 'Arsenal',
    views: '1 mi visualizações',
    date: 'há 8 meses',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title: 'Chaves #268 - Os gatinhos de Chaves (1979)',
    channel: 'Canal Chaves',
    views: '4,1 mi de visualizações',
    date: 'há 9 meses',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title: 'Rock Clássico Acústico Dos Anos 80 dos anos 90',
    channel: 'Acoustic Music Collection',
    views: '2,2 mi de visualizações',
    date: 'há 5 meses',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'Melhores momentos todo mundo odeia o Chris!',
    channel: 'Todo Mundo Odeia o Chris',
    views: '4,1 mi  visualizações',
    date: 'há 6 anos',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title: 'GOLEADA DO VERDÃO SOBRE O TIMÃO GERA',
    channel: 'Jogo Aberto',
    views: '464 mil visualizações',
    date: 'há 1 dia',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title: 'A WEST WING SPECIAL Trailer (2020) HBO Max',
    channel: 'Stream Source Trailers',
    views: '169 mil de visualizações',
    date: 'há 3 meses',
    thumb: '/images/thumb8.png',
  },
];

function Home({ darkMode, setDarkMode }) {

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color='inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' className={classes.menuIcon} aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <img src={theme.palette.type === 'dark' ? '/images/logo-branco.png' : '/images/logo-preto.png'}
            alt='logo' className={classes.logo} />
          <div className={classes.grow} />
          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} className={classes.icons} />
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button variant="outlined" color="secondary" startIcon={<AccountCircleIcon />}>Fazer Login</Button>
        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}>
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText primary={"Início"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                  <ListItemText primary={"Em alta"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                  <ListItemText primary={"Inscrições"} classes={{ primary: classes.listItemText }} />
                </ListItem>

              </List>

              <Divider />

              <List>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                  <ListItemText primary={"Biblioteca"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                  <ListItemText primary={"Histórico"} classes={{ primary: classes.listItemText }} />
                </ListItem>

              </List>

              <Divider />

              <Box p={7}>
                <Typography variant="body2">Faça login para curtir vídeos, comentar e se inscrever.</Typography>
                <Box mt={2}>
                  <Button variant='outlined' color='secondary' startIcon={<AccountCircleIcon />}>
                    Fazer login
              </Button>
                </Box>
              </Box>

              <Divider />

              <List component='nav' aria-labelledby='nested-list-subheader' subheader={
                <ListSubheader component='div' id='nested-list-subheader' className={classes.subheader}>
                  O Melhor do youtube
                </ListSubheader>}>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<MusicNoteIcon />}</ListItemIcon>
                  <ListItemText primary={"Músicas"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SportsEsportsIcon />}</ListItemIcon>
                  <ListItemText primary={"Jogos"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<TheatersIcon />}</ListItemIcon>
                  <ListItemText primary={"Filmes"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<ChromeReaderModeIcon />}</ListItemIcon>
                  <ListItemText primary={"Notícias"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SurroundSoundIcon />}</ListItemIcon>
                  <ListItemText primary={"Ao vivo"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<EmojiObjectsIcon />}</ListItemIcon>
                  <ListItemText primary={"Aprender"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<YouTubeIcon />}</ListItemIcon>
                  <ListItemText primary={"Vídeos do momento"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<RotateRightIcon />}</ListItemIcon>
                  <ListItemText primary={"Vídeo em 360°"} classes={{ primary: classes.listItemText }} />
                </ListItem>

              </List>

              <Divider />

              <List>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText primary={"Procurar canais"} classes={{ primary: classes.listItemText }} />
                </ListItem>

              </List>

              <Divider />

              <List component='nav' aria-labelledby='nested-list-subheader' subheader={
                <ListSubheader component='div' id='nested-list-subheader' className={classes.subheader}>
                  Mais do youtube
                </ListSubheader>}>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<YouTubeIcon />}</ListItemIcon>
                  <ListItemText primary={"YouTube Premium"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SurroundSoundIcon />}</ListItemIcon>
                  <ListItemText primary={"Ao vivo"} classes={{ primary: classes.listItemText }} />
                </ListItem>

              </List>

              <Divider />

              <List>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
                  <ListItemText primary={"Configurações"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<FlagIcon />}</ListItemIcon>
                  <ListItemText primary={"Histórico de denúncias"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HelpIcon />}</ListItemIcon>
                  <ListItemText primary={"Ajuda"} classes={{ primary: classes.listItemText }} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AnnouncementIcon />}</ListItemIcon>
                  <ListItemText primary={"Enviar feedback"} classes={{ primary: classes.listItemText }} />
                </ListItem>

              </List>

              <Divider />

              <Box p={5}>
                <Typography variant="body2" align="center" classes={{ body2: classes.copyright }} >&copy; 2021 Google LLC</Typography>
              </Box>

            </div>
          </Drawer>
        </Hidden>
        <Box p={7}>
          <Toolbar />
          <Typography variant="h5" color="textPrimary" style={{ fontWeight: 500, paddingBottom: 1  }}>Recomendados</Typography>
          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img style={{ width: '100%' }} alt={item.title} src={item.thumb} />
                  <Box>
                    <Typography style={{ fontWeight: 600 }} gutterBottom variant='body1' color='textPrimary'>
                      {item.title}
                    </Typography>
                    <Typography display='block' variant='body2' color='textSecondary' >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default Home
