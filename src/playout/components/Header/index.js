import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Logo tiktok' />
                </div>
                <div className={cx('search')}>
                    <input placeholder='Tìm Kiếm' spellCheck={false} type='text' />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className={cx('action')}>
                    <button className={cx('upload')}>
                        Uload
                    </button>
                    <button className={cx('login')}>
                        Đăng Nhập
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;