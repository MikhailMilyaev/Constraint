import React from "react";
import classes from "./Result.module.css";

const Result = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Результаты</h2>
        <div className={classes.content}>
          <p>
            Изменяя идеи внутри своего пространства и убирая мусор (в виде
            отживших идей, мешающих жизни), человек меняет свое пространство,
            свое восприятие общей реальности и физической вселенной, отношения
            к другим, и в результате меняет свою судьбу и действует оптимально
            в соответствии со своим целями и задачами.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Result;