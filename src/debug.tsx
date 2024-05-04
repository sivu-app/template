import { z } from "zod";
import {
  BaseUnitSchema,
  type UnitRenderProps,
  type UnitFormProps,
  type UnitFuncs,
} from "@sivu-app/next";

const key = "media";

const Data = z.object({
  text: z.string(),
});
type Data = z.infer<typeof Data>;

const data: Data = {
  text: "",
};

const Schema = BaseUnitSchema.merge(
  z.object({
    name: z.literal(key),
    data: Data,
  })
);

const Render = (props: UnitRenderProps<Data>) => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  );
};

const Form = (props: UnitFormProps<Data>) => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  );
};

export const Debug = {
  data,
  Form,
  Render,
  Schema,
  variant: undefined,
} satisfies UnitFuncs<Data>;
