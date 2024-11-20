import { useSuspenseQuery } from "@tanstack/react-query";

// Define your data-fetching function
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export default function DataFetchingComponent() {
  const { data } = useSuspenseQuery({queryKey:["data"], queryFn: fetchData}); 


  return (
    <div>
      <h1>Fetching data with React Suspense</h1>
      {data.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
;