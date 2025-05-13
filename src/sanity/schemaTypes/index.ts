import { type SchemaTypeDefinition } from 'sanity'
import { postType } from "./postType";
import { eventType } from "./eventType";
import { artistType } from './artistType';
import { venueType } from './venueType';
import { homeType } from "./homeType";
import { aboutType } from "./aboutType";
import { compositionsType } from './compositionsType';
import { contactType } from './contactType';
import { ethnomusicologyType } from './ethnomusicologyType';
import { eventsType } from './eventsType';
import { pianistType } from "./pianistType";

// https://www.sanity.io/learn/course/day-one-with-sanity-studio/getting-started
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, eventType, artistType, venueType, homeType, aboutType, compositionsType, contactType, ethnomusicologyType, eventsType, pianistType],
}
