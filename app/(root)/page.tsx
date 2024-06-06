"use client";
import { useQuery } from "convex/react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <>
    <div className="mt-9 text-white-1 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-white-1 text-20 font-bold">Trending Podcasts</h1>
        <div className="podcast_grid">
          <div>{podcastData.map(({id,title,description,imgURL})=>{
      return(
        <PodcastCard  key={id} imgUrl={imgURL} title={title}  description={description} podcastId={id} />
        
      )
    })}</div>
        </div>
      </section>
      
    </div>
    </>
  );
}
