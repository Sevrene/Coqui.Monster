import {
  IconBabyBottle,
  IconBook,
  IconBrandDiscord,
  IconBrandMinecraft,
  IconBrandOnlyfans,
  IconBrandSteam,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrush,
  IconGift,
  IconShoppingBag,
} from '@tabler/icons-react';

import { FolderSharedOutlined } from '@mui/icons-material';
import { constStyles } from './styles/constStyles';
import ThreeAmLogo from './utils/customSvgComponents';

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

export const voiceActingRoles = [
  {
    title: 'Urusei Yatsura',
    role: 'Ten',
    link: 'https://www.animenewsnetwork.com/encyclopedia/anime.php?id=25106',
    imageData: {
      src: '/images/voice_roles/ten.png',
      alt: 'Ten from Urusei Yatsura',
    },
  },
  {
    title: 'Re:cycle of the Penguindrum',
    role: 'Purinchu',
    link: 'https://www.animenewsnetwork.com/encyclopedia/anime.php?id=24213',
    imageData: {
      src: '/images/voice_roles/purinchu.png',
      alt: 'Purinchu from Re:cycle of the Penguindrum',
    },
  },
  {
    title: 'Oshi no Ko',
    role: 'Misc Roles',
    link: 'https://www.animenewsnetwork.com/encyclopedia/anime.php?id=25783',
    imageData: {
      src: '/images/voice_roles/oshi_no_ko.jpg',
      alt: 'X from Oshi no Ko',
    },
  },
];

export const supportSection = [
  {
    text: '3AM Store',
    link: 'https://store.3am.moe/',
    tooltip: 'Team Merch Store',
    icon: <ThreeAmLogo color='black' />,
    buttonProps: {
      variant: 'contained',
      color: 'brand3AM',
    },
  },
  {
    text: 'UWU Market',
    link: 'https://uwumarket.us/collections/coqui',
    tooltip: 'Merch Collaboration',
    icon: <IconShoppingBag />,
    buttonProps: {
      variant: 'contained',
      color: 'brandAccent',
    },
  },
  {
    text: 'Throne',
    link: 'https://throne.com/coqui',
    tooltip: 'Direct Support',
    icon: <IconGift />,
    buttonProps: { variant: 'contained', color: 'brandAccent' },
  },
  {
    text: 'Gamer Supps',
    link: 'https://gamersupps.gg/?ref=COQUI',
    tooltip: 'Affiliate',
    icon: <IconBabyBottle />,
    buttonProps: {
      variant: 'contained',
      color: 'brandAccent',
    },
  },
];

