import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { todoListState, todoListStateType } from "./lib/atom";
import { TodoListStats } from "./TodoListStat";
import { FC, SetStateAction, useState } from "react";

/**
 * リストのカウントID
 */
let id = 1;

/**
 * ID取得してインクリメント
 * @returns {number} ID
 */
const getId = (): number => {
  return id++;
};

/**
 * Recoilの勉強用
 *
 * 参考：https://reffect.co.jp/react/react-recoil#Recoil
 *
 * @returns
 */
export const TodoList = () => {
  return <TodoListCon/>
};

/**
 * TodoListのロジック
 */
const TodoListCon = () => {
  const [title, setTitle] = useState<string>("");
  const [todoList, setTodoList] =
    useRecoilState<todoListStateType[]>(todoListState);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    if (!title || title === "") return;
    // setStateと一緒で引数にコールバック使える
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: title,
        isComplete: false,
      },
    ]);
    setTitle("");
  };
  return (
    <TodoListPre
      addItem={addItem}
      handleChange={handleChange}
      title={title}
      todoList={todoList}
    />
  );
};

interface TodoListPreProps {
  title: string;
  todoList: todoListStateType[];
  handleChange: (e: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  addItem: () => void;
}
/**
 * TodoListの画面
 */
const TodoListPre: FC<TodoListPreProps> = (props) => {
  const { addItem, handleChange, title, todoList } = props;
  return (
    <>
      <Typography variant="h2">RecoilによるTodoアプリ</Typography>
      <TodoListStats />
      <Box
        margin="1em 0"
        display="flex"
        justifyContent="left"
        alignItems="center"
      >
        <TextField value={title} onChange={handleChange} />
        <Button onClick={addItem}>Add</Button>
      </Box>
      <List>
        {todoList.map((item) => (
          <ListItem key={item.id}>{item.title}</ListItem>
        ))}
      </List>
    </>
  );
};
