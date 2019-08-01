import moment from 'moment-es6';
import SimpleMDE from 'simplemde';
import ReactHtmlParser from "react-html-parser";

export const markDownHtmlConverter = {
    markDownToHtml,
    htmlToMarkDown

};

function markDownToHtml (date) {
    return SimpleMDE.prototype.markdown(date);
};
function htmlToMarkDown (date) {
    return ReactHtmlParser(date) ;
};