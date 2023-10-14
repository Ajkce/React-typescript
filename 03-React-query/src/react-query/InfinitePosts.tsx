import axios from "axios";
import React from "react";
import { useInfiniteQuery } from "react-query";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const InfinitePosts = () => {
  const pageSize = 10;
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async ({ pageParam }) =>
      await axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * pageSize,
            _limit: pageSize,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) => {
      //We should return the next page numbe
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
  return (
    <>
      <ul className="list-group">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((item) => (
              <li key={item.id} className="list-group-item">
                {item.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default InfinitePosts;
