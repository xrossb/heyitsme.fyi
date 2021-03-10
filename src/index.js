import './style.scss';

import { replace } from 'feather-icons';
import { Tooltip } from 'bootstrap';

window.onload = () => {
    replace();

    let elements = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    elements.map((el) => new Tooltip(el));
};
