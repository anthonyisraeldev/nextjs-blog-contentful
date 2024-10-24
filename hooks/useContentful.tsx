"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const GetContentfulPosts = () => {
  const { data, error } = useSWR("/api/contentful-entries", fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