export const communitySection = [
  {
    text: '3AM Discord',
    link: 'https://discord.com/invite/3AMParty',
    tooltip: '3AM Discord',
    icon: <ThreeAmLogo color='black' />,
    buttonProps: {
      variant: 'contained',
      color: 'brand3AM',
    },
  },
  {
    text: 'South Side Discord',
    link: 'https://discord.com/invite/TheSouthSide',
    tooltip: 'South Side Discord',
    icon: <IconBrandDiscord />,
    buttonProps: {
      variant: 'contained',
      color: 'brandAccent',
    },
  },
  {
    text: 'Coqui Discord',
    link: 'http://discord.gg/COQUI',
    tooltip: 'Coqui Discord',
    icon: <IconBrandDiscord />,
    buttonProps: {
      variant: 'contained',
      color: 'brand3AM',
    },
  },
  {
    text: 'Steam Group',
    link: 'https://steamcommunity.com/groups/SouthSideBros',
    tooltip: 'Community Steam Group',
    icon: <IconBrandSteam />,
    buttonProps: {
      variant: 'contained',
      color: 'brandAccent',
    },
  },
  {
    text: 'Minecraft Server',
    link: 'https://discord.com/channels/786373342549770260/1180826995605647441/1248480272488595556',
    tooltip: 'Community Minecraft Server',
    icon: <IconBrandMinecraft />,
    buttonProps: {
      variant: 'contained',
      color: 'brandAccent',
    },
  },
  {
    text: 'Cobblemon Server',
    link: 'https://discord.com/channels/786373342549770260/1180826995605647441/1311871230986686535',
    tooltip: 'Community Cobblemon Server',
    icon: <IconBrandMinecraft />,
    buttonProps: {
      variant: 'contained',
      color: 'brandAccent',
    },
  },
  {
    text: 'Visual Novel',
    link: 'https://rummyandcoqui.itch.io/rummy-and-coqui-valenskinks-day',
    tooltip: "Valenskins' Day Visual Novel",
    icon: <IconBook />,
    buttonProps: {
      variant: 'contained',
      color: 'brandAccent',
    },
  },
  {
    text: 'Coqui Assets',
    link: 'https://discord.com/channels/786373342549770260/973817255177629696',
    tooltip: 'Discord Assets Channel',
    icon: <IconBrush />,
    buttonProps: {
      variant: 'contained',
      color: 'brandAccent',
    },
  },
  {
    text: 'Reference Sheet',
    link: 'https://drive.google.com/drive/folders/14Iw_VApXjpfCAtxqy7s4HDZPlHvos1TA',
    tooltip: 'Coqui Reference Sheet',
    icon: <FolderSharedOutlined />,
    buttonProps: {
      variant: 'contained',
      color: 'brandAccent',
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
    name: 'OnlyFrogs',
    url: 'https://discord.com/invite/TheSouthSide',
    icon: <IconBrandOnlyfans />,
    iconColor: '#00BFFF',
    renderLocation: ['Footer', 'Header'],
  },
  {
    name: 'Clips Channel',
    url: 'https://www.youtube.com/@C0QUI',
    icon: <IconBrandYoutube />,
    iconColor: '#FF0000',
    renderLocation: ['Footer', 'Header'],
  },
  {
    name: '3AM',
    url: 'https://www.3am.moe',
    icon: <ThreeAmLogo color='white' />,
    iconColor: '#948DE8', // color follows the white override above, but iconColor is used for the hover effect
    renderLocation: ['Footer', 'Header'],
  },
];

export const mainCredits = [
  {
    link: 'https://twitter.com/tsulala',
    title: 'Rem',
    body: 'Artist',
    image: '/images/credits_art/Rem.jpg',
  },
  {
    link: 'https://twitter.com/Calavera_vt',
    title: 'Calavera',
    body: 'Rigger',
    image: '/images/credits_art/Calavera.jpg',
  },
  {
    link: 'https://twitter.com/JustBiddy_',
    title: 'Vicky',
    body: 'Intro',
    image: '/images/credits_art/Vicky.jpg',
  },
];

export const musicCredits = [
  {
    songName: 'The Way of the Coqui',
    artist: 'InfoDrive',
    track: '',
    songLink: 'https://soundcloud.com/infodrive_vt/the-way-of-the-coqui',
    artistSocials: 'https://www.twitch.tv/infodrive',
    image: '/images/song_art/infoDrive_all.png',
  },
  {
    songName: 'Terrorizer',
    artist: 'InfoDrive',
    track: '',
    songLink: 'https://soundcloud.com/infodrive_vt/terrorizer',
    artistSocials: 'https://www.twitch.tv/infodrive',
    image: '/images/song_art/infoDrive_all.png',
  },
  {
    songName: 'Badass',
    artist: 'InfoDrive',
    track: '',
    songLink: 'https://soundcloud.com/infodrive_vt/badass',
    artistSocials: 'https://www.twitch.tv/infodrive',
    image: '/images/song_art/infoDrive_all.png',
  },
  {
    songName: 'Fall In',
    artist: 'InfoDrive',
    track: '',
    songLink: 'https://soundcloud.com/infodrive_vt/fall-in',
    artistSocials: 'https://www.twitch.tv/infodrive',
    image: '/images/song_art/infoDrive_all.png',
  },
  {
    songName: "Flexin'",
    artist: 'InfoDrive',
    track: '',
    songLink: 'https://soundcloud.com/infodrive_vt/flexin',
    artistSocials: 'https://www.twitch.tv/infodrive',
    image: '/images/song_art/infoDrive_all.png',
  },
  {
    songName: 'Froggy Footwork',
    artist: 'InfoDrive',
    track: '',
    songLink: 'https://soundcloud.com/infodrive_vt/froggy-footwork',
    artistSocials: 'https://www.twitch.tv/infodrive',
    image: '/images/song_art/infoDrive_all.png',
  },
  {
    songName: 'From The Top',
    artist: 'InfoDrive',
    track: '',
    songLink: 'https://soundcloud.com/infodrive_vt/from-the-top',
    artistSocials: 'https://www.twitch.tv/infodrive',
    image: '/images/song_art/infoDrive_all.png',
  },
  {
    songName: 'Bells Of The Frog',
    artist: 'InfoDrive',
    track: '',
    songLink: 'https://soundcloud.com/infodrive_vt/bells-of-the-frog',
    artistSocials: 'https://www.twitch.tv/infodrive',
    image: '/images/song_art/infoDrive_all.png',
  },
  {
    songName: 'Köngäs - Ocho (feat. Coqui)',
    artist: 'Köngäs',
    track: '',
    songLink: 'https://distrokid.com/hyperfollow/kngs3/ocho-feat-coqui-2',
    artistSocials: 'https://hyperfollow.com/kongas',
    image: '/images/song_art/kongas_ocho.jpg',
  },
  {
    songName: 'A Relaxing Army of Frogs',
    artist: 'CrossingsVT',
    track: 'aRelaxingArmyOfFrogs_crossingsVT.mp3',
    songLink: 'https://on.soundcloud.com/tPZnEY8cinvFS87h9',
    artistSocials: 'https://twitter.com/CrossingsVT',
    image: '/images/song_art/generic.jpg',
  },
  {
    songName: 'The Nyaa Song',
    artist: 'Nodens',
    track: 'theNyaaSong_nodens.mp3',
    songLink: '',
    artistSocials: 'https://twitter.com/Nodens64',
    image: '/images/song_art/generic.jpg',
  },
  {
    songName: 'The Licker Store',
    artist: 'HardNormalMatty',
    track: 'lickerStore_hardNormalMatty.mp3',
    songLink: 'https://soundcloud.com/hnmatty/licker-store',
    artistSocials: 'https://hogchildsound.bandcamp.com',
    image: '/images/song_art/matty_lickerStore.jpg',
  },
  {
    songName: 'Delinquent Grace',
    artist: 'corpse_ch',
    track: 'delinquentGrace_corpse.mp3',
    songLink: 'https://www.youtube.com/watch?v=MrrnZsMFxJA',
    artistSocials: 'https://x.com/corpse_ch',
    image: '/images/song_art/corpse_delinquentGrace.jpg',
  },
];

export const miscCredits = [
  {
    link: 'https://twitter.com/king_kriminal',
    title: 'Krimbo',
    body: '1.0 Logo',
    image: '/images/credits_art/Krimbo.jpg',
  },
  {
    link: 'https://twitter.com/AriyaSusanto',
    title: 'ARS',
    body: '1.0 Pops',
    image: '/images/credits_art/ARS.jpg',
  },
  {
    link: 'https://twitter.com/Faulerro',
    title: 'Faulerro',
    body: 'Channel Emotes',
    image: '/images/credits_art/Faulerro.jpg',
  },
  {
    link: 'https://twitter.com/MachachaFulgrim',
    title: 'Macha-cha',
    body: 'Channel Emotes',
    image: '/images/credits_art/Macha-cha.jpg',
  },
  {
    link: 'https://twitter.com/FoxReallyWell',
    title: 'FoxFriend4U',
    body: 'Channel Emotes',
    image: '/images/credits_art/FoxFriend4U.jpg',
  },
  {
    link: 'https://twitter.com/theblortch',
    title: 'TheBlortch',
    body: 'Animations & Emotes',
    image: '/images/credits_art/TheBlortch.jpg',
  },
  {
    link: 'https://twitter.com/MuttleyStrike',
    title: 'MuttleyStrike',
    body: 'Alt Model - Frogsuit',
    image: '/images/credits_art/MuttleyStrike.jpg',
  },
  {
    link: 'https://www.twitch.tv/pumpiino',
    title: 'Pumpiino',
    body: 'Alt Model - Sewer Water',
    image: '/images/credits_art/Pumpiino.jpg',
  },
  {
    link: 'https://twitter.com/Inkcurry',
    title: 'Inkcurry',
    body: 'Alt Model - Frog Puppet',
    image: '/images/credits_art/Inkcurry.jpg',
  },
  {
    link: '',
    title: 'Suzuya_Cry',
    body: 'Animated "Now Loading" Screen',
    image: '/images/credits_art/generic.jpg',
  },
  {
    link: 'https://twitter.com/fenef033',
    title: 'fenef033',
    body: 'BRB Screen',
    image: '/images/credits_art/fenef033.jpg',
  },
  {
    link: 'https://twitter.com/flivine',
    title: 'Fliv',
    body: 'Channel Points Icon',
    image: '/images/credits_art/Fliv.jpg',
  },
  {
    link: 'https://twitter.com/DiamondRoseArt',
    title: 'ADiamondRose',
    body: 'C-Word Pass Icon',
    image: '/images/credits_art/ADiamondRose.jpg',
  },
  {
    link: 'https://twitter.com/NotChaott',
    title: 'NotChaott',
    body: 'Blush Emote',
    image: '/images/credits_art/NotChaott.jpg',
  },
  {
    link: '',
    title: 'Roma',
    body: 'Follow Alert',
    image: '/images/credits_art/generic.jpg',
  },
  {
    link: 'https://twitter.com/drynapp',
    title: 'drynapp',
    body: 'Lobby Winter Art',
    image: '/images/credits_art/drynapp.jpg',
  },
  {
    link: 'https://twitter.com/andouilles',
    title: 'Andouilles',
    body: 'Halloween Cat Chibi',
    image: '/images/credits_art/Andouilles.jpg',
  },
  {
    link: 'https://ko-fi.com/svnnydraw',
    title: 'SynnyDraw',
    body: 'Halloween Witch Loading Screen',
    image: '/images/credits_art/SynnyDraw.jpg',
  },
  {
    link: 'https://skeb.jp/@rion04170419',
    title: 'rion04170419',
    body: 'Twitch Banner',
    image: '/images/credits_art/rion04170419.jpg',
  },
  {
    link: 'https://twitter.com/Shenrix_',
    title: 'Shenrix',
    body: 'Channel Emotes',
    image: '/images/credits_art/Shenrix.jpg',
  },
  {
    link: '',
    title: 'Migu',
    body: 'Channel Emotes',
    image: '/images/credits_art/generic.jpg',
  },
];
