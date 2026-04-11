import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  ArrowRightIcon,
  EyeIcon,
  RocketIcon,
  SparklesIcon,
  UserIcon,
} from "lucide-react";
import StatsCard from "./stats-card";

const LiveBadge = () => {
  return (
    <Badge
      variant="outline"
      className="px-4 py-2 mb-8 text-sm backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      <span className="text-muted-foreground">
        Join thousean of creators theri work
      </span>
    </Badge>
  );
};

const stateData = [
  {
    icon: RocketIcon,
    Value: "2.5K+",
    lable: "Project Shared",
  },

  {
    icon: UserIcon,
    Value: "10K+",
    lable: "Active Creators",
    hasBorder: true
  },

  {
    icon: EyeIcon,
    Value: "50k+",
    lable: "Monthly Visitor",
  },
];

const Herosection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
          <LiveBadge />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
            Share What You&apos;ve Built, Discover What&apos;s Launching
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ullam
            quas quo excepturi ab repudiandae reiciendis aliquid incidunt magnam
            doloremque dolores fuga libero al?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="text-base px-8 shadow-lg">
              <SparklesIcon className="size-5" />
              <Link href="/submit">Share Your Project</Link>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="text-base px-8 shadow-lg"
            >
              <Link href="/explore">Explore Projects</Link>
              <ArrowRightIcon className="size-5" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
            {stateData.map((stat) => (
              <StatsCard key={stat.lable} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
