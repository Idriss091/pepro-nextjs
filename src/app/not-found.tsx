import Error404Content from "@/components/notFound/Error404Content";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeDark from "@/components/switcher/ThemeDark";

export default function NotFound() {
  return (
    <LayoutV1>
      <Error404Content />
      <ThemeDark />
    </LayoutV1>
  );
}
