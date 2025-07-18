"use client";

import { useState } from "react";
import { useIframeSdk } from "@whop/react";

export default function DiscoverPage() {
  const sdk = useIframeSdk();
  const [email, setEmail] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          Discover your app
        </h1>
        <div className="bg-white rounded-xl p-8 shadow-md text-center mb-16">
          {email ? (
            <p className="text-xl text-green-600">✅ Welcome back, {email}!</p>
          ) : (
            <p className="text-xl text-gray-600">Please log in to Whop</p>
          )}
        </div>
      </div>
    </div>
  );
}
