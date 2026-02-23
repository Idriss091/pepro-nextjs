import type { ComponentType } from "react";

declare module "*.jsx" {
  const content: ComponentType<Record<string, unknown>>;
  export default content;
}
