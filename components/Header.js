import Link from 'next/link';
import Image from 'next/image';
import './Header.scss';

export function HeaderComponent() {
    return (
        <header className="header">
                    <div className="header__inner">
                            <p className="header__user">Hotel Name</p>
                            <div className="header__image">
                            <Link href="/">
                            <Image
                            src="/PauligLogo.png"
                            alt="Paulig Logo"
                            width={300}
                            height={150}
                            
                            />
                            </Link>
                            </div>
                    </div>
    </header>
    )
  }