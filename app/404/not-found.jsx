import React from 'react';
import Link from "next/link";

export default function notFound() {
  return (
    <main className="text-center">
      <h2 className="text-3x1">There Was a Problem </h2>
      <p> We Could Not Find The Page You Were Looking For</p>
      <p>Go Back to the <Link href="/">Dashboard</Link></p>
    </main>
  )
}
