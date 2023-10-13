import axios from "axios";
import React, { useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface PostQuery {
  page: number;
  pageSize: number;
}

const PostList = () => {
  // const [user, setUser] = useState<number>();
  const pageSize = 10;
  // const [page, setPage] = useState(1);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        onClick={() => fetchNextPage()}
        className="btn btn-primary"
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
