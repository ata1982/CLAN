interface AuthResult {
  success: boolean;
  user?: {
    id: string;
    email: string;
    role: 'admin' | 'user';
  };
  error?: string;
}

// Simple API key authentication for admin endpoints
export async function authenticateApiKey(request: Request): Promise<AuthResult> {
  const apiKey = request.headers.get('x-api-key');
  
  if (!apiKey) {
    return {
      success: false,
      error: 'API key required'
    };
  }
  
  // In production, these should be environment variables
  const validApiKeys = {
    [process.env.ADMIN_API_KEY || 'admin-key-placeholder']: {
      id: 'admin-1',
      email: 'admin@clan.com',
      role: 'admin' as const
    }
  };
  
  const user = validApiKeys[apiKey];
  
  if (!user) {
    return {
      success: false,
      error: 'Invalid API key'
    };
  }
  
  return {
    success: true,
    user
  };
}

// Simple bearer token authentication 
export async function authenticateBearerToken(request: Request): Promise<AuthResult> {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      success: false,
      error: 'Bearer token required'
    };
  }
  
  const token = authHeader.substring(7);
  
  // In production, validate against JWT or database
  if (token === process.env.ANALYTICS_TOKEN || token === 'demo-token') {
    return {
      success: true,
      user: {
        id: 'analytics-user',
        email: 'analytics@clan.com',
        role: 'user'
      }
    };
  }
  
  return {
    success: false,
    error: 'Invalid token'
  };
}

// Middleware wrapper for protected routes
export function requireAuth(
  handler: (request: Request, auth: AuthResult['user']) => Promise<Response>
) {
  return async (request: Request): Promise<Response> => {
    // Try API key first, then bearer token
    let authResult = await authenticateApiKey(request);
    
    if (!authResult.success) {
      authResult = await authenticateBearerToken(request);
    }
    
    if (!authResult.success) {
      return new Response(
        JSON.stringify({ error: authResult.error }),
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    return handler(request, authResult.user!);
  };
}