import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { blogPosts, getBlogPost } from "@/data/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    ogImage: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />

      <article>
        <section className="bg-gradient-to-br from-forest-900 to-forest-950 py-16 md:py-20">
          <Container size="narrow">
            <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
            <Badge className="mt-4 mb-4 bg-forest-50 text-forest-700">{post.category}</Badge>
            <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">{post.title}</h1>
            <p className="mt-4 text-white/70">
              {new Date(post.publishedAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
            </p>
          </Container>
        </section>

        <Section>
          <Container size="narrow">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" priority />
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
              <p className="text-lg leading-relaxed">{post.content}</p>
              <p className="leading-relaxed">
                At Fresh Edges Services, we help Edmonton property owners and facility managers
                maintain exceptional standards year-round. Whether you need commercial cleaning,
                residential care, landscaping, or snow removal, our team delivers results you can trust.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <Button asChild className="bg-forest-600 hover:bg-forest-700">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/blog">Back to Blog</Link>
              </Button>
            </div>
          </Container>
        </Section>
      </article>
    </>
  );
}
