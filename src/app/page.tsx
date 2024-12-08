"use client";

import { Link } from "@/shared/ui/Link";
import css from "./app.module.scss";

const Home: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.centerItems}>
        <h1>Где меня можно найти</h1>
        <Link
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          href="https://github.com/eugener3"
        >
          я в GitHub
        </Link>
        <Link
          className="px-8 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition"
          href="https://t.me/e_sora"
        >
          Я в тг
        </Link>
      </div>
    </div>
  );
};

export default Home;
