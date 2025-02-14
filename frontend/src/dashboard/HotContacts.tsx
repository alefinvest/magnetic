import ContactsIcon from "@mui/icons-material/Contacts";
import { Box, Card, Link } from "@mui/material";
import { formatDistance } from "date-fns";
import { SimpleList, useGetIdentity, useGetList } from "react-admin";
import { Link as RouterLink } from "react-router-dom";

import { Avatar } from "../contacts/Avatar";
import { Contact } from "../types";

export const HotContacts = () => {
  const { identity } = useGetIdentity();
  const {
    data: contactData,
    total: contactTotal,
    isLoading: contactsLoading,
  } = useGetList<Contact>(
    "contacts",
    {
      pagination: { page: 1, perPage: 10 },
      sort: { field: "last_seen", order: "DESC" },
      filter: { status: "hot", sales_id: identity?.id },
    },
    { enabled: !!identity?.id }
  );
  return (
    <>
      <Box display="flex" alignItems="center" marginBottom="1em">
        <Box ml={2} mr={2} display="flex">
          <ContactsIcon color="disabled" fontSize="large" />
        </Box>
        <Link
          underline="none"
          variant="h5"
          color="textSecondary"
          component={RouterLink}
          to="/contacts"
          id="hot-contacts"
        >
          Hot contacts
        </Link>
      </Box>
      <Card>
        <SimpleList<Contact>
          aria-describedby="hot-contacts"
          linkType="show"
          data={contactData}
          total={contactTotal}
          isLoading={contactsLoading}
          primaryText={(contact) =>
            `${contact.first_name} ${contact.last_name}`
          }
          resource="contacts"
          secondaryText={(contact: Contact) =>
            formatDistance(new Date(contact.last_seen), new Date(), {
              addSuffix: true,
            })
          }
          leftAvatar={(contact) => <Avatar record={contact} />}
        />
      </Card>
    </>
  );
};
