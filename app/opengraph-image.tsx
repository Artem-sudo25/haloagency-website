import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "HaloAgency - Онлайн-Реклама, Вебсайты, Автоматизация";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#030303", // Deep dark background
                    backgroundImage:
                        "radial-gradient(circle at 50% 50%, #1a1a2e 0%, #000000 100%)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 700,
                            color: "white",
                            marginBottom: 20,
                            letterSpacing: "-0.02em",
                            fontFamily: "sans-serif",
                        }}
                    >
                        HaloAgency
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: "#e0e0e0",
                            fontWeight: 300,
                            fontFamily: "sans-serif",
                        }}
                    >
                        Онлайн-Реклама, Вебсайты, Автоматизация
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
