import client from "@/app/sanity/client";
import {PortableText} from '@portabletext/react'

const BlogsContent = async (context) => {
  const id = context.params.id;
  const res = await client.fetch(
           `*[_type == "blogs" && slug.current=="${id}" ]{}`
  );
    return (
      <PortableText value={res && res[0] && res[0].blogeDscription} />
    )
}

export default BlogsContent;
