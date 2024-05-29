let cachedData = null;
let cacheTime = null;

export async function getServerSideProps() {
  const now = Date.now();
  if (!cachedData || now - cacheTime > 60000) {
    // Cache expiration: 1 minute
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    cachedData = await res.json();
    cacheTime = now;
  }

  return {
    props: { posts: cachedData },
  };
}

export default function DataPage({ posts }) {
  return (
    <div>
      <h1>Data with Caching</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
