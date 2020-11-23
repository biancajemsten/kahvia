import Link from "next/link";
import Image from "next/image";
import "./Header.scss";

export function HeaderComponent() {
  return (
    <header className="c-header">
      <div className="c-header__inner">
        <p className="c-header__user">Helsinki Cafe</p>
        <div className="c-header__image">
          <Link href="/">
            <img src="/PauligLogo.png" alt="Paulig Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
}
