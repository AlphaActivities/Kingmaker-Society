const requiredEnvVars = {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
};

export const validateEnvironment = () => {
  const missing: string[] = [];

  Object.entries(requiredEnvVars).forEach(([key, value]) => {
    if (!value) {
      missing.push(key);
    }
  });

  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);

    if (import.meta.env.PROD) {
      const message = `Configuration Error: Missing environment variables in production. Please configure: ${missing.join(', ')}`;
      throw new Error(message);
    }
  }

  return {
    isValid: missing.length === 0,
    missing,
  };
};

export const getSupabaseConfig = () => {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error('Supabase configuration is missing. Please check your environment variables.');
  }

  return { url, key };
};
