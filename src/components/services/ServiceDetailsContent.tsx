import Link from "next/link";
import Image from "next/image";
import { getServicePath, services } from "@/data/services";

interface DataType {
  id?: number;
  title?: string;
  promise?: string;
  longDescription?: string;
  keyBenefits?: string[];
  problem?: string;
  solution?: string;
  targetAudience?: string;
  technologies?: string[];
  banner?: string;
}

interface ServiceDetailsProps {
  serviceInfo?: DataType;
  sectionClass?: string;
}

const AiAutomationGeneratedVisual = () => {
  const nodes = [
    { x: 18, y: 62 },
    { x: 30, y: 35 },
    { x: 42, y: 52 },
    { x: 56, y: 28 },
    { x: 60, y: 66 },
    { x: 74, y: 40 },
    { x: 82, y: 58 },
    { x: 48, y: 76 },
  ];

  const links: Array<[number, number]> = [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 5],
    [4, 5],
    [4, 6],
    [5, 6],
    [2, 7],
    [4, 7],
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        minHeight: 420,
        borderRadius: 16,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 20% 70%, rgba(0, 205, 255, 0.22), transparent 38%), radial-gradient(circle at 78% 35%, rgba(137, 92, 255, 0.24), transparent 42%), radial-gradient(circle at 85% 80%, rgba(88, 67, 255, 0.18), transparent 38%), linear-gradient(135deg, #020611 0%, #050a1f 45%, #090717 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.02)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.75))",
        }}
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="aiLink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66e5ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9b7dff" stopOpacity="0.45" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {links.map(([a, b], index) => (
          <line
            key={index}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#aiLink)"
            strokeWidth="0.25"
            opacity="0.8"
          />
        ))}

        {nodes.map((node, index) => (
          <g key={index} filter="url(#softGlow)">
            <circle
              cx={node.x}
              cy={node.y}
              r="0.95"
              fill={index % 2 === 0 ? "#7de9ff" : "#b298ff"}
              opacity="0.95"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="1.9"
              fill="none"
              stroke={index % 2 === 0 ? "#7de9ff" : "#b298ff"}
              strokeOpacity="0.25"
              strokeWidth="0.18"
            />
          </g>
        ))}

        <g opacity="0.75">
          {[10, 14, 18].map((r, index) => (
            <circle
              key={r}
              cx="28"
              cy="55"
              r={r}
              fill="none"
              stroke={index === 1 ? "#66e5ff" : "#8f79ff"}
              strokeOpacity={0.32 - index * 0.06}
              strokeWidth="0.28"
              strokeDasharray={index === 2 ? "2 2" : "none"}
            />
          ))}
          <path
            d="M28 41 A14 14 0 0 1 40 53"
            fill="none"
            stroke="#6fe9d8"
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 20% 70%, rgba(111, 233, 216, 0.12), transparent 20%), radial-gradient(circle at 70% 32%, rgba(143, 121, 255, 0.12), transparent 22%)",
        }}
      />
    </div>
  );
};

