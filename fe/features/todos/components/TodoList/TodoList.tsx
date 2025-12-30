'use client';

import { useCallback, FC } from 'react';
import { useRouter } from 'next/navigation';
import { faTrashAlt, faFile, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NAVIGATION_PATH } from '@/shared/constants/navigation';
import { TodoType } from '@/features/todos/types';

type TodoListProps = {
  todoList: Array<TodoType>;
  onDeleteTodo: (id: string, title: string) => void;
};

export const TodoList: FC<TodoListProps> = ({ todoList, onDeleteTodo }) => {
  const navigate = useRouter();

  // /**
  //  * 詳細ページに遷移する処理
  //  */
  const handleMoveDetailPage = useCallback(
    (id: string) => navigate.push(`${NAVIGATION_PATH.DETAIL}${id}`),
    [navigate],
  );

  // /**
  //  * 編集ページに遷移する処理
  //  */
  const handleMoveEditPage = useCallback(
    (id: string) => navigate.push(`${NAVIGATION_PATH.EDIT}${id}`),
    [navigate],
  );

  return (
    <ul className="p-0">
      {todoList.map((todo) => (
        <li
          key={todo.id}
          className="relative flex justify-between items-center mb-2.5 list-none leading-normal font-bold bg-[rgba(3,80,63,0.5)] rounded-[5px] p-2.5 h-12.5"
        >
          <span className="cursor-pointer block pt-2 pl-2.5 text-2xl font-['Times New Roman',Times,serif] text-white">
            {todo.title}
          </span>
          <div className="flex justify-around mt-2.5 w-32.5 h-7.5">
            <div className="block cursor-pointer w-10 h-10 text-[#ff9900]">
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon
                icon={faFile}
                size="lg"
                onClick={() => handleMoveDetailPage(todo.id)}
              />
            </div>
            <div className="block cursor-pointer w-10 h-10 text-[#ff9900]">
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="lg"
                onClick={() => handleMoveEditPage(todo.id)}
              />
            </div>
            <div className="block cursor-pointer w-10 h-10 text-[#ff9900]">
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="lg"
                onClick={() => onDeleteTodo(todo.id, todo.title)}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
