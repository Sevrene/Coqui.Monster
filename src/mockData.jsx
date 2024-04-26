import {
  IconBabyBottle,
  IconBook,
  IconBrandDiscord,
  IconBrandOnlyfans,
  IconBrandSteam,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrush,
  IconDeviceGamepad2,
  IconGift,
  IconShoppingBag,
} from '@tabler/icons-react';

import ThreeAmLogo from './components/customSvgComponents';
import { constStyles } from './styles/constStyles';

export const mainPageBackground = {
  type: 'gradient',
  colorGradient: {
    direction: 180,
    colors: [
      {
        color: {
          hex: constStyles.brandPurple,
        },
      },
      {
        color: {
          hex: 'black',
        },
      },
    ],
  },
};

export const footerBackground = {
  type: 'gradient',
  colorGradient: {
    direction: 180,
    colors: [
      {
        color: {
          hex: `${constStyles.brandPurple}05`,
        },
      },
      {
        color: {
          hex: constStyles.brandPurple,
        },
      },
    ],
  },
};

export const aboutSection = {
  title: '🔪🐸 ABOUT 🐸🔪',
  body: (
    <>
      Yo, I&apos;m Coqui! I&apos;m a piece of shit frog girl AND gang leader
      (when Rummy ain&apos;t around)! I&apos;m a member of{' '}
      <a
        href='https://3am.moe/'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: '#fff491' }}
      >
        3AM
      </a>
      !<br />
      My art Mama is the artist and character designer from the game, River City
      Girls,{' '}
      <a
        href='https://twitter.com/tsulala'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: '#fff491' }}
      >
        Rem
      </a>
    </>
  ),
  imageData: {
    src: '/images/brand/about.png',
    alt: 'About Logo',
    width: 100,
    height: 100,
  },
};

export const threeAmSection = {
  title: '🔪🐸 3AM 🐸🔪',
  body: (
    <>
      3AM Virtual Talent is a livestream team of Vtubers and friends who have
      come together to keep you audio/visually happy well into the break of
      dawn. We specialize in casual chat, video games, obscure video
      watchalongs, game shows, and comedy skits, all with a focus on you, the
      viewer. No bouncers, no invite list, and you’re all VIPs. Check us out at{' '}
      <a
        href='https://3am.moe/'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: '#fff491' }}
      >
        3AM
      </a>
    </>
  ),
  imageData: {
    src: '/images/brand/logo/3amLogoWhite.png',
    alt: '3AM Logo',
    width: 100,
    height: 100,
  },
  reversed: true,
};

export const voiceActingSection = {
  title: '🔪🐸 VOICE ACTING 🐸🔪',
  body: 'Did you know I also do voice acting? Check out some of the projects I have worked on!',
};

export const voiceActingRoles = [
  {
    title: 'Urusei Yatsura',
    role: 'Ten',
    link: 'https://coqui.monster/voice-acting',
    imageData: {
      src: '/images/brand/about.png',
      alt: 'Voice Acting Logo',
      width: 100,
      height: 100,
    },
    buttonProps: { variant: 'contained', color: 'brandPurple' },
  },
  {
    title: 'Re:cycle of the Penguindrum',
    role: 'Purinchu',
    link: 'https://coqui.monster/voice-acting',
    imageData: {
      src: '/images/brand/about.png',
      alt: 'Voice Acting Logo',
      width: 100,
      height: 100,
    },
    buttonProps: { variant: 'contained', color: 'brandPurple' },
  },
  {
    title: 'Title 3',
    link: 'https://coqui.monster/voice-acting',
    imageData: {
      src: '/images/brand/about.png',
      alt: 'Voice Acting Logo',
      width: 100,
      height: 100,
    },
    buttonProps: { variant: 'contained', color: 'brandPurple' },
  },
  {
    title: 'Title 4',
    link: 'https://coqui.monster/voice-acting',
    imageData: {
      src: '/images/brand/about.png',
      alt: 'Voice Acting Logo',
      width: 100,
      height: 100,
    },
    buttonProps: { variant: 'contained', color: 'brandPurple' },
  },
];

