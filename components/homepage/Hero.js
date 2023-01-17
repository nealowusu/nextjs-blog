import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src='/images/site/neal_smile.jpg'
            alt='An Image Showing Max'
            width={400}
            height={322}
          />
        </div>
        <h1>Hi, I&apos;m Neal</h1>
        <p>
          I blog about web development - epecially frontend frameworks like
          Angular or React.
        </p>
      </section>
    </>
  );
};

export default Hero;
