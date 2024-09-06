import React from 'react';
import classes from './Description.module.css';

const Description = () => {
  return (
    <section className={classes.features}>
      <div className={classes.container}>
        {/* Feature 1 */}
        <div className={classes.feature}>
          <h2 className={classes.featureTitle}>Название блока</h2>
          <p>
            Текст внутри блока. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>

        {/* Feature 2 */}
        <div className={classes.feature}>
          <h2 className={classes.featureTitle}>Название блока</h2>
          <p>
            Текст внутри блока. Nullam id dolor id nibh ultricies vehicula ut
            id elit.
          </p>
        </div>

        {/* ...  Добавьте остальные блоки  */}
      </div>
    </section>
  );
};

export default Description;