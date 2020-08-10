import './style.scss';

import * as feather from 'feather-icons';
import * as bootstrap from 'bootstrap';
import * as popper from 'popper.js';

window.onload = () => {
    feather.replace();

    let elements = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    elements.map((el) => new bootstrap.Tooltip(el));
};
