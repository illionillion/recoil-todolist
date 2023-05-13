import { atom } from "recoil";

export interface todoListStateType {
  id: number;
  title: string;
  isComplete: boolean;
}
/**
 * TodoListの情報格納
 */
export const todoListState = atom<todoListStateType[]>({
  key: "todoListState",
  default: [
    {
      id: 0,
      title: "メール送信",
      isComplete: false,
    },
  ],
});
