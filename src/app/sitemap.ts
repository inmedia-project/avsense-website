import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { services, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/services/", ...services.map((s) => `/services/${s.slug}/`), "/work/", "/clients/", "/blog/", ...posts.map((p) => `/blog/${p.slug}/`), "/about/", "/contact/"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.8,
  }));
}