export const supportSection = [
  {
    text: '3AM Store',
    link: 'https://store.3am.moe/',
    tooltip: 'Team Merch Store',
    icon: <ThreeAmLogo color='black' />,
    buttonProps: { variant: 'contained', color: 'brand3AM' },
  },
  {
    text: 'UWU Market',
    link: 'https://uwumarket.us/collections/coqui',
    tooltip: 'Merch Collaboration',
    icon: <IconShoppingBag />,
    buttonProps: { sx: { color: 'black' }, variant: 'contained', color: 'uwu' },
  },
  {
    text: 'Throne',
    link: 'https://throne.com/coqui',
    tooltip: 'Direct Support',
    icon: <IconGift />,
    buttonProps: { variant: 'contained', color: 'throne' },
  },
  {
    text: 'Gamer Supps',
    link: 'https://gamersupps.gg/?ref=COQUI',
    tooltip: 'Affiliate',
    icon: <IconBabyBottle />,
    buttonProps: {
      sx: { color: 'black' },
      variant: 'contained',
      color: 'gamerSupps',
    },
  },
  {
    text: 'Humble Partner',
    link: 'https://www.humblebundle.com/?partner=coqui&charity=78175',
    tooltip: 'Affiliate',
    icon: <IconDeviceGamepad2 />,
    buttonProps: {
      sx: { color: 'black' },
      variant: 'contained',
      color: 'humble',
    },
  },
];

export const socials = [
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv/coqui',
    icon: <IconBrandTwitch />,
    iconColor: '#9147FF',
    renderLocation: ['Footer', 'Header'],
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/c0qui',
    icon: <IconBrandTwitter />,
    iconColor: '#1DA1F2',
    renderLocation: ['Footer', 'Header'],
  },
  {
    name: 'Discord',
    url: 'https://discord.com/invite/TheSouthSide',
    icon: <IconBrandDiscord />,
    iconColor: '#7289DA',
    renderLocation: ['Footer', 'Header'],
  },
  {
    name: 'OnlyFrogs',
    url: 'https://discord.com/invite/TheSouthSide',
    icon: <IconBrandOnlyfans />,
    iconColor: '#00BFFF',
    renderLocation: ['Header'],
  },
  {
    name: 'Steam Group',
    url: 'https://steamcommunity.com/groups/SouthSideBros',
    icon: <IconBrandSteam />,
    iconColor: '#6290EE',
    renderLocation: ['Header'],
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@C0QUI',
    icon: <IconBrandYoutube />,
    iconColor: '#FF0000',
    renderLocation: ['Footer', 'Header'],
  },
  {
    name: 'Clips Channel',
    url: 'https://www.youtube.com/rummyandcoqui',
    icon: <IconBrandYoutube />,
    iconColor: '#FF0000',
    renderLocation: ['Header'],
  },
  {
    name: '3AM',
    url: 'https://www.3am.moe',
    icon: <ThreeAmLogo color='white' />,
    iconColor: '#948DE8', // color follows the white override above, but iconColor is used for the hover effect
    renderLocation: ['Footer', 'Header'],
  },
  {
    name: 'Visual Novel',
    url: 'https://rummyandcoqui.itch.io/rummy-and-coqui-valenskinks-day',
    icon: <IconBook />,
    iconColor: '#FF00FF',
    renderLocation: ['Header'],
  },
  {
    name: 'Assets',
    url: 'https://discord.com/channels/786373342549770260/973817255177629696',
    icon: <IconBrush />,
    iconColor: '#FFD700',
    renderLocation: ['Header'],
  },
];

