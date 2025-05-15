import { Avatar } from '@mui/material';

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
};

export default function AdminAvatar({
  src = '/images/default-avatar.png',
  alt = 'Admin Avatar',
  size = 32,
}: AvatarProps) {
  if (!src) {
    return null;
  }

  return (
    <Avatar
      src={src}
      alt={alt}
      sx={{ width: size, height: size, border: '1px solid white' }}
    />
  );
}