const ScientificDataGeneratedVisual = () => {
  const pointsA = [
    [10, 78],
    [20, 70],
    [30, 63],
    [40, 56],
    [50, 49],
    [60, 44],
    [70, 39],
    [80, 32],
    [90, 26],
  ];

  const pointsB = [
    [10, 66],
    [20, 62],
    [30, 58],
    [40, 61],
    [50, 56],
    [60, 54],
    [70, 58],
    [80, 53],
    [90, 46],
  ];

  const linePath = (pts: number[][]) =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");

  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        minHeight: 420,
        borderRadius: 16,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 25% 70%, rgba(39, 230, 170, 0.18), transparent 38%), radial-gradient(circle at 75% 25%, rgba(65, 153, 255, 0.18), transparent 42%), radial-gradient(circle at 84% 72%, rgba(103, 255, 227, 0.12), transparent 32%), linear-gradient(135deg, #020611 0%, #04101d 55%, #020914 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.02)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(130,180,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(130,180,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.6,
        }}
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="chartGreen" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4dffc8" />
            <stop offset="100%" stopColor="#b8ff72" />
          </linearGradient>
          <linearGradient id="chartBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#49b5ff" />
            <stop offset="100%" stopColor="#8ce8ff" />
          </linearGradient>
          <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#46d7ff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#46d7ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g opacity="0.65">
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={10 + i * 8}
              y1={46}
              x2={10 + i * 8}
              y2={84}
              stroke="rgba(160,210,255,0.16)"
              strokeWidth="0.2"
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1={10}
              y1={46 + i * 8}
              x2={94}
              y2={46 + i * 8}
              stroke="rgba(160,210,255,0.16)"
              strokeWidth="0.2"
            />
          ))}
        </g>

        <path
          d={`${linePath(pointsB)} L 90 84 L 10 84 Z`}
          fill="url(#areaFill)"
          opacity="0.7"
        />
        <path
          d={linePath(pointsA)}
          fill="none"
          stroke="url(#chartGreen)"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={linePath(pointsB)}
          fill="none"
          stroke="url(#chartBlue)"
          strokeWidth="0.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />

        {pointsA.map(([x, y], i) => (
          <circle
            key={`a-${i}`}
            cx={x}
            cy={y}
            r="0.45"
            fill="#8affc7"
            opacity="0.95"
          />
        ))}

        <g opacity="0.7">
          <path
            d="M10 32 C 18 26, 24 38, 32 32 S 46 26, 54 32 S 68 38, 76 32 S 90 26, 96 32"
            fill="none"
            stroke="#49ffd3"
            strokeWidth="0.28"
            strokeDasharray="0.8 1.2"
          />
          <path
            d="M8 22 C 18 18, 26 24, 34 21 S 50 17, 60 21 S 76 26, 92 20"
            fill="none"
            stroke="#66b8ff"
            strokeWidth="0.22"
            opacity="0.6"
          />
        </g>

        <g opacity="0.35">
          {[
            [22, 18],
            [30, 24],
            [38, 16],
            [48, 22],
            [58, 15],
            [68, 24],
            [80, 18],
          ].map(([x, y], i) => (
            <circle
              key={`pt-${i}`}
              cx={x}
              cy={y}
              r="0.28"
              fill="#d8f6ff"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

const ServiceDetailsContent = ({
  serviceInfo,
  sectionClass,
}: ServiceDetailsProps) => {
  const {
    id,
    title,
    promise,
    longDescription,
    keyBenefits = [],
    problem,
    solution,
    targetAudience,
    technologies = [],
    banner,
  } = serviceInfo || {};

  const bannerSrc = banner ?? "/assets/img/banner/pepro-service-web.jpg";
  const useGeneratedAiVisual = id === 2 && !banner;
  const useGeneratedScientificVisual = id === 4;

  return (
    <>
      <div
        className={`services-details-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  {useGeneratedScientificVisual ? (
                    <ScientificDataGeneratedVisual />
                  ) : useGeneratedAiVisual ? (
                    <AiAutomationGeneratedVisual />
                  ) : (
                    <Image
                      src={bannerSrc}
                      alt="Illustration service"
                      width={1900}
                      height={883}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-7">
                <h2>{title}</h2>
                <h5 className="text-primary mb-3">{promise}</h5>
                <p>{longDescription}</p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <h4>Avantages clés</h4>
                <ul className="feature-list-item">
                  {keyBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="row mt-50 mt-xs-20">
              <div className="col-md-6 mb-30">
                <div className="item bg-gray p-5 rounded h-100">
                  <h4>Le Problème</h4>
                  <p>{problem}</p>
                </div>
              </div>
              <div className="col-md-6 mb-30">
                <div className="item bg-dark text-light p-5 rounded h-100">
                  <h4 className="text-light">Notre Solution</h4>
                  <p className="text-light">{solution}</p>
                </div>
              </div>
            </div>

            <div className="row mt-30">
              <div className="col-lg-12">
                <div
                  className="p-5 rounded"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow:
                      "0 12px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  <h4>Public Cible</h4>
                  <p>{targetAudience}</p>

                  <h4 className="mt-4">Technologies et Outils</h4>
                  <div className="mt-3">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="badge me-2 mb-2 p-2"
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "#071018",
                          background:
                            "linear-gradient(135deg, #bfff22 0%, #98f516 100%)",
                          border: "1px solid rgba(255,255,255,0.18)",
                          boxShadow:
                            "0 6px 16px rgba(152,245,22,0.18), inset 0 1px 0 rgba(255,255,255,0.35)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="services-more mt-100 mt-xs-30">
              <h2 className="mb-20">Services populaires</h2>
              <div className="row">
                {services.slice(0, 6).map((service) => (
                  <div className="col-lg-4 col-md-6" key={service.id}>
                    <div className="item">
                      <Image
                        className="regular-img"
                        src={`/assets/img/icon/${service.icon}`}
                        alt={`Icône ${service.title}`}
                        width={75}
                        height={60}
                      />
                      <Image
                        className="light-img"
                        src={`/assets/img/icon/${service.iconLight}`}
                        alt={`Icône ${service.title}`}
                        width={75}
                        height={60}
                      />
                      <h4>
                        <Link href={getServicePath(service)}>
                          {service.title}
                        </Link>
                      </h4>
                      <p>{service.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
