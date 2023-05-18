import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./lib/selector";
import { Typography } from "@mui/material";
import { FC } from "react";

/**
 * リストの合計数表示
 * @returns
 */
export const TodoListStats = () => {
  return <TodoListStatsCon/>
};

/**
 * リストの合計数表示のロジック
 * @returns
 */
const TodoListStatsCon = () => {
  const totalNum = useRecoilValue(todoListStatsState);
  return <TodoListStatsPre totalNum={totalNum} />;
};

/**
 * リストの合計数表示の画面
 * @returns
 */
const TodoListStatsPre: FC<{ totalNum: number }> = ({ totalNum }) => {
  return <Typography>Todoの登録数:{totalNum}</Typography>;
};
