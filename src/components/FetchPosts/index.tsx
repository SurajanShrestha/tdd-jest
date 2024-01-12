import { useEffect, useState } from "react";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ulSx: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  fontSize: 20,
};

export const FetchPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPosts = async () => {
    try {
      // Loading start
      setLoading(true);

      // Fetch Data
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = (await res.json()) as IPost[];

      // Set Data
      setPosts(data?.slice(0, 10));
    } catch (error) {
      // No Data
      setPosts([]);
    } finally {
      // Loading end
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h3>Posts 📮</h3>
      {loading ? (
        <small>Loading ⏳...</small>
      ) : posts?.length ? (
        <ul style={ulSx}>
          {posts?.map((post) => (
            <li key={post?.id}>{post?.title}</li>
          ))}
        </ul>
      ) : (
        <small>No Data 😵</small>
      )}
    </div>
  );
};
