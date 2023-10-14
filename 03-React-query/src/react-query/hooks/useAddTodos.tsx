import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { CACHE_KEY_TODOS } from "../constants";
import { Todo } from "./useTodos";

interface AddtodoContext {
  previousTodo: Todo[];
}

const useAddTodos = (onAdd: () => void) => {
  const queryClinet = useQueryClient();

  return useMutation<Todo, Error, Todo, AddtodoContext>({
    mutationFn: async (todo: Todo) => {
      return await axios
        .post<Todo>("https://jsonplaceholder.typicode.com/postsx", todo)
        .then((res) => res.data);
    },
    onMutate: (addedTodo) => {
      const previousTodo = queryClinet.getQueryData<Todo[]>(["todo"]) || [];

      queryClinet.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        addedTodo,
        ...(todos || []),
      ]);
      onAdd();
      return { previousTodo };
    },
    onSuccess: (responsefromServer, addedTodo, context) => {
      //In order to update the list we can invalidate the cache and refetch it again
      // queryClinet.invalidateQueries({
      //   queryKey: CACHE_KEY_TODOS,
      // });
      //For this fake api we have to use another method
      // queryClinet.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
      //   addedTodo,
      //   ...(todos || []),
      // ]);
      queryClinet.setQueryData<Todo[] | undefined>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === addedTodo ? responsefromServer : todo))
      );
    },
    onError: (error, addedTodo, context) => {
      if (!context) return;
      queryClinet.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodo);
    },
  });
};

export default useAddTodos;
