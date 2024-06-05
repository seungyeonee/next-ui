import { List, Button } from "@/components";
import { Suspense } from "react";

export default function MainPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="card">
        <h1 className="h1">NEXT-UI</h1>
        <p className="txt mb-4">Next-UI is a powerful and flexible UI library built with Next.js and TypeScript. Designed to boost developer productivity and code quality, it offers:</p>
        <hr />
        <List className="mt-4 mb-4">
          <li>Type Safety: TypeScript ensures type correctness at compile-time, preventing runtime errors.</li>
          <li>Optimized Bundle Size: Code-splitting and tree-shaking techniques minimize bundle size for fast load times.</li>
          <li>Extensible Design System: Easily implement your brand{`'`}s design with default design tokens and theming.</li>
          <li>Accessibility Compliance: Follows WAI-ARIA standards for web accessibility.</li>
          <li>Comprehensive Component Library: Provides a rich set of UI components like buttons, inputs, modals, tooltips, and tables.</li>
        </List>
        <hr />
        <p className="txt mt-4 mb-4">Next-UI combines high development velocity with robust code quality. Its simple usage boosts productivity while its powerful features and extensibility handle complex requirements. Leverage Next-UI for your Next.js and React projects today.</p>
        <Button disabled>
          See You Soon...
        </Button>
      </section>
    </Suspense>
  );
}
