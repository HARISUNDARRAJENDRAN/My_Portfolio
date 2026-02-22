import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

type ContributionDay = {
  contributionCount: number;
  date: string;
  contributionLevel: ContributionLevel;
  weekday: number;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type ContributionMonth = {
  name: string;
  firstDay: string;
  totalWeeks: number;
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: ContributionWeek[];
  months: ContributionMonth[];
};

type GraphQlResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: ContributionCalendar;
      };
    };
  };
  errors?: Array<{ message: string }>;
};

const query = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          months {
            name
            firstDay
            totalWeeks
          }
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
              weekday
            }
          }
        }
      }
    }
  }
`;

export async function GET(request: NextRequest) {
  const token = process.env.GITHUB_TOKEN;
  const username = request.nextUrl.searchParams.get("username") ?? "HARISUNDARRAJENDRAN";

  if (!token) {
    return NextResponse.json(
      { error: "Missing GITHUB_TOKEN. Add it to your environment variables." },
      { status: 500 }
    );
  }

  const now = new Date();
  const from = new Date(now);
  from.setFullYear(now.getFullYear() - 1);

  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        username,
        from: from.toISOString(),
        to: now.toISOString(),
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub activity." },
      { status: response.status }
    );
  }

  const result = (await response.json()) as GraphQlResponse;

  if (result.errors?.length) {
    return NextResponse.json(
      { error: result.errors[0].message },
      { status: 500 }
    );
  }

  const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;

  if (!calendar) {
    return NextResponse.json({ error: "No contribution data found." }, { status: 404 });
  }

  return NextResponse.json({
    username,
    totalContributions: calendar.totalContributions,
    months: calendar.months,
    weeks: calendar.weeks,
  });
}