export const mainCredits = [
  {
    link: 'https://twitter.com/tsulala',
    title: '🎨 Rem 🎨',
    body: (
      <>
        Ma1 Ma2 Ma3 Ma4
        <br />
        Ma5 Ma6
      </>
    ),
  },
  {
    link: 'https://twitter.com/AriyaSusanto',
    title: '🎨 Pops 🎨',
    body: 'ARS',
  },
  {
    link: 'https://twitter.com/JustBiddy_',
    title: 'MV',
    body: 'Vicky',
  },
  {
    link: 'https://twitter.com/king_kriminal',
    title: 'Logo1 Logo2 Logo3 Logo4',
    body: 'Krimbo',
  },
];

export const musicCredits = [
  {
    songName: '🎶 OP * BRB Music 🎶',
    artist: 'InfoDrive',
    track: '/music/resetMan.mp3',
    songLink: 'https://www.twitch.tv/infodrive',
    artistSocials: 'https://www.twitch.tv/infodrive',
    image: 'https://via.placeholder.com/150',
  },
  {
    songName: '🎶 Just chatting song 🎶',
    artist: 'Lucianus',
    track: '/music/pyite.mp3',
    songLink: '',
    artistSocials: '',
    image: 'https://via.placeholder.com/150',
  },
];

export const miscCredits = [
  {
    link: 'https://twitter.com/Faulerro',
    title: '🎥 Animations 🎥',
    body: 'Faulerro',
  },
  {
    link: 'https://twitter.com/OverdriveVT',
    title: '🎨 Channel Icon 🎨',
    body: 'Sierra',
  },
  {
    link: 'https://twitter.com/MuttleyStrike',
    title: '🎨 ALT MODEL - FROGSUIT 🎨',
    body: 'MuttleyStrike',
  },
  {
    link: 'https://www.twitch.tv/pumpiino',
    title: '🎨 ALT MODEL - SEWER WATER 🎨',
    body: 'Pumpiino',
  },
  {
    link: 'https://twitter.com/Inkcurry',
    title: '🎨 ALT MODEL - FROG PUPPET 🎨',
    body: 'Inkcurry',
  },
  {
    link: '',
    title: '🎥 Animated "Now Loading" Screen 🎥',
    body: 'Suzuya_Cry',
  },
  {
    link: 'https://twitter.com/fenef033',
    title: '🎨 BRB Screen 🎨',
    body: 'fenef033',
  },
  {
    link: 'https://www.twitch.tv/pickychannel',
    title: '🎨 Ending Screen 🎨',
    body: 'PickyChannel',
  },
  {
    link: 'https://twitter.com/flivine',
    title: '🎨 Channel Points Icon 🎨',
    body: 'Fliv',
  },
  {
    link: 'https://twitter.com/DiamondRoseArt',
    title: '🎨 C-Word Pass Icon 🎨',
    body: 'ADiamondRose',
  },
  {
    link: 'https://twitter.com/NotChaott',
    title: '🎨 Blush Emote 🎨',
    body: 'NotChaott',
  },
  {
    link: 'https://twitter.com/_VioletSketches',
    title: '🎤 Follow Alert 🎤',
    body: 'VioletSketches',
  },
  {
    link: 'https://www.twitch.tv/romavt',
    title: '🎤 Follow Alert 🎤',
    body: 'Roma',
  },
  {
    link: 'https://twitter.com/drynapp',
    title: '🎨 Lobby Winter Art 🎨',
    body: 'drynapp',
  },
  {
    link: 'https://twitter.com/andouilles',
    title: '🎨 Halloween Cat Chibi 🎨',
    body: 'Andouilles',
  },
  {
    link: 'https://ko-fi.com/svnnydraw',
    title: '🎥 Halloween Witch Loading Screen 🎥',
    body: 'SynnyDraw',
  },
  {
    link: 'https://skeb.jp/@rion04170419',
    title: '🎨 Twitch Banner 🎨',
    body: 'rion04170419',
  },
  {
    link: 'https://twitter.com/Shenrix_',
    title: '🎨 Channel Emotes 🎨',
    body: 'Shenrix',
  },
  {
    link: '',
    title: '🎨 Channel Emotes 🎨',
    body: 'Migu',
  },
];
