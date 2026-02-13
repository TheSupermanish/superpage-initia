#!/usr/bin/env bash
# ──────────────────────────────────────────────
#  SuperPage Dev — starts all services
# ──────────────────────────────────────────────
set -e

# Kill any processes already using our ports
for port in 3000 3001 3002; do
  pid=$(lsof -ti :"$port" 2>/dev/null || true)
  if [ -n "$pid" ]; then
    echo "  Killing process on port $port (pid $pid)"
    kill -9 $pid 2>/dev/null || true
  fi
done

echo ""
echo "  ┌──────────────────────────────────────┐"
echo "  │  SuperPage Dev                        │"
echo "  ├──────────────────────────────────────┤"
echo "  │  Frontend        http://localhost:3000│"
echo "  │  Backend API     http://localhost:3001│"
echo "  │  Payment Server  http://localhost:3002│"
echo "  │  AI Agent        pnpm agent           │"
echo "  └──────────────────────────────────────┘"
echo ""

exec npx concurrently \
  -n "backend,payment,frontend,sdk" \
  -c "blue,green,yellow,magenta" \
  --kill-others-on-fail \
  "pnpm --filter backend run dev" \
  "pnpm --filter backend run dev:payment" \
  "pnpm --filter frontend run dev" \
  "pnpm --filter x402-sdk-eth run dev"
