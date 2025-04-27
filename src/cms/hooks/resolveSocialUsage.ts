import { FieldHook } from 'payload';

const resolveSocialUsage =
  (globalName: string): FieldHook =>
  async ({ req, value, data, siblingData }) => {
    if (data?._status !== 'published') {
      return;
    }

    // Query all socials where assignedTo includes globalName
    const assignedSocials = await req.payload.find({
      collection: 'socials',
      where: {
        assignedTo: {
          equals: globalName,
        },
      },
      limit: 999,
      draft: false,
    });

    // If siblingData has both socials and socialsSecondary, combine them into value (They both utilize the same globalName)
    if (siblingData?.socials && siblingData?.socialsSecondary) {
      value = [
        ...(siblingData.socials || []),
        ...(siblingData.socialsSecondary || []),
      ];
    }

    const previousSocials = assignedSocials.docs.map((social) => social.id);
    const currentSocials = Array.isArray(value) ? value : [];

    // Filter out the social IDs by new and old values
    const addedSocialIds = currentSocials.filter(
      (socialId) => !previousSocials.includes(socialId)
    );
    const removedSocialIds = previousSocials.filter(
      (socialId) => !currentSocials.includes(socialId)
    );

    for (const socialId of addedSocialIds) {
      const socialRecord = await req.payload.findByID({
        collection: 'socials',
        id: socialId,
      });

      if (socialRecord) {
        if (socialRecord.assignedTo?.includes(globalName)) {
          req.payload.logger.error(
            `Social ${socialRecord.name} is already assigned to ${globalName}`
          );

          continue;
        }

        if (socialRecord.assignedTo?.includes('None')) {
          await req.payload.update({
            req,
            collection: 'socials',
            id: socialId,
            data: {
              assignedTo: [globalName],
            },
          });

          continue;
        }

        await req.payload.update({
          req,
          collection: 'socials',
          id: socialId,
          data: {
            assignedTo: [...(socialRecord.assignedTo || []), globalName].sort(),
          },
        });
      }
    }

    for (const socialId of removedSocialIds) {
      const socialRecord = await req.payload.findByID({
        collection: 'socials',
        id: socialId,
      });

      if (socialRecord) {
        if (!socialRecord.assignedTo?.includes(globalName)) {
          req.payload.logger.error(
            `Social ${socialRecord.name} is not assigned to ${globalName}`
          );
          continue;
        }

        const updatedAssignedTo = (socialRecord.assignedTo || []).filter(
          (name: string) => name !== globalName
        );

        // NOTE: This is technically unwanted, but it is otherwise impossible to remove the last assignedTo value.
        // https://github.com/payloadcms/payload/issues/11127
        if (updatedAssignedTo.length === 0) {
          updatedAssignedTo.push('None');
        }

        await req.payload.update({
          req,
          collection: 'socials',
          id: socialId,
          data: {
            assignedTo: updatedAssignedTo,
          },
        });
      }
    }

    return;
  };

export default resolveSocialUsage;
