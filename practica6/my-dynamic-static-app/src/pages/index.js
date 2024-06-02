import dynamic from "next/dynamic";

const LazyComponent = dynamic(() => import("../components/LazyComponent"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div>
      <h1>Ronaldo PRO - Home Page with Lazy Loading</h1>
      <LazyComponent />
    </div>
  );
}
