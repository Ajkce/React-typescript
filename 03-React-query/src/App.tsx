import "./App.css";
import InfinitePosts from "./react-query/InfinitePosts";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
      {/* <PostList></PostList> */}
      {/* <InfinitePosts></InfinitePosts> */}
    </>
  );
}

export default App;
