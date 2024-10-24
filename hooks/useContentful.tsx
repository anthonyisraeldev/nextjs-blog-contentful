"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const GetContentfulPosts = () => {
  const { data, error } = useSWR("/api/contentful-entries", fetcher, {
    refreshInterval: 1000,
  });

  // export const GetContentfulPosts = () => {
  // const { data, error } = useSWR("/api/contentful-entries", fetcher, {
  //   revalidateOnFocus: true, // Revalida al enfocar la ventana
  //   refreshInterval: 10000,  // Revalida automáticamente cada 10 segundos
  // });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
