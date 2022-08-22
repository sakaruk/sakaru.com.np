import { h } from 'preact';
import Styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Sakar Upadhyaya Khatiwada
      <small className={Styles.byline}>🚀 Built by Astro</small>
    </footer>
  );
}
