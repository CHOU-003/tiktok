import Slider from './Slider';
import styles from './slibar.module.scss';
import classNames  from 'classnames/bind';

const cx = classNames.bind(styles);

function Slibar() {
    return ( 
        <aside className={cx('wrapper')}>
            <h2>Slibar</h2>
            <Slider />
        </aside>
     );
}

export default Slibar;