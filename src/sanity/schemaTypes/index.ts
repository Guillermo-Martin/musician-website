import { type SchemaTypeDefinition } from 'sanity'
import { postType } from "./postType";
import { eventType } from "./eventType";
import { artistType } from './artistType';
import { venueType } from './venueType';
import { homeType } from "./homeType";
import { aboutType } from "./aboutType";

// https://www.sanity.io/learn/course/day-one-with-sanity-studio/getting-started
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, eventType, artistType, venueType, homeType, aboutType],
}
