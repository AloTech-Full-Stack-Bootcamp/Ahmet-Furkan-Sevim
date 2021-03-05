import BaseButton from './BaseButton';
import ButtonNoFill from './ButtonNoFill';
export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <ButtonNoFill>Giris Yap</ButtonNoFill>
        <BaseButton>KayıtOl</BaseButton>
      </nav>
      <br />
      <br />
      <main>{children}</main>
      <br />
      <br />
      <footer>Design by Ef Soft</footer>
    </div>
  );
}
