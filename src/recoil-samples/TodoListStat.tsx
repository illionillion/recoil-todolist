import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './lib/selector';
import { Typography } from '@mui/material';

/**
 * リストの合計数表示
 * @returns 
 */
export const TodoListStats = () => {
  const totalNum = useRecoilValue(todoListStatsState);
  return <Typography>Todoの登録数:{totalNum}</Typography>;
};
