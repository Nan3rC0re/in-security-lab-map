import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get("endpoint");

  const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN;
  const mapboxStyle = process.env.MAPBOX_STYLE;
  const crimesURL = process.env.CRIMES_URL;
  const crimesSources = process.env.CRIMES_SOURCES;

  if (!mapboxToken || !mapboxStyle || !crimesURL || !crimesSources) {
    return NextResponse.json(
      { error: "Environment variables are missing." },
      { status: 500 }
    );
  }

  switch (endpoint) {
    case "crimes":
      return NextResponse.json({
        token: mapboxToken,
        style: mapboxStyle,
        url: crimesURL,
        sources: crimesSources,
      });
    default:
      return NextResponse.json({ error: "Invalid endpoint." }, { status: 400 });
  }
}
