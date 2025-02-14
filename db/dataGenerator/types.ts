import { RaRecord } from "react-admin";

import {
  Company,
  Contact,
  ContactNote,
  Deal,
  Tag,
} from "../../frontend/src/types";

export interface Db {
  companies: Company[];
  contacts: Contact[];
  contactNotes: ContactNote[];
  deals: Deal[];
  dealNotes: RaRecord[];
  sales: RaRecord[];
  tags: Tag[];
  tasks: RaRecord[];
}
