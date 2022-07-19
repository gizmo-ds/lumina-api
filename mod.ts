import "https://deno.land/std@0.147.0/dotenv/load.ts";
import { serve } from "./deps.ts";
import routers from "./router.ts";

serve(routers, { port: 8080 });
