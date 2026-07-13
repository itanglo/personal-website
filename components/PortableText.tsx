import {
  PortableText as PortableTextRenderer,
  type PortableTextComponents,
} from "@portabletext/react";
import Link from "@/components/Link";

const components: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const href = value?.href ?? "#";
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            className="text-link underline"
          >
            {children}
          </a>
        );
      }
      return <Link href={href}>{children}</Link>;
    },
  },
};

export default function PortableText({ value }: { value: unknown[] }) {
  return <PortableTextRenderer value={value} components={components} />;
}