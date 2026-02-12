"use client";

import Link from "next/link";
import { WalletConnect } from "@/components/wallet-connect";
import { useAuth } from "@/components/providers/auth-provider";
import { PublicNavbar } from "@/components/public-navbar";
import { getCurrencyDisplay, getNetwork } from "@/lib/chain-config";
import {
  Code,
  FileText,
  Globe,
  ShoppingBag,
  Zap,
  Shield,
  ArrowRight,
  Rocket,
  CheckCircle,
  Receipt,
} from "lucide-react";

export default function LandingPage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
              <Rocket className="h-4 w-4" />
              HTTP 402 Payment Protocol
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Monetize <span className="text-primary italic">everything.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Paywall your APIs, files, articles, and Shopify stores with {getCurrencyDisplay()} on {getNetwork()}.
              Instant payments, no middlemen, AI-agent ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {isAuthenticated ? (
                <Link
                  href="/dashboard/resources/new"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Create Resource <ArrowRight className="h-5 w-5" />
                </Link>
              ) : (
                <WalletConnect />
              )}
              <Link
                href="/docs"
                className="px-8 py-4 bg-muted text-foreground border border-border rounded-2xl font-bold text-lg hover:bg-accent transition-all flex items-center justify-center gap-2"
              >
                View Documentation
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-8 text-muted-foreground">
              <div className="flex items-center gap-1 font-bold">
                <Shield className="h-4 w-4" /> SECURED
              </div>
              <div className="flex items-center gap-1 font-bold">
                <Zap className="h-4 w-4" /> INSTANT PAYMENTS
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-6 border border-primary/10"></div>
              <div className="absolute inset-0 bg-muted rounded-[3rem] -rotate-3 border border-border flex items-center justify-center">
                <div className="relative animate-bounce" style={{ animationDuration: "3s" }}>
                  <div className="relative">
                    <div className="absolute -left-24 top-10 w-32 h-20 bg-primary/10 border-2 border-primary/30 rounded-lg rotate-[-20deg] flex items-center justify-center overflow-hidden">
                      <Code className="h-8 w-8 text-primary/40" />
                    </div>
                    <div className="absolute -right-24 top-10 w-32 h-20 bg-primary/10 border-2 border-primary/30 rounded-lg rotate-[20deg] flex items-center justify-center overflow-hidden">
                      <ShoppingBag className="h-8 w-8 text-primary/40" />
                    </div>
                    <div className="w-24 h-48 bg-card rounded-t-full rounded-b-3xl relative overflow-hidden border-4 border-primary/20">
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 size-8 bg-muted rounded-full border-4 border-primary/40"></div>
                      <div className="absolute bottom-0 w-full h-4 bg-primary"></div>
                    </div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                      <div className="w-4 h-8 bg-orange-500 rounded-full blur-sm opacity-60"></div>
                      <div className="w-8 h-4 bg-primary/40 rounded-full blur-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative overflow-hidden" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">What You Can Monetize</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Turn any content into revenue.</h3>
            </div>
            <p className="text-muted-foreground max-w-xs">
              APIs, files, articles, and Shopify stores. Everything can be paywalled with HTTP 402.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-[2rem] bg-card border border-border hover:border-primary/30 transition-all">
              <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="h-7 w-7" />
              </div>
              <h4 className="text-2xl font-bold mb-4">API Proxy</h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Monetize any API endpoint. Pay-per-call for LLMs, data feeds, and services. Perfect for AI agents.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <span>GET /x402/resource/my-api</span>
              </div>
            </div>
            <div className="group p-8 rounded-[2rem] bg-card border border-border hover:border-primary/30 transition-all">
              <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Receipt className="h-7 w-7" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Files & Downloads</h4>
              <p className="text-muted-foreground leading-relaxed">
                PDFs, images, videos, datasets. Secure downloads with instant {getCurrencyDisplay()} payment on {getNetwork()}.
              </p>
            </div>
            <div className="group p-8 rounded-[2rem] bg-card border border-border hover:border-primary/30 transition-all">
              <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-7 w-7" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Articles & Content</h4>
              <p className="text-muted-foreground leading-relaxed">
                Blog posts, research, guides. Micropayments per read. No subscriptions needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commerce Section */}
      <section className="py-24 px-6 bg-secondary" id="commerce">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-card p-8 rounded-[2.5rem] border border-border shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Shopify Integration</p>
                  <h5 className="text-xl font-bold">Store Products</h5>
                </div>
                <button className="size-10 rounded-full bg-muted flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-muted border border-border">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <ShoppingBag className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold">Premium T-Shirt</p>
                      <p className="text-xs text-muted-foreground">2 mins ago</p>
                    </div>
                  </div>
                  <span className="font-bold text-primary">+29.99 {getCurrencyDisplay()}</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-muted border border-border">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold">Digital Download</p>
                      <p className="text-xs text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                  <span className="font-bold text-primary">+9.99 {getCurrencyDisplay()}</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-muted border border-border">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center">
                      <Code className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold">API Access</p>
                      <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                  </div>
                  <span className="font-bold text-muted-foreground">0.50 {getCurrencyDisplay()}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Shopify Commerce</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Sell products with crypto payments.</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect your Shopify store and sell products with {getCurrencyDisplay()} payments.
              AI agents can browse and purchase automatically. No credit cards needed.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle className="h-5 w-5 text-primary" />
                Connect Shopify Store in Minutes
              </li>
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle className="h-5 w-5 text-primary" />
                {getCurrencyDisplay()} Payments
              </li>
              <li className="flex items-center gap-3 text-lg">
                <CheckCircle className="h-5 w-5 text-primary" />
                AI Agent Ready E-Commerce
              </li>
            </ul>
            {isAuthenticated ? (
              <Link
                href="/dashboard/stores"
                className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all items-center justify-center gap-2"
              >
                Connect Store
              </Link>
            ) : (
              <div className="inline-block">
                <WalletConnect />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-24 px-6" id="ai">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">AI Agent Ready</h2>
            <h3 className="text-4xl md:text-6xl font-bold">Built for the Age of AI.</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AI agents need to access paid resources, make purchases, and interact with services.
              x402 provides a standard HTTP 402 protocol that any agent can use.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="p-6 rounded-3xl bg-card border border-border hover:bg-secondary transition-all cursor-pointer">
              <p className="text-muted-foreground font-bold mb-2">MCP Support</p>
              <p className="text-3xl font-bold mb-4">
                Model Context Protocol
              </p>
              <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-primary"></div>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-card border border-border hover:bg-secondary transition-all cursor-pointer">
              <p className="text-muted-foreground font-bold mb-2">Auto Payments</p>
              <p className="text-3xl font-bold mb-4">
                Instant Verification
              </p>
              <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-primary"></div>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-card border border-border hover:bg-secondary transition-all cursor-pointer">
              <p className="text-muted-foreground font-bold mb-2">Universal</p>
              <p className="text-3xl font-bold mb-4">
                Any HTTP Client
              </p>
              <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                <div className="w-full h-full bg-primary"></div>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-card border border-border hover:bg-secondary transition-all cursor-pointer">
              <p className="text-muted-foreground font-bold mb-2">Ethereum</p>
              <p className="text-3xl font-bold mb-4">
                {getCurrencyDisplay()}
              </p>
              <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="SuperPage" className="h-8 w-auto" />
                <span className="text-xl font-bold tracking-tight">SuperPage</span>
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed text-lg">
                The web&apos;s native payment protocol. Monetize APIs, files, articles, and stores with HTTP 402.
              </p>
              <div className="flex gap-4">
                <a className="size-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-all group" href="#">
                  <span className="text-muted-foreground group-hover:text-primary-foreground">📧</span>
                </a>
                <a className="size-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-all group" href="#">
                  <span className="text-muted-foreground group-hover:text-primary-foreground">🌐</span>
                </a>
                <a className="size-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-all group" href="#">
                  <span className="text-muted-foreground group-hover:text-primary-foreground">💬</span>
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <h6 className="font-bold text-foreground">Platform</h6>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
                <li><Link href="/explore" className="hover:text-primary">Explore</Link></li>
                <li><Link href="/docs" className="hover:text-primary">Documentation</Link></li>
                <li><Link href="/creators" className="hover:text-primary">Creators</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h6 className="font-bold text-foreground">Resources</h6>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li><Link href="/docs/getting-started" className="hover:text-primary">Getting Started</Link></li>
                <li><Link href="#" className="hover:text-primary">API Reference</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground text-sm">© 2025 SuperPage. All rights reserved.</p>
            <div className="flex items-center gap-2 text-primary font-bold italic">
              HTTP 402 Payment Protocol
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
