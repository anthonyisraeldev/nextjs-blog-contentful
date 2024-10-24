"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Post from "@/interfaces/post";
import { GetContentfulPosts } from "@/hooks/useContentful";

export default function Home() {
  const { data, isLoading, isError } = GetContentfulPosts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading content.</p>;
  if (data.error) return <p>{data.error}</p>;

  const blogPosts: Post[] = data.items ?? [];

  return (
    <div className="">
      Primera pagina
      <section className="lg:px-16 px-2">
        <section className="flex justify-center items-center gap-x-4">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Link href={`/entradas/${post.fields.slug}`}>
                  <Image
                    src={`https:${post.fields.image.fields.file.url}`}
                    alt={post.fields.image.fields.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </Link>
              </div>
              <CardHeader>
                <CardTitle>{post.fields.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.fields.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="default">
                  <Link href={`/entradas/${post.fields.slug}`}>Leer más</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </section>
    </div>
  );
}
