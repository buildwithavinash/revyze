import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

console.log("Supabase URL exists:", Boolean(supabaseUrl));
console.log(
  "Supabase publishable key exists:",
  Boolean(supabasePublishableKey)
);

if (!supabaseUrl) {
  throw new Error("VITE_SUPABASE_URL is missing");
}

if (!supabasePublishableKey) {
  throw new Error("VITE_SUPABASE_PUBLISHABLE_KEY is missing");
}

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);