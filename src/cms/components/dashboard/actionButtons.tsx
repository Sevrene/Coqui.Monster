'use client';

import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';

import { useState } from 'react';

type ActionKey = 'deploy' | 'build';

export default function ActionButtons() {
  const [loading, setLoading] = useState<Record<ActionKey, boolean>>({
    deploy: false,
    build: false,
  });
  const [success, setSuccess] = useState<Record<ActionKey, boolean | null>>({
    deploy: null,
    build: null,
  });
  const [confirmRebuild, setConfirmRebuild] = useState(false);

  const handleAction = async (key: ActionKey, url: string) => {
    setLoading((prev) => ({ ...prev, [key]: true }));
    setSuccess((prev) => ({ ...prev, [key]: false }));

    const response = await fetch(url, { method: 'POST' });

    setLoading((prev) => ({ ...prev, [key]: false }));
    setSuccess((prev) => ({ ...prev, [key]: response.ok }));

    setTimeout(() => {
      setSuccess((prev) => ({ ...prev, [key]: null }));
    }, 3000);
  };

  return (
    <Stack spacing={2}>
      <Box>
        <Box fontSize='1.5rem' fontWeight={600} mb={2}>
          Deploy
        </Box>
        <Tooltip
          title={
            <span style={{ fontSize: '1.1rem' }}>
              This will deploy the changes to the live site. Refresh main site
              to see changes.
            </span>
          }
          placement='top'
          arrow
        >
          <Button
            variant='contained'
            color={success.deploy ? 'success' : 'primary'}
            onClick={() => handleAction('deploy', '/api/revalidate')}
            disabled={loading.deploy}
            startIcon={loading.deploy ? <CircularProgress size={20} /> : null}
          >
            {success.deploy
              ? 'Deployed!'
              : loading.deploy
                ? 'Deploying...'
                : 'Deploy Changes'}
          </Button>
        </Tooltip>
        {success.deploy === false && !loading.deploy && (
          <Box mt={2} color='error.main' fontSize='0.95rem'>
            Deployment failed. Please contact the developer for support.
          </Box>
        )}
      </Box>
      <Stack direction='row' alignItems='center' spacing={1} mt={2}>
        <Typography color='error' fontWeight={700}>
          Danger Zone
        </Typography>
        <Tooltip
          title={
            <span style={{ fontSize: '1.1rem' }}>
              Enable to confirm possibly unintentional actions. This is a safety
              feature to prevent accidental rebuilds.
            </span>
          }
          placement='top'
          arrow
        >
          <Switch
            checked={confirmRebuild}
            onChange={(e) => setConfirmRebuild(e.target.checked)}
          />
        </Tooltip>
      </Stack>
      <Box>
        <Box fontSize='1.5rem' fontWeight={600} mb={2}>
          Rebuild
        </Box>
        <Tooltip
          title={
            <span style={{ fontSize: '1.1rem' }}>
              This will rebuild the site on Netlify. This is not the same as
              deploying changes. Will take a few minutes for changes to be
              reflected.
            </span>
          }
          placement='top'
          arrow
        >
          <span>
            <Button
              variant='contained'
              color={success.build ? 'success' : 'primary'}
              onClick={() => handleAction('build', '/api/rebuild')}
              disabled={loading.build || !confirmRebuild}
              startIcon={loading.build ? <CircularProgress size={20} /> : null}
            >
              {success.build
                ? 'Rebuild Complete!'
                : loading.build
                  ? 'Rebuilding...'
                  : 'Rebuild Site'}
            </Button>
          </span>
        </Tooltip>
        {success.build === false && !loading.build && (
          <Box mt={2} color='error.main' fontSize='0.95rem'>
            Rebuild failed. Please contact the developer for support.
          </Box>
        )}
      </Box>
    </Stack>
  );
}
