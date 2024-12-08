"use client";

import { Link } from "@/shared/ui/Link";
import css from "./app.module.scss";

const Home: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.centerItems}>
        <h1>Добро пожаловать в мой проект!</h1>
        <Link
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
          href="https://github.com/eugener3"
        >
          Я в Github
        </Link>
        <Link
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
          href="https://t.me/e_sora"
        >
          Я в тг 
        </Link>
      </div>
    </div>
  );
};

export default Home;

