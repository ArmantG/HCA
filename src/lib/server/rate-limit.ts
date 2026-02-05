type RateLimitState = {
	count: number;
	resetAt: number;
};

const buckets = new Map<string, RateLimitState>();

export type RateLimitResult = {
	ok: boolean;
	retryAfterMs?: number;
};

export function checkRateLimit(
	key: string,
	{ limit = 5, windowMs = 10 * 60 * 1000 }: { limit?: number; windowMs?: number } = {}
): RateLimitResult {
	const now = Date.now();
	const current = buckets.get(key);

	if (!current || now > current.resetAt) {
		buckets.set(key, { count: 1, resetAt: now + windowMs });
		return { ok: true };
	}

	if (current.count >= limit) {
		return { ok: false, retryAfterMs: current.resetAt - now };
	}

	current.count += 1;
	buckets.set(key, current);

	return { ok: true };
}
