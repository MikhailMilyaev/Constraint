import React from 'react';
import classes from './Author.module.css';

const Author = ({ imageUrl, name, description }) => {
  return (
    <section className={classes.author}>
      <div className={classes.container}>
        <div className={classes.content}>
          <img src="http://procesing.ru/wp-content/uploads/2011/09/andrey-300x199.jpg" alt={name} className={classes.image} />
          <div className={classes.info}>
            <h2 className={classes.name}>Андрей Викторович Усачев (1956-2010)</h2>
            <p className={classes.description}>«Процессинг не для избранных, процессинг для ИЗБРАВШИХ, – избравших тяжелейший путь духовного возрождения.  
А. В. Усачёв
Инженер, художник, философ и создатель высокоэффективной методики духовного пробуждения.
Андрей Викторович сочетал в себе страсть к точным наукам и искусству.
Будучи соавтором 11 патентов в области высокоточных технологий, он также посвящал себя живописи.
Более 20 лет Андрей Викторович исследовал психологию, религию, эзотерику и другие дисциплины в поисках эффективных методик личностного роста. 
Он консультировал людей, стремящихся к духовному развитию, и стал известен как создатель революционной системы совершенствования личности.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;