import Link from 'next/link';
import Image from 'next/image';
import './Header.scss';

export function HeaderComponent() {
    return (
        <header className="c-header">
                    <div className="c-header__inner">
                            <p className="c-header__user">Hotel Name</p>
                            <div className="c-header__image">
                            <Link href="/">
                            <Image
                            src="/PauligLogo.png"
                            alt="Paulig Logo"
                            width={200}
                            height={150}
                            
                            />
                            </Link>
                            </div>
                    </div>
    </header>
    )
  }