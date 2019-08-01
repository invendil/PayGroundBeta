import moment from 'moment-es6';

export default (date) => {
    return moment(date).diff(moment(), 'days');
};