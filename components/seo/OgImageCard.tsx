type OgImageCardProps = {
  eyebrow: string;
  title: string;
  description?: string;
  category?: string;
  variant?: "default" | "blog" | "sites" | "ads" | "tracking";
  accentColor?: string;
  footerLabel?: string;
};

const variantConfig = {
  default: {
    accentColor: "#FF3366",
    panelColor: "#FFF0F4",
    footerLabel: "Сайты • Реклама • Аналитика",
  },
  blog: {
    accentColor: "#FFD166",
    panelColor: "#FFF6D8",
    footerLabel: "Новые статьи HaloAgency",
  },
  sites: {
    accentColor: "#FFD166",
    panelColor: "#FFF6D8",
    footerLabel: "Структура • Доверие • SEO",
  },
  ads: {
    accentColor: "#FF3366",
    panelColor: "#FFE8F0",
    footerLabel: "Клики • Лиды • Продажи",
  },
  tracking: {
    accentColor: "#06D6A0",
    panelColor: "#E8FFF7",
    footerLabel: "Данные • События • Атрибуция",
  },
} as const;

function DefaultMotif({ accentColor }: { accentColor: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        width: "100%",
      }}
    >
      {["Web", "Ads", "Data"].map((label, index) => (
        <div
          key={label}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "20px",
            border: "3px solid #1A1A1A",
            backgroundColor: "#FFFFFF",
            padding: "16px 18px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "18px",
              height: "18px",
              borderRadius: "999px",
              backgroundColor: accentColor,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 800,
            }}
          >
            {label}
          </div>
          <div
            style={{
              display: "flex",
              width: `${54 + index * 16}px`,
              height: "10px",
              borderRadius: "999px",
              backgroundColor: "rgba(26, 26, 26, 0.14)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function BlogMotif({ accentColor }: { accentColor: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        width: "100%",
      }}
    >
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            borderRadius: "20px",
            border: "3px solid #1A1A1A",
            backgroundColor: "#FFFFFF",
            padding: "18px",
            transform: `translateX(${index * 12}px)`,
          }}
        >
          <div
            style={{
              display: "flex",
              width: `${110 - index * 8}px`,
              height: "12px",
              borderRadius: "999px",
              backgroundColor: accentColor,
            }}
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "10px",
              borderRadius: "999px",
              backgroundColor: "rgba(26, 26, 26, 0.12)",
            }}
          />
          <div
            style={{
              display: "flex",
              width: `${130 - index * 14}px`,
              height: "10px",
              borderRadius: "999px",
              backgroundColor: "rgba(26, 26, 26, 0.12)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function SitesMotif() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          borderRadius: "22px",
          border: "3px solid #1A1A1A",
          backgroundColor: "#FFFFFF",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              style={{
                display: "flex",
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                backgroundColor:
                  dot === 0 ? "#FFD166" : "rgba(26, 26, 26, 0.15)",
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            height: "54px",
            borderRadius: "16px",
            backgroundColor: "#FFF6D8",
            border: "3px solid #1A1A1A",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "14px",
        }}
      >
        {[88, 118].map((height, index) => (
          <div
            key={height}
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: "10px",
              borderRadius: "22px",
              border: "3px solid #1A1A1A",
              backgroundColor: "#FFFFFF",
              padding: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: `${56 + index * 20}px`,
                height: "10px",
                borderRadius: "999px",
                backgroundColor: "#FFD166",
              }}
            />
            <div
              style={{
                display: "flex",
                height: `${height}px`,
                borderRadius: "16px",
                backgroundColor: "rgba(255, 209, 102, 0.35)",
                border: "3px solid #1A1A1A",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function AdsMotif() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "12px",
          height: "152px",
          padding: "16px 10px 0",
          borderRadius: "22px",
          border: "3px solid #1A1A1A",
          backgroundColor: "#FFFFFF",
        }}
      >
        {[56, 92, 128, 164].map((height, index) => (
          <div
            key={height}
            style={{
              display: "flex",
              width: "42px",
              height: `${height}px`,
              borderRadius: "14px 14px 0 0",
              backgroundColor:
                index % 2 === 0 ? "#FF3366" : "rgba(255, 51, 102, 0.25)",
              border: "3px solid #1A1A1A",
              borderBottom: "0px solid transparent",
            }}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        {["CPC", "CTR", "ROAS"].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              border: "3px solid #1A1A1A",
              backgroundColor: "#FFFFFF",
              padding: "12px 8px",
              fontSize: "22px",
              fontWeight: 800,
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function TrackingMotif() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        {[
          { label: "GA4", value: "24/7" },
          { label: "GTM", value: "OK" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: "10px",
              borderRadius: "22px",
              border: "3px solid #1A1A1A",
              backgroundColor: "#FFFFFF",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: 800,
                color: "rgba(26, 26, 26, 0.5)",
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "32px",
                fontWeight: 800,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          borderRadius: "22px",
          border: "3px solid #1A1A1A",
          backgroundColor: "#FFFFFF",
          padding: "18px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {[0, 1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                borderRadius: "999px",
                backgroundColor:
                  dot === 4 ? "#06D6A0" : "rgba(6, 214, 160, 0.3)",
                border: "2px solid #1A1A1A",
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {[36, 64, 92, 128].map((height) => (
            <div
              key={height}
              style={{
                display: "flex",
                flex: 1,
                height: `${height}px`,
                borderRadius: "14px",
                backgroundColor: "rgba(6, 214, 160, 0.22)",
                border: "3px solid #1A1A1A",
                alignSelf: "flex-end",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function OgImageCard({
  eyebrow,
  title,
  description,
  category,
  variant = "default",
  accentColor,
  footerLabel: footerLabelOverride,
}: OgImageCardProps) {
  const titleFontSize = title.length > 70 ? 56 : title.length > 42 ? 66 : 74;
  const config = variantConfig[variant];
  const resolvedAccentColor = accentColor ?? config.accentColor;
  const footerLabel = footerLabelOverride ?? config.footerLabel;

  const motif =
    variant === "sites" ? (
      <SitesMotif />
    ) : variant === "ads" ? (
      <AdsMotif />
    ) : variant === "tracking" ? (
      <TrackingMotif />
    ) : variant === "blog" ? (
      <BlogMotif accentColor={resolvedAccentColor} />
    ) : (
      <DefaultMotif accentColor={resolvedAccentColor} />
    );

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        backgroundColor: "#F5F5F7",
        padding: "32px",
        color: "#1A1A1A",
        fontFamily:
          '"IBM Plex Sans", "Inter", "Arial", "Helvetica Neue", sans-serif',
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "36px",
          border: "4px solid #1A1A1A",
          backgroundColor: "#FFFFFF",
          boxShadow: "16px 16px 0 #1A1A1A",
          overflow: "hidden",
          padding: "52px 56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "24px",
            backgroundColor: resolvedAccentColor,
            borderLeft: "4px solid #1A1A1A",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            paddingRight: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "999px",
              border: "3px solid #1A1A1A",
              backgroundColor: resolvedAccentColor,
              color: resolvedAccentColor === "#FFD166" ? "#1A1A1A" : "#FFFFFF",
              boxShadow: "6px 6px 0 #1A1A1A",
              padding: "12px 22px",
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>

          {category ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "999px",
                border: "3px solid #1A1A1A",
                backgroundColor: "#FFFFFF",
                color: "#1A1A1A",
                padding: "12px 22px",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              {category}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "34px",
            alignItems: "stretch",
            paddingRight: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: "24px",
              maxWidth: "760px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: `${titleFontSize}px`,
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              {title}
            </div>

            {description ? (
              <div
                style={{
                  display: "flex",
                  maxWidth: "720px",
                  fontSize: "30px",
                  lineHeight: 1.32,
                  fontWeight: 500,
                  color: "rgba(26, 26, 26, 0.72)",
                }}
              >
                {description}
              </div>
            ) : null}
          </div>

          <div
            style={{
              display: "flex",
              width: "258px",
              minWidth: "258px",
              borderRadius: "28px",
              border: "3px solid #1A1A1A",
              backgroundColor: config.panelColor,
              boxShadow: "10px 10px 0 #1A1A1A",
              padding: "18px",
            }}
          >
            {motif}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            paddingRight: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "30px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              HaloAgency
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 600,
                color: "rgba(26, 26, 26, 0.6)",
              }}
            >
              haloagency.cz
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 700,
              color: "rgba(26, 26, 26, 0.45)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            {footerLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
