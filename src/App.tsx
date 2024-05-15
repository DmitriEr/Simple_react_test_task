// Мы ожидаем, что Вы исправите синтаксические ошибки, сделаете перехват возможных исключений и улучшите читаемость кода.
// А так же, напишите кастомный хук useThrottle и используете его там где это нужно.
// Желательно использование React.memo и React.useCallback там где это имеет смысл.
// Будет большим плюсом, если Вы сможете закэшировать получение случайного пользователя.
// Укажите правильные типы.
// По возможности пришлите Ваш вариант в https://codesandbox.io

import React, { useState, memo, useCallback, useRef } from "react";
import { Button } from "./components/Button";
import { UserInfo } from "./components/UserInfo";
import { getUserData } from "./api";
import { useDebouncedCallback } from "./hooks";
import type { User } from "./types";

function App() {
  const memoryData = useRef<Record<string, User>>({});
  const [item, setItem] = useState<User | null>(null);

  const handleButtonClick = useCallback(() => {
    const memoryRefData = memoryData.current;
    const id = Math.floor(Math.random() * (10 - 1)) + 1;
    if (id in memoryRefData) {
      setItem(memoryRefData[id]);
    } else {
      getUserData(id).then((data) => {
        if (data?.id) {
          setItem(data);
          memoryRefData[id] = data;
        }
      });
    }
  }, [setItem, memoryData.current]);

  // в данном случае, показалось лучше использование debounce
  const handelDebouncedClick = useDebouncedCallback(handleButtonClick, 500);

  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={handelDebouncedClick} />
      {item?.id && <UserInfo name={item.name} phone={item.phone} />}
    </div>
  );
}

export default App;
