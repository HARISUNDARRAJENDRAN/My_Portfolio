"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

type ContributionDayResponse = {
  contributionCount: number;
  date: string;
  contributionLevel: ContributionLevel;
};

type GitHubActivityResponse = {
  username: string;
  totalContributions: number;
  weeks: Array<{ contributionDays: ContributionDayResponse[] }>;
};

type ActivityCalendarItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((module) => module.ActivityCalendar),
  { ssr: false }
);

const contributionLevelMap: Record<ContributionLevel, ActivityCalendarItem["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export default function AboutMe() {
  const [activity, setActivity] = useState<GitHubActivityResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await fetch("/api/github-activity?username=HARISUNDARRAJENDRAN", {
          cache: "no-store",
        });
        const data = (await response.json()) as GitHubActivityResponse | { error: string };

        if (!response.ok || "error" in data) {
          const message = "error" in data ? data.error : "Failed to load GitHub activity.";
          throw new Error(message);
        }

        setActivity(data);
      } catch (fetchError) {
        const message = fetchError instanceof Error ? fetchError.message : "Failed to load GitHub activity.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, []);

  const contributions = useMemo<ActivityCalendarItem[]>(() => {
    if (!activity) {
      return [];
    }

    return activity.weeks
      .flatMap((week) => week.contributionDays)
      .map((item) => ({
        date: item.date,
        count: item.contributionCount,
        level: contributionLevelMap[item.contributionLevel],
      }));
  }, [activity]);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">About Me</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Harisundar.R
          </h3>
          <p className="mt-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Overfitted to system design contents, Undertrained on real-world datasets. Pending Generalization and currently running life in a single node cluster with no horizontal scaling
          </p>
        </div>

        <div className="section-card p-6">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
            Featured
          </div>
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                GitHub Activity
              </h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {loading ? (
                  <span>Loading contributions...</span>
                ) : (
                  <>
                    Total:{" "}
                    <span className="font-semibold">
                      {activity?.totalContributions.toLocaleString() ?? 0} contributions
                    </span>
                  </>
                )}
              </p>
            </div>
            <a
              href="https://github.com/HARISUNDARRAJENDRAN"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
            >
              View Profile
            </a>
          </div>

          {error ? (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          ) : loading ? (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Loading GitHub activity...</p>
          ) : contributions.length === 0 ? (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              No contribution activity available yet.
            </p>
          ) : (
            <div className="overflow-x-auto pb-2">
              <ActivityCalendar
                data={contributions}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                maxLevel={4}
                theme={{
                  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                labels={{
                  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
