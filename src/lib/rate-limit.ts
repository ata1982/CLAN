interface RateLimitOptions {
  interval: number; // Time window in milliseconds
  uniqueTokenPerInterval: number; // Maximum requests per window
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

class RateLimiter {
  private requests = new Map<string, { count: number; resetTime: number }>();

  public async check(
    identifier: string,
    options: RateLimitOptions
  ): Promise<RateLimitResult> {
    const now = Date.now();

    // Clean up expired entries
    for (const [key, value] of this.requests.entries()) {
      if (value.resetTime <= now) {
        this.requests.delete(key);
      }
    }

    const current = this.requests.get(identifier);
    
    if (!current) {
      // First request for this identifier
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + options.interval,
      });
      
      return {
        success: true,
        limit: options.uniqueTokenPerInterval,
        remaining: options.uniqueTokenPerInterval - 1,
        reset: now + options.interval,
      };
    }

    if (current.resetTime <= now) {
      // Window has expired, reset
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + options.interval,
      });
      
      return {
        success: true,
        limit: options.uniqueTokenPerInterval,
        remaining: options.uniqueTokenPerInterval - 1,
        reset: now + options.interval,
      };
    }

    // Check if limit exceeded
    if (current.count >= options.uniqueTokenPerInterval) {
      return {
        success: false,
        limit: options.uniqueTokenPerInterval,
        remaining: 0,
        reset: current.resetTime,
      };
    }

    // Increment count
    current.count++;
    this.requests.set(identifier, current);

    return {
      success: true,
      limit: options.uniqueTokenPerInterval,
      remaining: options.uniqueTokenPerInterval - current.count,
      reset: current.resetTime,
    };
  }
}

// Singleton instance
const rateLimiter = new RateLimiter();

export async function rateLimit(
  request: Request,
  options: RateLimitOptions
): Promise<RateLimitResult> {
  // Use IP address as identifier
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 
             request.headers.get('x-real-ip') || 
             'unknown';

  return rateLimiter.check(ip, options);
}

// Common rate limit configurations
export const rateLimitConfigs = {
  // Very strict - for authentication endpoints
  auth: { interval: 15 * 60 * 1000, uniqueTokenPerInterval: 5 }, // 5 requests per 15 minutes
  
  // Strict - for contact forms and sensitive operations
  contact: { interval: 5 * 60 * 1000, uniqueTokenPerInterval: 3 }, // 3 requests per 5 minutes
  
  // Moderate - for newsletter signups
  newsletter: { interval: 60 * 1000, uniqueTokenPerInterval: 2 }, // 2 requests per minute
  
  // Lenient - for analytics and general API calls
  api: { interval: 60 * 1000, uniqueTokenPerInterval: 100 }, // 100 requests per minute
};