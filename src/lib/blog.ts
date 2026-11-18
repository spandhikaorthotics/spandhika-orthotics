export type BlogPost = {
  slug: string;
  category: string;
  readTime: string;
  /** ISO date the article was published. */
  date: string;
  title: string;
  /** Short summary used on cards. */
  excerpt: string;
  /** Standfirst shown under the title on the article page. */
  dek?: string;
  image: string;
  imageAlt: string;
  /** Show on the blog index and in "Keep reading". */
  listed: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "beyond-the-foam",
    category: "Performance",
    readTime: "6 min read",
    date: "2026-06-30",
    title: "Beyond the Foam: How Pressure Mapping Helps Athletes Recover Faster",
    excerpt:
      "Athletes need more than just cushioning. Discover how dynamic pressure mapping and load distribution actively prevent repetitive strain injuries and speed up recovery.",
    dek: "Cushioning hides the impact you feel. But it rarely fixes how pressure is spread across your feet — and that is usually where lasting recovery begins.",
    image: "/1.png",
    imageAlt: "Runner's shoe showing dynamic pressure mapping load distribution",
    listed: true,
  },
  {
    slug: "diabetic-foot-ulcers",
    category: "Clinical Care",
    readTime: "5 min read",
    date: "2026-06-30",
    title: "Why Diabetic Foot Ulcers Don't Start Overnight: The Case for Continuous Pressure Monitoring",
    excerpt:
      "A diabetic foot ulcer isn't a sudden crisis—it's the result of an 89-day blind spot between clinic visits. Discover why continuous pressure monitoring matters.",
    dek: "A diabetic foot sore does not happen suddenly. It is usually the final result of weeks of invisible damage that happens between your doctor visits.",
    image: "/2_.png",
    imageAlt: "Clinician assessing a diabetic patient's foot for early ulcer risk and plantar pressure",
    listed: true,
  },
  {
    slug: "fall-predict",
    category: "Elderly Care",
    readTime: "6 min read",
    date: "2026-07-01",
    title: "Preventing Falls in Seniors: How Gait Tracking Detects Risks Before They Happen",
    excerpt:
      "A fall is rarely just a sudden accident. It is often the predictable outcome of weeks of invisible gait deterioration that standard checkups miss.",
    dek: "A fall is rarely just a sudden accident. It is usually the result of weeks of slow, invisible changes in how a person walks that standard doctor checkups often miss.",
    image: "/3_1.png",
    imageAlt: "An elderly person walking steadily, supported by continuous gait monitoring technology",
    listed: true,
  },
  {
    slug: "plantar-fasciitis",
    category: "Clinical Care",
    readTime: "5 min read",
    date: "2026-06-23",
    title: "Plantar Fasciitis Relief: Why Standard Insoles Often Fall Short",
    excerpt:
      "Learn why standard insoles often fall short for plantar fasciitis and how personalized, dynamic pressure mapping can correct the root cause of heel pain.",
    dek: "Soft foam can hide your heel pain for a little while. But it rarely fixes the uneven pressure that caused the pain in the first place—and that is usually the key to lasting relief.",
    image: "/4.png",
    imageAlt: "Clinician examining a patient's foot mechanics to assess plantar fasciitis",
    listed: true,
  },
  {
    slug: "sustained-foot-comfort",
    category: "Occupational Health",
    readTime: "5 min read",
    date: "2026-06-23",
    title: "Surviving a 12-Hour Shift: The Science of Sustained Foot Comfort",
    excerpt:
      "Discover the biomechanics behind foot fatigue during long work shifts, and how pressure distribution, alignment and personalised support help you stay comfortable all day.",
    image: "/3.png",
    imageAlt: "Nurse standing in a hospital corridor wearing supportive work shoes",
    // Not linked from the blog index on the live site; kept unlisted.
    listed: false,
  },
];

export const listedPosts = blogPosts.filter((p) => p.listed);

export function getPost(slug: string): BlogPost {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return post;
}

export function formatPostDate(iso: string) {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}
