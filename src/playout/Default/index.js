import Header from '../components/Header';
import styles from './Default.module.scss';
import classNames from 'classnames/bind';
import Slibar from './Slibar';

const cx = classNames.bind(styles)

function DefaultPlayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Slibar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultPlayout;