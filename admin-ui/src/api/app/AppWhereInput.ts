import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AppWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
