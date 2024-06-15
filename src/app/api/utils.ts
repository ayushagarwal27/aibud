import { kv } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";

type Duration =
  | `${number} ms`
  | `${number} s`
  | `${number} m`
  | `${number} h`
  | `${number} d`
  | `${number}ms`
  | `${number}s`
  | `${number}m`
  | `${number}h`
  | `${number}d`;

// Create Rate limit
const rateLimit = (tokens: number, timeDuration: Duration) =>
  new Ratelimit({
    redis: kv,
    limiter: Ratelimit.fixedWindow(tokens, timeDuration),
  });

export { rateLimit };
