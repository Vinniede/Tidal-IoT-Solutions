import { MetadataRoute } from "next";

const rootUrl = "https://tidal-iot.com";
const routes = [
  "/",
  "/about",
  "/contact",
  "/industries",
  "/industries/banking-financial-services",
  "/industries/government",
  "/industries/logistics-transport",
  "/industries/security-companies",
  "/industries/smes",
  "/industries/utilities",
  "/insights",
  "/insights/blog",
  "/insights/case-studies",
  "/insights/resources",
  "/solutions",
  "/solutions/integrated-cybersecurity",
  "/solutions/intelligent-telematics",
  "/solutions/resilient-networks",
  "/solutions/secure-communications",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${rootUrl}${route}`,
    lastModified: new Date(),
  }));
}
